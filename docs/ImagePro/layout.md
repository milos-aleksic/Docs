# Layout Configuration

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
		