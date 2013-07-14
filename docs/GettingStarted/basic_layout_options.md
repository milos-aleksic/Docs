# Some basic layout options #

There are a few layout options that are available to almost all ZOOlander elements.

## Basic ##
![basiclayout](http://joolanders.github.io/Docs/GettingStarted/images/layout_basic.png)

- **Show Label** - NO (default) will show no label before this item in the output. YES will display the label (or the 'Alternative Label') before the element.
- **Alternative Label** - If you select YES above and enter text in this field it will be displayed as the Label for the element in the output. If you select YES above and leave this blank the name of the element will be used as the label.

![ToggleBasicParams](http://joolanders.github.io/Docs/GettingStarted/images/layout_basic_toggle.png)

*If you don't see these options click the **edit basic params** text to display them.*

## Filter ##
![LayoutFilter](http://joolanders.github.io/Docs/GettingStarted/images/layout_filter.png)

- **Offset** - if you have multiple instances of this element, setting this number to any number (greater than 1) will start rendering the elements at the element after that number. E.g. 2 will make rendering start from instance 3.
- **Limit** - if you have multiple instances of this element, setting this number to any number will limit the rendering of elements to that number of elements. E.g. "0" will render no data and 2 will render two element instances (even if there are more)

*If you do not see these options in the filter area, click on **edit filter params** to have them displayed.*

## Separator ##
![LayoutSeparator](http://joolanders.github.io/Docs/GettingStarted/images/layout_separator.png)

- **By** - this field allows you to set how individual elements are separated; the options indicated by "*" below are only applied if you have multiple instances of the element in the output

 - **None** - this will provide no separator between instances of this element
 - **Space*** - (default) just inserts a space between multiple instances of the element
 - **Span** - wraps each instance of the element (player) in a `<span>` tag
 - **Paragraph** - inserts a blank paragraph element before each instance of the player
 - **Div** - wraps each instance of the element in a `<div>` tag
 - **List Item** - wraps each instance of the element in a `<li>` tag; however, it does NOT include any OL or UL wrapper
 - **Comma*** - inserts a comma between multiple instances of the element
 - **Hyphen*** - inserts a hyphen `-` between multiple instances of the element
 - **Pipe*** - inserts a pipe `|` symbol between multiple instances of the element
 - **Break*** - inserts a 'Break' `<br>` tag between multiple instances of the element
 - **Unordered List** - will wrap all the instances of the element in a `<ul>` tag and then apply a `<li>` tag to each individual instance of the element
 - **Ordered List** - will do the same as above but will wrap everything in a `<ol>` tag
 - **Custom** - by selecting this option you can create your own method of separating the elements when rendered. ( click here to learn more about how to use this option )
- Class - if you enter a class name in this field it will be applied to the output of this element. The specific application depends on the type of Separator you choose above:

 - **Space** - not applied
 - **Span** - not applied
 - **Paragraph** - applied to a black paragraph before each instance of the element
 - **Div** - applied to the div for each instance of the element
 - **List Item** - applied to each list item entry for each instance of the element
 - **Comma** - not applied
 - **Hyphen** - not applied
 - **Pipe** - not applied
 - **Break** - not applied
 - **Unordered List** - applied to the `ul` tag
 - **Ordered List** - applied to the `ol` tag
- **Fix HTML** - if you check this box the system will attempt to fix any mal-formed HTML that could be generated as a result of the Separator being applied. This includes these functions:

 - Delete close tags that don't have an open tag
 - Fix an open tag without a close tag by closing them
 - Check bad nesting and fix them
 - Fix bad quotes in attributes
 - Merge different style attributes in the same tag
 - Remove any HTML comments
 - Remove empty tags and more bad tags

## Order ##
![LayoutOrder](http://joolanders.github.io/Docs/GettingStarted/images/layout_order.png)

This area allows you to specifically set the order in which results for this element are displayed.

- **Core** - this allows you to select the core order options for the related item:
 - **Name** - (default) will order the element instances based upon their Name element
 - ****Access** - (date last accessed)
 - Creation Date**
 - **Hits**
 - **Modification Date**
 - **Publish Down Date**
 - **Publish Up Date**

NOTE: Additional order selectors will appear here based upon the various types that you have created - one for each type - allowing you to set the order based upon the type

**Reverse** - will reverse the order specified above