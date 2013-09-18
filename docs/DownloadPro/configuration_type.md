# Type Configuration

Please add the Download Pro element to the desired Type. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types).

## Basic Parameters

<% {
	"type":"snippet", "url":"snippets/element_config_basic.md", "vars":{
		"repeatable": 1
	}
} %>

## Edit Layout Parameters

*Edit Layout Parameters* define element edit layout settings.

![Layout parameters](http://joolanders.github.io/Docs/docs/DownloadPro/images/params_edit_layout.png)

- **Main Layout** - Allows the user to set main layout.
- **Sub Layout**  - Allows the user to set additional sub layout.

## Files Parameters

<% {
	"type":"snippet", "url":"snippets/element_config_files.md", "vars":{
		"amazons3": 1
	}
} %>

## Specific Parameters

![Specific parameters](http://joolanders.github.io/Docs/docs/DownloadPro/images/specific_params.png)

- **Download Mode** - Allows the user to specify download mode:
	- **Direct** - Select this option for direct file download (the system doesn't check user access level for downloading).
	- **Attachment** - Select this option to download file as attachment.
	- **Protected** - Select this option to protected download mode (the system checkouts if the user has rights for downloading).
