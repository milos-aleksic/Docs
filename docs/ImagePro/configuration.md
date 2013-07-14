# General Configuration & Basic Parameters

You configure the parameters of this element the same as any Joomla element. You can find instructions [here](basic_configuration_options.md).

## Basic Parameters

The Image Pro element allows you to use the usual basic parameters as indicated [here](basic_configuration_options.md).
It does permit the option to have this element be *repeatable*.

## Files Parameters

The files area allows you to configure what types of image files can be used and how they are used and accessed.

![Files Parameters](/images/parameters_files.png)

- **Mode**
You have three selections here: *Files, Folders, Both*
	- **Files**: You can select ***just*** files from your disk (and upload them), one by one.
	- **Folders**: You can select ***just*** folders (but you can still upload files into the folders), one by one. The system will fetch the files contained in that folder automatically.
	- **Both**: You can select ***both** files and folders (and still upload files). The system will merge the files from the folders and the files you selected in a single list.

- **Default Source**
Default image. If no source is specified in the Item, the *specified default will be used on rendering*. Can be a full path to a *Folder or File*. 
If you input **[authorname]** in the path, it will be replaced with the item's author name

- **Legal Extensions**
This allows you to limit the extensions of files to those indicated here. The default (bmp|gif|jgp|jpeg|png) will only allow files with these extensions to be uploaded. You can add, remove or replace this list as needed. Separate multiple file extensions with a 'pipe' `|` character (no spaces).

- **File Directory Path**
Relative path to file directory. Defaults to 'images' or Media Manager Files Folder Path value if left blank, started with variable or Joomla prohibited folder and no External Integration set.
	
	The following variables can be used to create dynamic paths:

	* **[userid]** - Will be replaced with the user ID
	* **[username]** - Will be replaced with the user username
	* **[usertype]** - Will be replaced with the user usertype eg: author
	* **[zooapp]** - Will be replaced with ZOO Item App Instance name, eg: blog
	* **[zooprimarycat]** - Will be replaced with current Item Primary Category, eg: tipography
	* **[zooprimarycatid]** - Will be replaced with current Item Primary Category ID, eg: 4
	* **[year]** - Will be replaced with current year, eg: 2010
	* **[month]** - Will be replaced with current month number, eg: 06
	* **[day]** - Will be replaced with the day number, eg: 10

- **Max Upload Size**
Maximum dimensions for uploaded files, in KB.

## Specific Parameters

- **Custom Options** 
If set to *yes*, the user can set specific options for each image, like title, link, spotlight and lightbox effects.

	- **Title**
	Allow the user to set a *custom title* for the image
	- **Link**
	Let the user input a *link* to use when the image is clicked
	- **Lightbox**
	Allow the user to choose a specific image for the lightbox effect. This image will be shown when the image itself is clicked using a lightbox effect
	- **Spotlight**
	Allow the user to choose if the image should have a spotlight effect, and which type of it.