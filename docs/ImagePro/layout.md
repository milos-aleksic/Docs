# Layout Configuration

ImagePro has tons of options to configure how to display your image(s) to your users. Here you can find the explanation for each parameter.
If you want, you can also check our examples to see how to create widgetkit galleries, slideshows, and much more.

To configure the layout options for ImagePro, go to the **ZOO configuration (Gear icon)**, select your application and click on the **layout** you want to customize (for example, *full*). 
Then just drag your ImagePro element from the right side into your preferred position, and click the pencil icon to start changing the parameters.

## Common Parameters

The ImagePro element uses many of the common ZL element layout parameters (Basic, Filter, Separator, Order, etc.). Please review how to configure each of those layout options [here](http://joolanders.github.io/Docs/GettingStarted/basic_layout_options.md).

## Layout Parameters

- **Main Layout** and **Sub Layout**
This is the layout that will be used to shown your images. Basically it's a (partial) html file that will take your selected images and shown them into your page. There are 3 options shipped with image pro, each one with several variations. You can also add your own layouts.

### Default
This layout is the default one, and also the most "standard". It simply outputs an image tag, with a bunch of extra options if needed.
  It supports several sublayouts:

 - **default** - A standard image tag, with the options you set for each image, such as title, spotlight and lightbox.
 - **no cache** - Same as the default, without the caching.
 - **raw path** - Outputs just the raw link to the image, without the `<img>` tag

![MainLayoutDefault](http://joolanders.github.io/Docs/ImagePro/images/layout_default.png)
> 
> **All the layouts also share the resizing and linking options**. They allow you to specify the dimensions of the displayed image(s) along with cropping policy and item linking

Here are how these options effect the image:

- **Resize Width(px)** - Entering an integer here will automatically resize the image to this width (in pixels). If you don't specify it, it will use *proportional width* to the specified height to keep the original proportions, or the original width if the height is not specified. If you specify both width and height, the cropping policy will be applied (see just below).
- **Resize Height(px)** - Enter an integer here will automatically resize the image to this width (in pixels). If you don't specify it, it will use *proportional height* to the specified width to keep the original proportions, or the original height if the width is not specified. If you specify both width and height, the cropping policy will be applied (see just below).
- **Avoid Cropping** - If you specify both width and height, and the image proportions are different from the size you specified, the system will crop the image (cut the extra portion away), using the width as the base for the proportion. This options allows you to override this behavior by telling how you would like to crop the image.
 - **Yes** - Don't crop the image at all. Keeps the width as the main dimension
 - **No** - Default behaviour. Crop using width as the main dimension
 - **Only if Landscape** - Crop only if the image is landscape (width > height)
 - **Only if Portrait** - Crop only if the image is portrait (height > width)
- **Link to Item** - If you check this option, the image will be wrapped by a link to the full item view. Useful for teaser images.

### WidgetKit

This layout allows you to display your image/s using the WidgetKit extension from YooTheme. (NOTE: You MUST have WidgetKit installed prior to using it here in ZOO. Some functionality may be limited to the full version of WidgetKit, some is available with the non-pro version).

You can choose from two Widgets (Gallery & Lightbox) to use for your image (and several styles for each of those widgets)

![WidgetKitLayout](http://joolanders.github.io/Docs/ImagePro/images/layout_widgetkit_gallery.png)

The options available here match those available within the standard WidgetKit Gallery or Lightbox widgets. Please refer to the [WidgetKit documentation](http://www.yootheme.com/widgetkit/documentation?view=docs) for details in configuring these features.

### Qtip
QTip is a library that allows you to create very cool tooltips (not window popups, but js popups, very useful and cool for hover information). When you select this layout, you will be presented with a series of options to show your image into a tooltip. There are a LOT of options available within the qTip layout. Here are some quick tips about what each option does, divided by the section that they appear in.

#### Layout
This section controls how to show the image is displayed, similiar to the Default layout (see above).

#### qTip Display
This section controls the many aspects of how the qTip image is rendered and functions.

![qTipDisplay](http://joolanders.github.io/Docs/ImagePro/images/layout_qtip_display.png)

- **Mode** - This allows you to set how the tooltip is displayed
 - **Tooltip** - (default) Show it as a tooltip. It's like a small cloud hover box.
 - **Modal** - Show it as a popup box that must be closed to permit any further function for the user.
* **Position:**
 - **My** - The corner of the tooltip to position in relation to the target.
 - **At** - The corner of the target element to position the tooltips corner at.
- **Show**
 - **Event** - Javascript event to which bind the showing. example: mouseenter, click, etc.
 - **Delay** - Time to wait before showing the tooltip, in millisecond.
 - **Solo** - Determines whether or not the tooltip will hide all other tooltips when displayed.
- **Hide**
 - **Event** - Javascript event to which bind the showing. example: mouseenter, click, etc.
 - **Delay** - Time to wait before showing the tooltip, in millisecond.
 - **Solo** - Determines whether or not the tooltip will hide all others when showed.
- **Content** - These settings effect the content within the qTip
 - **Class** - Here you can enter a class name to have it applied to the qTip content for custom styling
 - **Title**
     - **None** - No title will be displayed for the tooltip
     - **Label** - This will display the element's label as the tooltip title
     - **Item Name** - Display the entry (item) name as the tooltip title
     - **Loaded Item Name**  - will remove the 'pos-title' or 'sub-pos-title' dom from the loaded data to place it as Tooltip title.
     -  **Custom** - This allows you to set a static text title for this tooltip by entering your text in the **Set title** area (that appears when you select this option)
 -  **Button** - No (default) shows no button. Yes will display a button to manually close the tooltip
 -  **Width** - Enter an integer to set the width of the tooltip content in pixels
 -  **Height** - Enter an integer to set the height of the tooltip content in pixels
-  **Trigger**
 - **Render** - this option allows you to set the status of the rendering:
     - **Yes** - (default) enables the qtip to render (based upon the options below)
     - **No** - disables the rendering of the qtip
     - **If main content is limited** - will only trigger the qtip if the main content is limited
     - **Alone**
 - **Trigger** - This selection determines the content that will be used to trigger the Tooltip. It will be displayed after the element render content.
     - **Read More** - (default) the tooltip is rendered based upon the Read More display
     - **Label** - triggered based upon the item label display
     - **Item Name** - triggered on the Item Name
     - **Custom Text** - this allows you to set the trigger to some custom text which you can enter in the **Trigger Text** area (that appears when you select *Custom Text*
     - **Specified DOM** - this allows you to trigger the tooltip based on a specific DOM (Document Object Module) item which you can enter in the **Trigger DOM** area (that appears when you select *Specified DOM*
 - **Title** - This allows you to select the trigger title
     - **None** - This uses no title
     - **Label** - This uses the label as the trigger title
     - **Item Name** - Uses the Item Name as the trigger title
     - **Custom Text** - Allows you to set a custom, static trigger title in the **Custom Title** area (that appears when you select *Custom Text*
- **Filter & Separator options** - These options are the same as the main filter and separator options available on the main element. These settings apply within the individual qtip content where the 'outer' settings apply to multiple instances of the qtip.
		