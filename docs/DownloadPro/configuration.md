# Configuration

After **DownloadPro** was installed. You may add it as element to desirable type. To do this
you should go to the **Type Manager** (Press the "gear tab" and choose desirable application group *(e.g. Blog, Static pages)*).
After that click on the *"Edit elements"* link, that appears under the type name *(e.g. Article, Author, e.t.c)*.


To add **DownloadPro** element to the type click on the appropriate element on the right panel:

![DownloadPro](/images/dnloadpro_element.png)

Now you may configure added **DownloadPro** element.

## Basic parameters

![Basic parameters](/images/basic_params.png)

- **Name** - This name will be used as element's name in layouts and item properties.

- **Description** - Use to describe element shortly.

- **Access Level** - You can setup element accessibility. To make it totally accessible set this parameter to *"Public"*

- **Repeatable** - Set *"Yes"* if you suppose to use few such elements per one application item.

- **Instance limit** - Set if you want to limit number of element instances *(Usually uses in combination with the Repeatable param)*.

- **Main Layout** - Use to set main layout.

- **Sub Layout**  - Use to set additional sub layout.

- **Mode** - Set to define download mode: ***"Files"*** - to allow downloading only files, ***"Folders"*** - to allow downloading only folders, ***"Both"*** - to allow downloading files and folders.

- **Default Source** - Defines default source to download.

- **Legal Extensions** - Use this param to setup file extensions, allowed to be downloaded. To separate extensions use "|" symbol.

- **File Directory Path** - Defines directory, where downloadable files should be located. You can use The following variables can be used to create dynamic paths:

1. ***[userid]*** - Will be replaced with the user ID
2. ***[username]*** - Will be replaced with the user username
3. ***[usertype]*** - Will be replaced with the user usertype eg: author
4. ***[zooapp]*** - Will be replaced with ZOO Item App Instance name, eg: blog
5. ***[zooprimarycat]*** - Will be replaced with current Item Primary Category, eg: tipography
6. ***[zooprimarycatid]*** - Will be replaced with current Item Primary Category ID, eg: 4
7. ***[year]*** - Will be replaced with current year, eg: 2010
8. ***[month]*** - Will be replaced with current month number, eg: 06
9. ***[day]*** - Will be replaced with the day number, eg: 10

- **Max uploaded Size (KB)** - Allows to limit uploaded files size in Kb. (Default value 1024Kb=1Mb).

- **Amazon S3 Integration** - Check this option to allows Amazon S3 Integration.

- **S3 Bucket** - Use to provide Amazon S3 Bucket name.

- **AWS AccessKey** - Use to provide AWS access key.

- **AWS SecretKey** - Use to provide AWS secret key.

## Specific parameters

![Specific parameters](/images/specific_params.png)

- **Download Mode** - Allows to specify download mode: ***"Direct"*** - for direct download, ***"Attachment"*** - for download as attachment and ***"Protected"*** - for protected download mode.
