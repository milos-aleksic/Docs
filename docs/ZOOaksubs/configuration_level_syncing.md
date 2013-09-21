# Level Syncing

This Doc will show you how to sync your *ZOO Items* with *Akeeba Subscription Levels*. It would be still posible to create and control the Levels trough Akeeba and is optional but we recommend it as you will be able to:

- Control within ZOO the Levels content and configuration.
- Display your Levels with ZOO render flexibility.
- Relate Items for package creation.

## 1. Type configuration

Please add the *Aksubs Level Sync* element to the Type you would like to sync with Levels. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types). Additionally you will need to create some fields that will provide the necesary Level information.

You should add the following necesary fields:

- **Price** - A text field that will store the Level price. The stored value should be formated as *000.00*. Recommended Element: *Text Pro*, will allow you to control the charachters limit.
- **Duration** - A text field that will store the Level duration (days). Only integrer value is allowed. Recommended Element: *Text Pro*, will allow you to control the charachters input.
- **Image** - An image field that will store the Level Image. Even if the Level will not be displayed with Akeeba it is a necesary sync value. If you would like the images be recognized by Akeeba Level be sure to store them in *images* folder. Recommended Element: *Image*.

Optionally add the following ones:

- **Description** - A textarea field that will store the Level description. Recommended Element: *Textarea*.
- **Fixed expiration** - A date field that will store the Level fixed expiration date. The stored value should be formated as *0000-00-00 00:00:00*. Recommended Element: *Date*.
- **Forever** - A boolean field that will store the Level forever statement value. The stored value should be boolean (0 or 1). Recommended Element: *Select* or *Radio*.
- **Sign-up fee** - A text field that will store the Level Sign-up fee. The stored value should be formated as *000.00*. Recommended Element: *Text Pro*, will allow you to control the charachters limit.
- **Order Text** - A textarea field that will store the text displayed when the User's subscription has been completed successfully. Recommended Element: *Textarea*.
- **Cancel Text** - A textarea field that will store the text displayed when the User's subscription has NOT been completed successfully. Recommended Element: *Textarea*.
- **Forbid renewals** - A boolean field that will store the Level Forbid renewals statement value. The stored value should be boolean (0 or 1). Recommended Element: *Select* or *Radio*.
- **Recurring** - A boolean field that will store the Level recurring statement value. The stored value should be boolean (0 or 1). Recommended Element: *Select* or *Radio*.
- **First expiration notification** - A text field that will store the Level First expiration notification (days). Only integrer value is allowed. Recommended Element: *Text Pro*, will allow you to control the charachters input.
- **Second expiration notification** - A text field that will store the Level Second expiration notification (days). Only integrer value is allowed. Recommended Element: *Text Pro*, will allow you to control the charachters input.

For more information on Level fields please review the [official Akeeba Subscription docs](http://www.akeebabackup.com/documentation/akeeba-subscriptions/subscription-levels.html).

## 2. ZOOaksubs Layout assignment

Please locate and open the ZOOaksubs Layout, we are going to assign the previously created Elements to it's Positions. The Plugins Layouts, as ZOOaksubs one, are independently shown in the last column. For more information please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions). 

![ZOOaksubs Layout](http://joolanders.github.io/Docs/docs/ZOOaksubs/images/zooaksubs_layout_assignment.png)

Each position represents a Level data and it's rendered value will be passed to Akeeba Subscription. It's important to carefully populate the positions taking in consideration what kind of value or format expects each one of them.

**Note**: you can use the *Static Content* element to set static values that will be common to all Levels.

## 3. Creating the Level trough ZOO

It's all set, go and create a new Item. Populate the fields and be sure the *Aksubs Level Sync* value is set to *Yes*. If all went well you will see an succesfull notification and a link to the synced Level. If otherwise the notification was negative, review the configuration and try again.

These are the common errors you could come along:

- Akeeba Subscription Level sync failed: layout not set or price is 0.
- Akeeba Subscription Level has NOT been synced: A subscription level must have a Length of at least 1 day.
- Akeeba Subscription Level has NOT been synced: A subscription level must have an Image.

All of them are complaining about missing or bad formated sync data. Be sure the appropiate field exist (step 1), is assigned in the ZOOaksubs Layout (step 2) and is populated in the Item.

## 4. Display Level and checkout button

Usually you would display the Level (the synced Item) assigning the Elements to the *Teaser* and *Full* layouts positions but you will miss a Checkout button. There's where the *Aksubs Level Sync* is used again. Assign it to any position and choose it's *Default* layout. It will render a checkout button that will redirect to Akeeba Subscription checkout process for the specific synced Level.

For more information on the Element, check it's [doc](ZOOaksubs/configuration_element_aksubslevelsync.md). 