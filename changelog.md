# Item Piles Changelog

## Version 2.4.15

- Added setting to track custom item categories across items (will not track previously created categories)
- Updated German and French localization - thank you Marc and IrishWolf!
- Fixed issue with item based currency systems that would not properly subtract existing currency when removing from actors

## Version 2.4.14

- Fixed not being able to add new actors to merchants' price modifiers
- Minor code cleanup

## Version 2.4.13

- Fixed missing import which broke module

## Version 2.4.12

- Added support for the following systems:
  - Cypher System
  - Pokemon Tabletop United
- Updated French localization - thank you rectulo!
- Fixed sharing data would not be properly applied on item piles with sharing items/currencies enabled
- Fixed players being able to add currencies to item piles without having to possess the currencies

## Version 2.4.11

- Updated German and French localization - thank you blueacousticmusic & Elfenduil!
- Fixed users dropping items onto the item piles UI would not remove items from the user's inventory
- Fixed chat messages surrounding items would not use the item's image (in the case of mystified PF2e items)
- Fixed systems with item-based currencies would fail to open merchants properly
- Fixed Buy Items tab in the merchant UI would be hidden even if there were purchasable items
- Fixed error when dropping items on tokens from the sidebar

## Version 2.4.10

- Updated German localization (thanks blueacousticmusic on Weblate!)
- Added further Simple Calendar support; merchants can now be closed on specific weekday, and categories on notes can cause merchants to be closed (think holidays)
- Added support for vault item styling based on item properties
- Added `Hide Items With Zero Cost` setting to merchants, which automatically hides items in the buy/sell/service tabs if they are free
- Tweaked `Buy Items` tab to be hidden if the merchant has no visible items for sale, and the customer can sell items
- Fixed disabled elements being blue due to styling being incorrect
- Fixed item-based currencies would show up in the vault grids
- Fixed setting item-based currencies' quantity on item piles would instead always add them
- Fixed items added through merchant tables would lose their item pile flags (such as being a service, custom prices, etc)
- Fixed error when setting the price from the item editor

## Version 2.4.9

- Fixed minor issue with GMs not having permission to change module settings
- Fixed shares not being kept track of in item piles properly
- Fixed adding currencies to item piles not working properly for players
- Fixed to system integrations and how they apply their system specific settings

## Version 2.4.8

- Fixed normal users with permissions to change the world settings of Item Piles would not be able to
- Tweaked migrations to not refresh automatically, but prompts you to do so yourselves
- Tweaked Simple Calendar integration to not cause Item Piles to hard-fail when Simple Calendar is out of date
- Updated French localization (thanks Marc via Weblate!)

## Version 2.4.7

- Fixed vault expanders being added as regular items rather than expanding the available space

## Version 2.4.6

- Added a setting to be able to configure unstackable items
- Fixes for the upcoming OSE update to support its Item Piles integration
- Fixes dropping items on the canvas for various systems (OSE, Cyberpunk RED)
- Fixed not being able to add any vault permissions if it did not have any to begin with

## Version 2.4.5

- Additional fixes for actors with broken items in DnD5e breaking scenes (thanks dev7355608!)

## Version 2.4.4

- Fixed not being able to purchase items from merchants
- Fixed users not being prompted with a dialog to drop items (holding when dropping alt will skip dialog)
- Fixed error that would sometimes pop up when users drop items to create new piles

## Version 2.4.3

- Removed stray debugger because I am a hot mess

## Version 2.4.2

- Fixed issues with retrieving the source actor from drop data in certain systems (OSE, for example)
- Fixed merchants not saving tables that were assigned to them
- Fixed merchants not retrieving correct item prices in DnD5e

## Version 2.4.1

- Added support for the Star Wars 5th Edition system (thank you bollwyvl!)
- Updated French localization (thank you Padhiver and rectulo! You are legends!)
- Fixed critical error when trying to create new item piles in the DnD5e system due to the system's new data validation
- Fixed error when creating the first item pile
- Fixed dropping items into vault from compendiums or the item sidebar wouldn't place the items the dropped slot
- Fixed PF2e prices sometimes not loading correctly
- Tweaked migration code to not fall over as easily

## Version 2.4.0

- Added vault type item piles - these item piles act like the Diablo stash or the World of Warcraft banking system, where you have a set amount of grid slots that you can put items into
- Added vault extenders - you can configure items to extend the space available in vaults
- Added chat message for when users give each other items
- Added `game.itempiles.API.addSystemIntegration()` for systems to integrate into item piles more readily
- Added support for `true` and `false` values in system item filters
- Added `change` as a secondary argument to `game.itempiles.API.removeCurrencies()` and `game.itempiles.API.transferCurrencies()` so that the currency removal/transfer can handle converting currencies into change to cover the full transfer
- Added more hooks:
  - `item-piles-preClickItemPile`
  - `item-piles-preGiveItem`
  - `item-piles-giveItem`
- Added more item piles constants and useful info in `game.itempiles`
- Updated DnD5e system support to support the new 2.1.0 update
- Tweaked `game.itempiles.api.turnTokensIntoItemPiles` to use the default item pile's settings when converting tokens into item piles
- Tweaked item piles containers to be the only tokens that get the additional buttons in its token HUD
- Tweaked the item similarities setting - a lack of them will now treat every item as distinct items rather than the same
- Fixed GMs still being able to drop items on the canvas when the setting was not enabled
- Fixed trades between users not creating a final chat message when concluded listing what was traded
- Fixed being able to loot/buy installed Cyberware in Cyberpunk Red
- Fixed sometimes being able to give items to yourself

## Version 2.3.11

- Added support for the Symbaroum system
- Fixed Merchants' items having a quantity counter visible on items that cannot stack
- Fixed minor localization issue in the item editor
- Fixed merchant tokens being deleted if they were set to be deleted when becoming empty. Disappearing merchants is mechanically cool and all, but probably not ideal.

## Version 2.3.10

- Actually fixed `game.itempiles.API.rollItemTable` not adding items to the target actor
- Fixed `Display Item Types` not working properly on item piles

## Version 2.3.9

- Fixed `Buy Items` tab in merchants not being visible if the merchants had no services, oops

## Version 2.3.8

- Added support for the Worlds Without Numbers system
- Added the ability to set custom categories on items
- Added "Custom" type to per-item-type price modifiers to affect the aforementioned custom categories
- Tweaked the `Buy Items` tab on merchants to become hidden if the merchant has services to sell, but no items to sell
- Fixed error when calling `game.itempiles.API.rollItemTable` with a target actor receive the rolled items
- Improvements to currency string detection and handling
- Updates to the French localization (thanks rectulo!)

## Version 2.3.7

- Added "Keep Zero Quantity" setting to merchants and items - any item that is bought up with this setting enabled will be kept in the merchant, but set to not for sale.
- Fixed infinite distance merchant tokens could not be interacted with if player had no tokens on the canvas

## Version 2.3.6

- Added various currency-related methods to the API:
  - `game.itempiles.API.getCurrenciesFromString`
  - `game.itempiles.API.addCurrencies`
  - `game.itempiles.API.removeCurrencies`
  - `game.itempiles.API.transferCurrencies`
  - `game.itempiles.API.transferAllCurrencies`
- Added hooks for the above methods
- Improved support for systems with a primary currency that has the lowest exchange rate
- Removed popup that asks you to update the item pile system settings and instead silently updates your settings
- Fixed item editor not supporting string-type item costs
- Fixed `game.itempiles.API.transferEverything` not transferring currencies correctly
- Fixed DnD5e's system item filters not having `subclass` as an ignored item type
- Fixed closing an item pile container via the UI would not pass along the actor who closed it to macros and hooks
- Fixed documentation on hooks, as it was slightly out of date

## Version 2.3.5

- Fixed `game.itempiles.API.setCurrencies` requiring the wrong parameters

## Version 2.3.4

- Fixed creating a new item pile would make every token think it's an item pile - oops

## Version 2.3.3

- Reworked the `Populate Items` tab in merchants - you can now add all items on rollable tables to populate a merchant's inventory, rolling for the quantity of each item
- Added "Show To Which Players" dialog when "Show to players" is clicked on item piles and merchants
- Added `Hide header button` client setting
- Fixed `Split currency x ways` not working when "Sharing Enabled: Currencies" was disabled
- Fixed `Hide header button text` client setting not working on item piles and merchants
- Fixed switching item pile functionality (enabled/disabled, item pile/merchant) would break any active UI with them, now closes the active window and opens the appropriate one

## Version 2.3.2

- Further improvements to detection of items without quantity
- Fixed issues with pre-defined item-based currency in systems

## Version 2.3.1

- Added support for systems that store prices in strings like "1L 50T" (Splittermond, as an example)
- Adjusted token detection when double-clicking on an item pile actor to prioritize their user character
- Improved detection of items without quantity
- Updated Splittermond system settings

## Version 2.3.0

- Added core support for systems that have items without quantities
- Added support for the following systems:
  - Cepheus & Traveller
  - Twilight: 2000 (4th Edition)
  - KNAVE
  - Coriolis
  - Kamigakari
  - Cyberpunk RED
- Fixed Fallout 2d20 system not having the correct setup
- Fixed splitting item pile contents in the PF2e system
- Fixed handling of item-based currencies not tracking individual player shares properly
- Fixed not being able to add currencies to item piles in the PF2e system (users and GMs)
- Fixed spectating users would cause the trade to be cancelled when closing the trade window
- Fixed spectating users would not see newly added items in trades
- Fixed users not being able to spectate trades after they reconnect
- Fixed `turnTokensToItemPiles` would make every token be updated to use the image of the last token passed to the function
- Updated German localization (Thanks IrishWolf!)

## Version 2.2.13

- Fixed dropping items onto the scene would create empty item pile
- Fixed splitting item pile contents among players not working

## Version 2.2.12

- Fixed search not working in merchants
- Fixed searching for services would make the buy services tab disappear
- Fixed populate items in merchants not working properly

## Version 2.2.11

- **BREAKING:** Changed the functionality of `game.itempiles.API.createItemPile()`
  - Please check the API for more information: <https://fantasycomputer.works/FoundryVTT-ItemPiles/#/api?id=createitempile>
- Added Currency Decimal Digits setting to better support control over how many decimals are displayed for item prices on systems with only one currency (Thanks loofou!)
- Made `Start Trade` button in player list dark (thanks LukasPrism!)
- The function `game.itempiles.API.rollItemTable()` now supports tables that exist in compendiums
- Fixed issue where adding items to item piles would not properly update the token image or name
- Fixed DND5e's item transformer making assumptions about the data it was given, which could cause errors

## Version 2.2.10

- Added better support for systems with only one currency, fractional costs should no longer result in free items
- Added the following optional settings to `rollItemTable`:
  - `resetTable` (default `true`) - whether to reset the table between calls to this function
  - `displayChat` (default `false`) - whether to display the rolls to the chat
- Added `renderItemPileInterface` to the API documentation
- Fixed merchants sometimes not working on systems that use currencies that are actual items
- Fixed `turnTokensIntoItemPiles` not respecting `img`, `scale`, and `name` overrides in the optional `tokenSettings`
- Fixed minor issues with documentation
- Removed stray `console.log`

## Version 2.2.9

- Fixed minor typo in `rollItemTable`

## Version 2.2.8

- Fixed regular item piles would error for players when they try to open them
- Fixed some item prices would round incorrectly due to floating point errors (0.3g would become 2s 9cp instead of 3s)
- Fixed trading being impossible due to a bug, pressing accept in the trading UI would cause the other party to un-accept the trade

## Version 2.2.7

- Added "Split items by item types" setting to item piles, which will display items separated by type in normal item piles
- Added `rollItemTable` to the API, which can be used to get items from a roll table
  - Check out the wiki for example macros: <http://fantasycomputer.works/FoundryVTT-ItemPiles/#/sample-macros>
- Tweaked trading UI so that users doesn't have to press enter after changing the quantity of an entry, clicking away will now change it
- Fixed issue with the clear all items button in the merchant UI not working
- Finally updated all the API documentation:
  - Check out the wiki for all the information you need: <http://fantasycomputer.works/FoundryVTT-ItemPiles/#/API>

## Version 2.2.6

- Fixed dropping items in the merchant interface would fail to add the item to the merchant's inventory
- Fixed per-actor price modifiers not loading actors properly when reopened
- Fixed per-actor price modifiers not having an override checkbox
- Fixed description area of merchants not having a scrollbar
- Created a new wiki for all of your item piles needs:
  - <http://fantasycomputer.works/FoundryVTT-ItemPiles/>

## Version 2.2.5

- Updated French and Portuguese (Brazilian) localization (thanks to rectulo, davidR1974, and eunaumtenhoid!)
- Fixed error when using the search bar in item piles
- Fixed individual items marked as having infinite quantity not having infinite quantity when sold by merchants
- Fixed merchants with overnight open times would not stay open properly past midnight

## Version 2.2.4

- Added Spanish and partial Polish localization (thanks bext1a and MrVauxs!)
- Added "Service" type items
  - Items sold by merchants can now be configured not add any items to the buyer's inventory
  - The cost of buying the item is still applied to the buyer
  - If the merchant runs out of this service "item", its quantity is set to 0 but not removed from the merchant, just set to "not for sale"
  - Combined with the item purchase macro feature, you could create a "Cure Wounds" service item & macro that heals people when bought (see below)
- Added macro execution option to items when purchased
- Added DnD5e compendium of merchant roll tables
- Improved macro selector input by suggesting potential macros and compendiums of macros
- Fixed merchants with infinite quantity of items would still lose quantity of items when selling items
- Fixed missing macro input on the item pile config interface
- Fixed searching in item piles and then clearing input would not refresh items
- Fixed two users being able to pick the same actor to trade with - let's not enter the twilight zone just yet
- Fixed rare issue with GMs not being able to keep track of active users (???)

## Version 2.2.3

- Added full merchant support in the Pathfinder 2e system

## Version 2.2.2

- Updated Portuguese (Brazilian) localization (thank you, eunaumtenhoid!)
- Fixed users disconnecting causing trades between other users to be cancelled
- Fixed dragging and dropping an actor into the trade actor selector not working
- Fixed merchant description not being enriched, and now displays Foundry document links properly
- Fixed merchant items not being alphabetically sorted by default
- Fixed dropping spells in certain interfaces would not turn them into spell scrolls (DnD5e)
- Fixed mystified items not staying mystified in the trading interface (PF2e)
- Fixed currencies not showing up in loot chat cards

## Version 2.2.1

- Added the ability to drag and drop items between item pile interfaces
- Fixed not being able to have multiple item pile interfaces open at the same time
- Fixed per-actor price modifiers not working
- Fixed systems with only one currency not working properly

## Version 2.2.0 (V10 only)

- Foundry v10 support - no more v9 updates unless critical bugs are discovered
- Updated French and Portuguese (Brazilian) localization (thank you to Padhiver & eunaumtenhoid, respectively!)
- Localization can be easily done through weblate:
  <https://weblate.foundryvtt-hub.com/>

## Version 2.1.2 (V9 only)

- Fixed handling systems with currencies that lack decimals

## Version 2.1.1 (V9 only)

- Fixed users being able to give away items to other users that are of types that are not allowed to be given (such as spells, features, etc)
- Fixed containers being considered locked when it is in fact unlocked

## Version 2.1.0

- Implemented Simple Calendar integration for open/close times
- Added Open/Close button in the top right of the merchants window for ease of access
- Added "Give Item" functionality - any token can now drop items onto adjacent tokens to give them that item. This can be turned off in the settings.
- Added `Show To Players` header button to Item Piles & Merchants
- Improved the "Populate Items" tab on merchants (Thanks to Averrin#0374!)
  - Added hover tooltips to buttons
  - Added ability to preview rolled items
  - Added the ability to roll multiple tables
  - Rolled items now show their prices
  - Fixed tables not resetting between rolls
- Added "Reset To System Defaults" button to the module settings
- Fixed copy-pasting tokens not replicating their Item Piles settings
- Fixed `Split x ways` not splitting items properly
- Updated some French and German localization

## Version 2.0.6

- Improved dialogs to actually show that Item Piles is their origin
- Improved API when configuring settings

## Version 2.0.5 Hotfix

- Fixed supported systems constantly resetting to default settings

## Version 2.0.4

- Fixed token HUD not showing up on item pile tokens
- Fixed players being unable to inspect items when setting was enabled

## Version 2.0.3

- Added warning about Foundry v10 compatibility
- Fixed actor context menu option "Item Piles: Show pile to players" not actually showing the UI to players
- Fixed the add currencies UI failing to open
- Fixed per-character share of items and currencies not working as intended
- Tweaked the dialogs that show up when a supported system is detected
- Updated systems to include the item cost attribute and currencies
- Added support for the following systems:
  - Star Wars: Saga Edition
  - Index Card RPG
  - Forbidden Lands
  - Fallout

## Version 2.0.2

- Fixed user-to-user trading application not working properly
- Fixed edit description button in Merchant UI not working

## Version 2.0.1

- Fixed broken default settings for PF1e system
- Fixed issue with previewing items on item piles
- Fixed issue when dropping items with only one quantity ending up at the very top left of the scene
- Fixed unsupported systems throwing errors when trying to configure them

## Version 2.0.0

- Added fully-featured merchant functionality
  - Per item type and per actor price modifiers (give that chatty bard a discount)
  - Infinite currencies & infinite item quantities
  - Custom item price support - you can configure items to cost other items to buy. Crafting merchants anyone?
  - Roll table support to generate the listing on merchants
- Reworked the way currencies work to support item-based currencies
- Rewrote the entire module from scratch for long term viability
- Added support for the TwoDSix system (Traveler)
- Tweaked existing systems to work with the new currency system
- Tweaked D&D 5e system implementation
  - Dropping spells onto item piles will now convert them into scrolls
  - Taking and dropping items from piles will now clear attunement and proficiency

## Version 1.4.8

- Updated German localization (Thank you, gsterling on GitHub)
- Added Starfinder system support (Thank you, dizko on GitHub)
- Updated Tormenta20 system configuration (Thank you, mclemente on GitHub)
- Fixed hidden item piles being able to be opened

## Version 1.4.7

- Fixed issue in latest PF2 update which changed the attribute path for quantities

## Version 1.4.6

- Adjusted API to use native foundry `Item#fromDropData` instead of my own implementation (Thank you, TheGiddyLimit on GitHub!)
- Fixed issue relating to some systems not generating a new ID for items, which caused false-positives when trying to find similar items on actors that were the source of said items
- Fixed issue where systems would override core functions on items that modify names and other data, Item Piles will now always call the system's Item specific functions
  - Fixes issue with PF1 items sometimes showing up as identified when they were unidentified
- Added support for the Warhammer Fantasy Roleplay 4th Ed system
- Added support for the Splittermond system

## Version 1.4.5

- Fixed Item Piles inventory UI in GM mode making item quantity inputs look disabled when an item had 0 quantity

## Version 1.4.4

- Added a right click context menu to the item pile inventory UI, with an option to show an item's image to everyone
- Improved Request Trade button in the player list when the Minimal UI module is active
- Improved splitting API functions to improve performance when playing on Forge
- Improved documentation to better describe what each API method requires
- Tweaked `Split n ways` button to disable itself instead of becoming hidden
- Tweaked system recognition to allow systems to set the required settings through the API, which suppresses the system incompatibility warning
- Fixed various bugs surrounding splitting item piles
- Fixed issue with the `Split n ways` button not working sometimes

## Version 1.4.3

- Fixed minor issue with creating item piles

## Version 1.4.2

- Updated Japanese Localization (thanks to Brother Sharp#6921!)
- Updated French Localization (thanks to Padhiver#1916!)
- Fixed GMs having a character assigned to their user account would cause strangeness in some interfaces
- Fixed `game.itempiles.API.addItems` failing to merge similar items

## Version 1.4.1

- Fixed opening more than one item pile inventory would result in an error
- Fixed not being able to add currencies to item piles
- Fixed bug causing `Add Currency (GM mode)` to throw an error when using tokens as the trader
- Minor fixes and adjustments to the Item Pile Inventory UI
- Renamed `openItemPileInventory` to `renderItemPileInterface` which will become deprecated in 1.5.0
- Removed stray `Debugger`, whoops

## Version 1.4.0 - Trading Edition!

- Added user-to-user trading!
  - Multiple ways to initiate a trade:
    - Type `!itempiles trade` or `!ip trade` in the chat
    - Right-click on your fellow user's actors in the actor list
    - Click the `Request Trade` button below the users list
  - GMs can be represented in a trade by any actor or unlinked token in the game
  - Players can only be represented in trades with actors they own
  - Public and private trades, with the option to spectate public trades
  - Option to mute another player who spam trades
  - This is an optional setting that can be turned off
- Added setting for detecting item similarities and differences
- Added split button for GMs editing item piles
- Fixed token name changing when turning tokens into item piles
- Fixed PF1e item quantity attribute being wrong
- Temporarily removed other localizations as this update contains a huge amount of updates

## Version 1.3.4

- Fixed an issue in v8 and in some systems that caused item piles to fail to get the correct item quantities
  - This does not fix items that had already been put into item piles, you can fix this by editing the quantities of the items in actor's inventory
- Fixed tokens not retaining their image when they were turned into item piles

## Version 1.3.3

- Added missing `Split Only With Active Players` setting on item piles

## Version 1.3.2 Hotfix

- Fixed module throwing error about MidiQOL when dropping an item if the module is not installed

## Version 1.3.1

- Fixed `game.itempiles.API.turnTokensIntoItemPiles` failing to turn tokens into item piles
- Fixed module throwing errors in v8 regarding the actor sidebar
- Fixed some Item Pile interfaces lacking styling elements in v8

## Version 1.3.0

- Added item pile currency and/or item splitting capabilities
- Added chat message when currency and/or items are split between players
- Added API methods:
  - `game.itempiles.API.splitItemPileContents` - Splits an item pile's content according to its settings
- Added hooks:
  - `item-piles-preSplitItemPileContent` - Called before the content of an item pile is going to be split
  - `item-piles-splitItemPileContent` - Called after the content of an item pile has been split
- Updated various UIs to be more user-friendly
- Renamed "Dynamic Attributes" to "Currencies"
- Inverted the Ctrl + Double Click to open an item pile's inventory UI
- Fixed various inconsistencies in the API and its return data

## Version 1.2.8

- Added `Open Actor Sheet` and `Configure Pile` buttons to the Item Pile inventory UI (visible only to GMs)
- Fixed bug where Item Piles would ignore case-sensitive item filters and attribute paths
- Updated German localization

## Version 1.2.7

- Fixed newly created item piles would not update their image, scale, or name

## Version 1.2.6

- Added `Item Filters` setting - now you can more accurately filter items you do not want to show up in item piles, such as natural weapons
- Updated all supported systems to support the above and added migrations to convert existing settings to the new system
  - Reset your Item Piles module settings to ensure you have the latest system configurations
- Removed `Item Type Attribute` and `Item Type Filters` as the above feature covers these cases
- Added debounce to the token image refresh so that it doesn't try to change its image too often
- Further fixes to `game.itempiles.API.addItems`
- Fixed unlinked item piles not retaining their setup when created from the actors directory

## Version 1.2.5

- Added missing handlebars method for Foundry v0.8.9

## Version 1.2.4 Hotfix

- Fixed error in `game.itempiles.API.addItems` throwing errors
- Fixed D&D 3.5e system not correctly implemented

## Version 1.2.3

- Added API method:
  - `game.itempiles.API.openItemPileInventory` - forces a given set of users to open an item pile's inventory UI
- Fixed API methods not accepting `Token` objects, will now properly cast to their `TokenDocument`
- Fixed hooks and macros not being called on item pile interaction
- Fixed various API methods being broken, oops

## Version 1.2.2 Hotfix

- Fixed hotkeys being broken on Foundry v9
- Fixed alt-quickdrop hotkey not creating a pile in the right location

## Version 1.2.1

- Fixed hotkey errors on Foundry v0.8.9

## Version 1.2.0

- Now supports Foundry v0.8.9
- Added setting to output items picked up to chat
- Added setting to hide the "Item Piles" text in the actor header - useful if you have too many modules, and the header
  is getting crowded
- Added support for the Tormenta 20 system: <https://foundryvtt.com/packages/tormenta20>
- Tweaked `game.itempiles.API.turnTokensIntoItemPiles` to turn tokens into item piles without having the "Display Single Item
  Image" setting turned on
- API changes:
  - Changed: `game.itempiles.API.addItems`
    - This method now expects an array of objects, with item data or Item (Foundry Item class) (key `item`), and an
      optional quantity attribute that determines how many of the item to add (key `quantity`)
    - It now returns an array of objects, with the item's data (key `item`) and the quantity added (key `quantity`)
  - Changed: `game.itempiles.API.removeItems`
    - This method now expects an array of objects each containing the item id (key `_id`) and the quantity to
      remove (key `quantity`), or Items (the Foundry Item class) or strings of IDs to remove all quantities of
    - It now returns an array of objects, each containing the item that was removed or updated (key `item`), the
      quantity that was removed (key `quantity`), and whether the item was deleted (key `deleted`)
  - Changed: `game.itempiles.API.transferItems`
    - This method now expects an array of objects each containing the item id (key `_id`) and the quantity to
      transfer (key `quantity`), or Items (the Foundry Item class) or strings of IDs to transfer all quantities of
    - It now returns an array of objects, each containing the item that was added or updated (key `item`), the
      quantity that was transferred (key `quantity`)
- Fixed `game.itempiles.API.transferEverything` not transferring everything from non-item pile actors
- Fixed item and attribute transfer hooks incorrectly returning the target's final quantities, rather than the
  transferred quantities
- Fixed users creating item piles would cause the pile to be spawned on the scene that the GM was viewing at that given
  moment
- Fixed Item Pile config window would not populate some inputs correctly

## Version 1.1.3

- Adjusted display one-type item piles to also take into account dynamic attributes (gold piles!)
- Fixed prototype tokens not being updated when editing an item pile through its sheet
- Fixed item piles with both "Is Container" and "Override single item token scale" enabled acting strange - item piles
  will now prioritize the container images over "Display Single Item Image" when "Is Container" is enabled
- Added warning to point out the above
- Adjusted Item Pile UI to be editable even when not enabled

## Version 1.1.2

- Fixed dropping items onto piles not working when it had an interaction distance of infinite
- Fixed macro input field in item pile config was incorrectly set to "number" rather than "text"

## Version 1.1.1

- Added support for the Savage Worlds Adventure Edition: <https://foundryvtt.com/packages/swade>
- Fixed linked token actors not acting like they are linked - now all tokens on the canvas with the same linked actor
  share the same state and image
- Fixed dynamic attributes not being treated as numbers, which caused problems in some systems (such as SWADE) if they
  were stored as strings

## Version 1.1.0

- Added support for the D&D 3.5 system: <https://foundryvtt.com/packages/D35E>
- Added the ability to click on item names to inspect the items - this can be disabled in the item pile's settings
- Hooks that previously only returned the UUID of a given document now actually provides the document itself
- Hooks added:
  - `item-piles-preRattleItemPile` - Called locally before a locked item pile is attempted to be opened
  - `item-piles-rattleItemPile` - Called for everyone after a locked item pile was attempted to be opened
  - `item-piles-preOpenItemPileInventory` - Called locally before an item pile's inventory is opened
  - `item-piles-openItemPileInventory` - Called locally after an item pile's inventory has been opened
- API changes:
  - Changed `game.itempiles.API.turnTokenIntoItemPile` to `game.itempiles.API.turnTokensIntoItemPiles`, now can take array of
    tokens to turn into piles
  - Changed `game.itempiles.API.revertTokenFromItemPile` to `game.itempiles.API.revertTokensFromItemPiles`, now can take array
    of tokens to revert
- Improved token detection when multiple owned tokens are interacting with item piles, it should now more reliably pick
  sane tokens.
  - Now picks in order: controlled token -> last selected token -> the closest owned token.
- Improved module speed when interacting with item piles
- Improved item pile token image and scale updates, should be a bit more stable
- Added warning when no GM is connected when interacting with piles

## Version 1.0.9

- Fixed module settings would stay blank even on a recognized game system

## Version 1.0.8

- Fixed item pile token image not being updated when first creating a new item pile
- Fixed item piles acting as non-empty when attributes were incorrectly configured
- Fixed the `Take All Items` button not taking items from item piles

## Version 1.0.7

- Fixed module being broken

## Version 1.0.6

- Added API endpoints:
  - `game.itempiles.API.getActorItemFilters(TokenDocument|Actor)` - Returns the item type filters for a given item pile
  - `game.itempiles.API.getActorItems(TokenDocument|Actor, Array|Boolean)` - Returns the items the item pile contains and
    can transfer
- Updated japanese localization
- Fixed item piles not respecting item type filters
- Fixed issue with `game.itempiles.API.turnTokenIntoItemPile` not actually turning the token into an item pile
- Fixed issues with item pile tokens sometimes switching to their actors image when they were empty

## Version 1.0.5

- Added french localization
- Added german localization
- Added warning if no system match was found
- Added dialog for users who installed Item Piles before their system became supported
- Fixed issue with Item Piles throwing an error with tokens whose actors had been deleted

## Version 1.0.4

- Fixed non-GMs being able to turn their characters into loot piles
- Fixed disabling loot piles would also disable the save button
- Added warning when turning a linked actor into an item pile

## Version 1.0.3

- Fixed dropping items from compendiums

## Version 1.0.2

- Fixed issue where if an item pile was updated, it would break the ability for players to open the pile
- Fixed localization issue when an item pile was too far away from a player

## Version 1.0.1

- Added Pathfinder 1 system support
- Added Japanese localization
- Added localization support to dynamic attribute names
- Tweaked DND5e attributes to be localized (you'll need to reset Item Piles' settings)
- Fixed issue where updating the Item Pile configuration on an actor would throw an error
- Fixed formatting issue on one of the dialogs
- Fixed issue where some players could not open Item Piles after creating them

## Version 1.0.0

- First public version
