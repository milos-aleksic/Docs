# Layout setup

In order to add **DownloadPro** element to the layout of a ZOO type, you need switch to the appropriate template layout ( *e.g. Full, Teaser, Feed, e.t.c* ). Use the following steps:
- Click on the "gear tab";
- Choose an appropriate application group (e.g. Blog, Static Pages);
- Choose desirable template layout, related to chosen type name.
- Use *drag and drop* to place **DownloadPro** element into appropriate position.
![Drag element to position](/images/drag_to_position.png)
- Click on the "pencil icon" to edit added element

## Setup parameters
The following parameters allow to define how DownloadPro element will be displayed on the appropriate item layout.

### Layout parameters

![Layout setup](/images/layout_setup_layout.png)

- **Main Layout** - Use to specify main layout.

- **Sub Layout** - Use to specify Additional sublayout.

#### Layout sub options

*Layout* sub options allow to configure element layout.

![Layout setup](/images/layout_setup_additional.png)

- ***Download Name*** - Use this option to setup download link text. You also can use {filename} and {title} placeholders for dynamic names.

- ***New Window*** - Check this option to open download dialog on the separate browser window.

### Filter parameters

*Filter* parameters allow to limit element instances and to set offset for output.

![Layout setup](/images/layout_setup_filter.png)

- **Offset** - Use for moving the start point of rendering. E.g.: 2, will make rendering start from instance 3.

- **Limit** - Use to limit the number of instance to output.

### Separator parameters

*Separator* parameters allow to configure separation constructions, that will be used to separate download links on rendering.

![Layout setup](/images/layout_setup_separator.png)

- **By** - Use to separate downloadable items by chosen separator *(Chose from the list)*.

- **Custom By** - Use to specify custom separator for download links.

- **Class** - Use to add custom class to download link.

- **Fix HTML** - Use in combination with *Custom By* parameter. After the separator was applied, this feature will try to fix erroneous HTML code, specified in *Custom By* field.
