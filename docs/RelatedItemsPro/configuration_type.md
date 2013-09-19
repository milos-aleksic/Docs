# Type Configuration

Please add the Related Items Pro element to the desired Type. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types).

## Basic Parameters

<% {
	"type":"snippet", "url":"snippets/element_config_basic.md", "vars":{
		"repeatable": 0
	}
} %>

## Specific Parameters

[image]

- **Editable** - Allows to choose if the element should allow to make relations or only show them. Usually combined with Bi-relation feature.
- **Authored by User** - Allows to choose if the items should be prefiltered and only show for selection the ones authored by current user.

## Items Parameters

[image]

- **Apps** - Allows to choose the Apps the items will be prefiltered by. No selection it's iqual to selecting all. 
- **Types** - Allows to choose the Types the items will be prefiltered by. No selection it's iqual to selecting all. 
- **Bi-Related Elements** - Allows to chosee the elements from other Types that will be used for bi-directional relation. When a relation is made, the current Item will be also related from within the related Item. The relations are element based, multiple relations are allowed.