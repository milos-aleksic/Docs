# Configuration

After **DownloadPro** was installed, you may add it as an element to the appropriate ZOO type. Use the following steps: 
- press the "gear tab";
- choose desirable application group *(e.g. Blog, Static pages)*;
- click on the *"Edit elements"* link, that appears under the type name *(e.g. Article, Author, etc.)*;
- click on the appropriate element on the right panel in order to add **DownloadPro** element to the appropriate type.

![DownloadPro](/images/dnloadpro_element.png)

Now you may configure added **DownloadPro** element.

## Basic Parameters

*Basic Parameters* define common element settings.

![Basic parameters](/images/params_basic.png)

- **Name** - Use to set element's name, that will be used in layouts and item properties.
- **Description** - Use to describe element shortly.
- **Access Level** - Use to setup element accessibility. In order to make it totally accessible, set this parameter to *"Public"*.
- **Repeatable** - Set *"Yes"* if you want to use a few of such elements per one application item.
- **Instance Limit** - Use to limit number of element instances *(usually used in combination with the Repeatable param)*.

## Edit Layout Parameters

*Edit Layout Parameters* define element layout settings.

![Layout parameters](/images/params_edit_layout.png)

- **Main Layout** - Use to set main layout.
- **Sub Layout**  - Use to set additional sub layout.

## Files Parameters

The *Files* area allows you to configure what types of image files can be used, and how they are used and accessed.

![Files parameters](/images/params_files.png)

- **Mode** - Use to set download mode:
	- ***"Files"*** - to allow downloading only files.
	- ***"Folders"*** - to allow downloading only folders.
	- ***"Both"*** - to allow downloading files and folders.

- **Default Source** - Default file. If no source is specified in the Item, the specified default will be used on rendering. Can be a full path to a Folder or File. If you input [authorname] in the path, it will be replaced with the item's author name.

- **Legal Extensions** - Use this param to set file extensions allowed for downloading. Use the "|" symbol to separate multiple extensions.

- **File Directory Path** - Use to set directory, where downloadable files should be located. You can use the following variables in order to create dynamic paths:

	- ***[userid]*** - Will be replaced with the user ID.
	- ***[username]*** - Will be replaced with the user username
	- ***[usertype]*** - Will be replaced with the user usertype, e.g.: author.
	- ***[zooapp]*** - Will be replaced with ZOO Item App Instance name, e.g.: blog.
	- ***[zooprimarycat]*** - Will be replaced with current Item Primary Category, e.g.: tipography.
	- ***[zooprimarycatid]*** - Will be replaced with current Item Primary Category ID, e.g.: 4.
	- ***[year]*** - Will be replaced with current year, e.g.: 2010
	- ***[month]*** - Will be replaced with current month number, e.g.: 06.
	- ***[day]*** - Will be replaced with the day number, e.g.: 10.

- **Max uploaded Size (KB)** - Use to limit uploaded files size in Kb. (Default value 1024Kb=1Mb).

- **Amazon S3 Integration** - Check this option to allow Amazon S3 Integration.

- **S3 Bucket** - Use to provide Amazon S3 Bucket name.

- **AWS AccessKey** - Use to provide AWS access key.

- **AWS SecretKey** - Use to provide AWS secret key.

## Specific parameters

![Specific parameters](/images/specific_params.png)

- **Download Mode** - Allows to specify download mode:
	- ***"Direct"*** - for direct download.
	- ***"Attachment"*** - for download as attachment.
	- ***"Protected"*** - for protected download mode.
