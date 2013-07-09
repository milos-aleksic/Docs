# Layout Configuration

![ZoolanderRocketShip](/images/rocketshipImage.png)

ImagePro has tons of options to configure how to display your image(s) to your users. Here you can find the explanation for each parameter.
If you want, you can also check our examples to see how to create widgetkit galleries, slideshows, and much more.

To configure the layout options for ImagePro, go to the **ZOO configuration (Gear icon)**, select your application and click on the **layout** you want to customize (for example, *full*). 
Then just drag your ImagePro element from the right side into your preferred position, and click the pencil icon to start changing the parameters.

## Basic Parameters

The basic parameters are the same parameters you find in every zoo element

- **Show Label**
Choose if the label of the element should be shown
- **Alternative Label**
This is the label shown to the user for the element. If you don't fill this field, the Name of the element (set in the configuration) will be used

## Layout Parameters

- **Main Layout** and **Sub Layout**
This is the layout that will be used to shown your images. Basically it's a (partial) html file that will take your selected images and shown them into your page. There are 3 options shipped with image pro, each one with several variations. You can also add your own layouts.
	- **Default**
	This layout is the default one, and also the most "standard". It simply outputs an image tag, with a bunch of extra options if needed.
	It supports several sublayouts:

		- **default**
		A standard image tag, with the options you set for each image, such as title, spotlight and lightbox.
		- **no cache**
		Same as the default, without the caching.
		- **raw path**
		Outputs just the raw link to the image, without the \<img\> tag

	- **Qtip**
	QTip is a library that allows you to create very cool tooltips (not window popus, but js popups, very useful and cool for hover informations). When you select this layout, you will be presented with a series of options to show your image into a tooltip

		- **Layout**
		How to show the tooltip:

			- **Tooltip**
			Show it as a tooltip. It's like a small cloud hover box.
			It has a number of options
				
				- **Position:**
					- **My**
					The corner of the tooltip to position in relation to the target.

					- **At**
					The corner of the target element to position the tooltips corner at.

				- **Show**
					- **Event**
					Javascript event to which bind the showing. es: mouseenter, click
					- **Delay**
					Time to wait before showing the tooltip, in millisecond.
					- **Solo**
					Determines whether or not the tooltip will hide all others when showed.

				- **Hide**
					- **Event**
					Javascript event to which bind the showing. es: mouseenter, click
					- **Delay**
					Time to wait before showing the tooltip, in millisecond.
					- **Solo**
					Determines whether or not the tooltip will hide all others when showed.

	**All the layouts also share the resizing and linking options**. They allow you to specify the dimensions of the displayed image(s) along with cropping policy and item linking.

	- **Resize Width**
	Width of the image. If you don't specify it, it will use *proportional width* to the specified height to keep the original proportions, or the original width if the height is not specified. If you specify both width and height, the cropping policy will be applied (see just below).

	- **Resize Height**
	Height of the image. If you don't specify it, it will use *proportional height* to the specified width to keep the original proportions, or the original height if the width is not specified. If you specify both width and height, the cropping policy will be applied (see just below).

	- **Avoid Cropping**
	If you specify both width and height, and the image proportions are different from the size you specified, the system will crop the image (cut the extra portion away), using the width as the base for the proportion. This options allows you to override this behavior by telling how you would like to crop the image.

		- **Yes**
		Don't crop the image at all. Keeps the width as the main dimension
		- **No**
		Default behaviour. Crop using width as the main dimension
		- **Only if Landscape**
		Crop only if the image is landscape (width > height)
		- **Only if Portrait**
		Crop only if the image is portrait (height > width)

	- **Link to Item**
	If you check this option, the image will be wrapped by a link to the full item view. Useful for teaser images.
		