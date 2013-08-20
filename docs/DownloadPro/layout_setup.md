# Layout Setup

In order to add **DownloadPro** element to the layout of a ZOO type, you need switch to the appropriate template layout *(e.g. Full, Teaser, Feed, etc.)*. Use the following steps:
- Click on the "gear tab".
- Choose an appropriate application group *(e.g. Blog, Static Pages)*.
- Choose desirable template layout, related to chosen type name.
- Use *drag and drop* to place **DownloadPro** element into appropriate position.
![Drag element to position](/images/drag_to_position.png)
- Click on the "pencil icon" to edit added element.

## Setup Parameters
*Setup Parameters* allow to define how DownloadPro element will be displayed on the appropriate item layout.

### Layout Parameters

![Layout setup](/images/layout_setup_layout.png)

- **Main Layout** - Allows the user to specify main layout.
- **Sub Layout** - Allows the user to specify Additional sublayout.

#### Layout Sub Options

*Layout Sub Options* allow to configure element layout.

![Layout setup](/images/layout_setup_additional.png)

- ***Download Name*** - Allows the user to setup download link text. He also can use {filename} and {title} placeholders for dynamic names.
- ***New Window*** - Allows the user to open download dialog on the separate browser window.

### Filter Parameters

*Filter Parameters* allow to limit element instances and to set offset for output.

![Layout setup](/images/layout_setup_filter.png)

- **Offset** - Allows the user to move the start point of rendering *(e.g. 2, will make rendering start from instance 3)*.
- **Limit** - Allows the user to limit the number of instance to output.

### Separator Parameters

*Separator Parameters* allow to configure separation constructions, that will be used to separate download links on rendering.

![Layout setup](/images/layout_setup_separator.png)

- **By** - Allows the user to separate downloadable items by chosen separator *(Chose from the list)*.
- **Custom By** - Allows the user to specify custom separator for download links.
- **Class** - Allows the user to add custom class to download link.
- **Fix HTML** - Is used in combination with *Custom By* parameter. After the separator was applied, this feature will try to fix erroneous HTML code, specified in *Custom By* field.
