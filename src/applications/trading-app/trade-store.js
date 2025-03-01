import { writable, get } from 'svelte/store';
import * as Utilities from "../../helpers/utilities.js";

export default class TradeStore {

  constructor(instigator, leftTrader, rightTrader, publicTradeId, privateTradeId = false, isPrivate = false) {

    this.instigator = instigator;
    this.publicTradeId = publicTradeId;
    this.privateTradeId = privateTradeId;
    this.isPrivate = isPrivate;

    this.leftTraderUser = leftTrader.user;
    this.leftTraderActor = leftTrader.actor;
    this.leftTraderItems = writable(leftTrader.items ?? []);
    this.leftTraderCurrencies = writable(leftTrader.currencies ?? []);
    this.leftTraderItemCurrencies = writable(leftTrader.itemCurrencies ?? []);
    this.leftTraderAccepted = writable(leftTrader.accepted ?? false);

    this.rightTraderUser = rightTrader.user;
    this.rightTraderActor = rightTrader.actor;
    this.rightTraderItems = writable(rightTrader.items ?? []);
    this.rightTraderCurrencies = writable(rightTrader.currencies ?? []);
    this.rightTraderItemCurrencies = writable(rightTrader.itemCurrencies ?? []);
    this.rightTraderAccepted = writable(rightTrader?.accepted ?? false);

  }

  static import(leftTraderData, rightTraderData, publicTradeId) {

    const leftTrader = {
      user: game.users.get(leftTraderData.user),
      actor: fromUuidSync(leftTraderData.actor),
      items: leftTraderData.items,
      currencies: leftTraderData.currencies,
      itemCurrencies: leftTraderData.itemCurrencies,
      accepted: leftTraderData.accepted
    };

    const rightTrader = {
      user: game.users.get(rightTraderData.user),
      actor: fromUuidSync(rightTraderData.actor),
      items: rightTraderData.items,
      currencies: rightTraderData.currencies,
      itemCurrencies: rightTraderData.itemCurrencies,
      accepted: rightTraderData.accepted
    };

    return new this(leftTrader, rightTrader, publicTradeId);
  }

  export() {
    return [{
      user: this.leftTraderUser.id,
      actor: Utilities.getUuid(this.leftTraderActor),
      items: get(this.leftTraderItems),
      currencies: get(this.leftTraderCurrencies),
      itemCurrencies: get(this.leftTraderItemCurrencies),
      accepted: get(this.leftTraderAccepted)
    }, {
      user: this.rightTraderUser.id,
      actor: Utilities.getUuid(this.rightTraderActor),
      items: get(this.rightTraderItems),
      currencies: get(this.rightTraderCurrencies),
      itemCurrencies: get(this.rightTraderItemCurrencies),
      accepted: get(this.rightTraderAccepted)
    }, this.publicTradeId]
  }

  getTradeData() {
    return {
      sourceActor: this.leftTraderActor,
      targetActor: this.rightTraderActor,
      remove: {
        items: get(this.leftTraderItems).concat(get(this.leftTraderItemCurrencies)),
        attributes: get(this.leftTraderCurrencies)
      }, add: {
        items: get(this.rightTraderItems).concat(get(this.rightTraderItemCurrencies)),
        attributes: get(this.rightTraderCurrencies)
      }
    };
  }

  get isUserParticipant() {
    return game.user === this.leftTraderUser || game.user === this.rightTraderUser;
  }

  getExistingCurrencies() {
    return [...get(this.leftTraderCurrencies), ...get(this.leftTraderItemCurrencies)]
  }

  get tradeIsAccepted() {
    return get(this.leftTraderAccepted) && get(this.rightTraderAccepted);
  }

  async toggleAccepted() {
    this.leftTraderAccepted.set(!get(this.leftTraderAccepted));
  }

  updateItems(userId, inItems) {
    if (userId === game.user.id) return;
    this.leftTraderAccepted.set(false);
    this.rightTraderAccepted.set(false);
    if (userId === this.leftTraderUser.id) {
      this.leftTraderItems.set(inItems)
    }
    if (userId === this.rightTraderUser.id) {
      this.rightTraderItems.set(inItems)
    }
  }

  updateItemCurrencies(userId, itemCurrencies) {
    if (userId === game.user.id) return;
    this.leftTraderAccepted.set(false);
    this.rightTraderAccepted.set(false);
    if (userId === this.leftTraderUser.id) {
      this.leftTraderItemCurrencies.set(itemCurrencies)
    }
    if (userId === this.rightTraderUser.id) {
      this.rightTraderItemCurrencies.set(itemCurrencies)
    }
  }

  updateCurrencies(userId, inCurrencies) {
    if (userId === game.user.id) return;
    this.leftTraderAccepted.set(false);
    this.rightTraderAccepted.set(false);
    if (userId === this.leftTraderUser.id) {
      this.leftTraderCurrencies.set(inCurrencies)
    }
    if (userId === this.rightTraderUser.id) {
      this.rightTraderCurrencies.set(inCurrencies)
    }
  }

  updateAcceptedState(userId, state) {
    if (userId === game.user.id) return;
    if (userId === this.leftTraderUser.id) {
      this.leftTraderAccepted.set(state);
    }
    if (userId === this.rightTraderUser.id) {
      this.rightTraderAccepted.set(state);
    }
  }

  addItem(newItem, { quantity = false, currency = false } = {}) {

    const items = !currency
      ? get(this.leftTraderItems)
      : get(this.leftTraderItemCurrencies);

    const item = Utilities.findSimilarItem(items, newItem)

    const maxQuantity = game.user.isGM ? Infinity : Utilities.getItemQuantity(newItem);

    if (item && Utilities.canItemStack(item)) {
      if (item.quantity >= maxQuantity) return;
      item.quantity = Math.min(quantity ? quantity : item.quantity + 1, maxQuantity);
      item.newQuantity = item.quantity;
      item.maxQuantity = maxQuantity;
    } else if (!item) {
      items.push({
        id: newItem.id,
        name: newItem.name,
        img: newItem?.img ?? "",
        type: newItem?.type,
        currency: currency,
        quantity: quantity ? quantity : 1,
        newQuantity: quantity ? quantity : 1,
        maxQuantity: maxQuantity,
        data: newItem instanceof Item ? newItem.toObject() : newItem
      })
    }

    if (!currency) {
      this.leftTraderItems.set(items);
    } else {
      this.leftTraderItemCurrencies.set(items);
    }

  }

  addAttribute(newCurrency) {

    const currencies = get(this.leftTraderCurrencies);

    const existingCurrency = currencies.find(currency => currency.path === newCurrency.path);

    if (existingCurrency) {
      existingCurrency.quantity = newCurrency.quantity;
      existingCurrency.newQuantity = newCurrency.quantity;
    } else {
      currencies.push(newCurrency);
    }

    currencies.sort((a, b) => a.index - b.index);

    this.leftTraderCurrencies.set(currencies);

  }

  removeEntry(entry) {

    if (entry.id) {

      if (!entry.currency) {

        const items = get(this.leftTraderItems)
          .filter(item => item.id !== entry.id);

        this.leftTraderItems.set(items);

      } else {

        const items = get(this.leftTraderItemCurrencies)
          .filter(item => item.id !== entry.id);

        this.leftTraderItemCurrencies.set(items);

      }

    } else {

      const items = get(this.leftTraderCurrencies)
        .filter(currency => currency.path !== entry.path);

      this.leftTraderCurrencies.set(items);

    }

  }

}
