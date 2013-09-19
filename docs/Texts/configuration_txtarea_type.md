# Type Configuration

Please add the Textarea Pro element to the desired Type. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types).

## Basic Parameters

<% {
	"type":"snippet", "url":"snippets/element_config_basic.md", "vars":{
		"repeatable": 1
	}
} %>

## Specific Parameters

[image]

- **Plugins** - Allows to choose if the Plugins tags should be evaluated on render. 
- **Additional Options** - Allows to Show/Hide the additional options each Element instance could offer.
- **Editor** - Allows to choose the text editor which will be used.
 - **Tiny Editor** - Based on TinyMCE it loads the minimum feature improving the Item page load time.
   - **Enabled on Load** - Allows to choose if the Editor will be loaded initally leaving load Editor button. If disabled the page loading will be drastically improved if you have plenty of textarea instances.
   - **Input size** - Allows to set the default Input Height size. It can be manually resized while editing.
  - **Joomla Editor** - It loads the Joomla Default Editor and behave the same way ZOO Textarea do.
  - **No Editor** - No editor will be loaded, just an textarea element.
   - **Input size** - Allows to set the default Input Height size. It can be manually resized while editing.
   - **Maximum Characters** - Allows to limit the maximum number of characters the input will allow.
- **Default Value** - Allows to set the default field value when creating new Item.