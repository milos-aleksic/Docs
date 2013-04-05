## Files Parameters

- **Mode**
You have three selections here: *Files, Folders, Both*
	- **Files**: You can select ***just*** files from your disk (and upload them), one by one.
	- **Folders**: You can select ***just*** folders (but you can still upload files into the folders), one by one. The system will fetch the files contained in that folder automatically.
	- **Both**: You can select ***both** files and folders (and still upload files). The system will merge the files from the folders and the files you selected in a single list.

- **Default Source**
Default image. If no source is specified in the Item, the *specified default will be used on rendering*. Can be a full path to a *Folder or File*. 
If you input **[authorname]** in the path, it will be replaced with the item's author name

- **Websafe File Names**
If the file name should be converted to ASCII or left in UTF8 (UTF8 supports non-latin characters and special symbols)

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