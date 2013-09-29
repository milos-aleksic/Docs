# Configuration

All of your elements in ZOO should have now a new section in the configuration called *ZOOlingual*. It allows you to set on which language will be display that specific element but if none is selected, will be displayed in all.

The language evaluation can be set on each element Configuration or Assignment. Our recommendation is to set your base or most common restrictions at the Type level, in the element Configuration, and override them in the Layout Positions assignments as needed.

If you do so, in the Layout Positions assignment the ZOOlingual configuration will show a *Overide Options* chechbox. By enabling it you can then override the settings that have been placed on this element.

## Step 1. Set up the Type

Locate the Type you would like to integrate ZOOlingual with and Edit it's elements. For more information please review the [ZOO official docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

For each Element that you would like to translate create a new instance of it and assign a language using the *ZOOlingual* section. You should also set any element language specific configuration.

![Language Selection](http://joolanders.github.io/Docs/docs/ZOOlingual/images/elements_config.png)

### Quick note
For number based elements, such as Price, this step should be skipped as the language could be assigned in the Layout Positions as explained in Step 2. Being able to set only in the positions the language specific configurations, such as label or currency format, the value would be inputed once for all languages but displayed with particual diferences for each of them.

## Step 2. Position assignment

Locate and open the ZOO template layout where you would like to show your translated element content. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types).

Drag & Drop once the elements you have associated a language in the Step 1. You would be assigning in the same position all elements of the same translated content but *ZOOlingual* will make sure is rendered only the element associated to the current frontend language.

For elements without language association but which should be adjusted for each language, as mentioned in the last Quick Note, Drag & Drop one instance for each language setting the specific language and configuration.

## Step 3. Content translation

Now that the elements are set we can start translating the content. Please proceede by creating or editing an existing Item. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/create-and-manage-items).

Populate and translate the elements set in Step 1 as you would usually do. 

**Note**: The Item name, slug and meta data can be translated in the right *Content* Tab.

![Content Tab](http://joolanders.github.io/Docs/docs/ZOOlingual/images/content_tab.png)

Proceede the same way for the Category and Frontpage content translation.

## Step 4. Language switcher

ZOOlingual does not use it's own language switcher. Instead you can use the Joomla! inbuild one or from any 3rd party Extension. For more info on setting a multi-lingual site with Joomla! check [this doc](http://help.joomla.org/files/EN-GB_multilang_tutorial.pdf).

## Done!

Your content is translated and ready to be displayed!