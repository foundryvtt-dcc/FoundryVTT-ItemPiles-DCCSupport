<script>
  import { getContext } from 'svelte';
  import { localize } from '@typhonjs-fvtt/runtime/svelte/helper';
  import SliderInput from "../../components/SliderInput.svelte";
  import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";

  const { application } = getContext('external');

  export let elementRoot;
  export let itemTypePriceModifiers = [];

  let form;
  let unusedTypes;
  let systemTypes = Object.entries(CONFIG.Item.typeLabels);
  systemTypes.push(["custom", "Custom"])

  $: {
    unusedTypes = systemTypes.filter(([type]) => type === "custom" || !itemTypePriceModifiers.some(priceData => priceData.type === type)).map(([type]) => type);
  }

  function add() {
    if (!unusedTypes.length) return;
    itemTypePriceModifiers.push({
      type: unusedTypes[0],
      category: "",
      override: false,
      buyPriceModifier: 1,
      sellPriceModifier: 0.5
    });
    itemTypePriceModifiers = itemTypePriceModifiers;
  }

  function remove(index) {
    itemTypePriceModifiers.splice(index, 1);
    itemTypePriceModifiers = itemTypePriceModifiers;
  }

  async function updateSettings() {
    application.options.resolve?.(itemTypePriceModifiers);
    application.close();
  }

  export function requestSubmit() {
    form.requestSubmit();
  }

</script>

<svelte:options accessors={true}/>

<ApplicationShell bind:elementRoot>
  <form bind:this={form} on:submit|preventDefault={updateSettings} autocomplete=off>

    <p>{localize("ITEM-PILES.Applications.ItemTypePriceModifiersEditor.Explanation")}</p>

    <div>

      <table>
        <tr>
          <th style="width:5%;">{localize("ITEM-PILES.Applications.ItemTypePriceModifiersEditor.Override")}</th>
          <th style="width:20%;">{localize("ITEM-PILES.Applications.ItemTypePriceModifiersEditor.ItemType")}</th>
          <th style="width:35%;">{localize("ITEM-PILES.Applications.ItemPileConfig.Merchant.BuyPriceModifier")}</th>
          <th style="width:35%;">{localize("ITEM-PILES.Applications.ItemPileConfig.Merchant.SellPriceModifier")}</th>
          <th style="width:5%;">
          <span on:click={add} class:item-piles-clickable-link={unusedTypes.length}>
            <i class="fas fa-plus"></i>
          </span>
          </th>
        </tr>
        {#each itemTypePriceModifiers as priceData, index (index)}
          <tr>
            <td>
              <div class="form-group">
                <input type="checkbox" bind:checked={priceData.override}>
              </div>
            </td>
            <td>
              <div class="form-group">
                {#if priceData.type === "custom"}
                  <input type="text" bind:value={priceData.category} placeholder="Custom Category">
                {:else}
                  <select bind:value={priceData.type}>
                    {#each systemTypes as [itemType, label] (itemType)}
                      <option value="{itemType}"
                              disabled="{itemType !== priceData.type && !unusedTypes.includes(itemType)}">
                        {localize(label)}
                      </option>
                    {/each}
                  </select>
                {/if}
              </div>
            </td>
            <td>
              <div class="item-piles-flexrow" style="margin: 0 0.25rem">
                <SliderInput style="flex:4;" bind:value={priceData.buyPriceModifier}/>
              </div>
            </td>
            <td>
              <div class="item-piles-flexrow" style="margin: 0 0.25rem">
                <SliderInput style="flex:4;" bind:value={priceData.sellPriceModifier}/>
              </div>
            </td>
            <td class="small">
              <button type="button" on:click={remove(index)}><i class="fas fa-times"></i></button>
            </td>
          </tr>
        {/each}
      </table>

    </div>

    <footer>
      <button type="button" on:click|once={requestSubmit}>
        <i class="far fa-save"></i> {localize("Save")}
      </button>
      <button type="button" on:click|once={() => { application.close(); }}>
        <i class="far fa-times"></i> { localize("Cancel") }
      </button>
    </footer>

  </form>
</ApplicationShell>


<style lang="scss">

  .border-highlight {
    padding: 1rem;
    margin: 0.25rem;
    border-radius: 10px;
    border: 2px dashed gray;
  }

  table {
    vertical-align: middle;

    tr {
      border-spacing: 15px;
    }

    button {
      padding: 0.25rem 0.25rem;
      line-height: 1rem;
      flex: 0;
      text-align: center;
    }

    a {
      text-align: center;
    }
  }

</style>
