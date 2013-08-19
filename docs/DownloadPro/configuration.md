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
Maximum dimensions for uploaded files, in KB. (Default value 1024Kb=1Mb).

- **Amazon S3 Integration** - Amazon S3 Integration is s storage for the Internet. It is designed to make web-scale computing easier for developers. To learn more visit http://aws.amazon.com/s3/. 

	- **S3 Bucket** - Amazon S3 Bucket name (Learn more on http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html).
	- **AWS AccessKey** - AWS access key.
	- **AWS SecretKey** - AWS secret key.

## Specific Parameters

![Specific parameters](/images/specific_params.png)

- **Download Mode** - Allows to specify download mode:
	- ***"Direct"*** - for direct download.
	- ***"Attachment"*** - for download as attachment.
	- ***"Protected"*** - for protected download mode.
