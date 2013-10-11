# Filtering params

ZOOitem Pro filter/order params are very extense and flexible, following is a resume of the common options.

![Filter Params](http://joolanders.github.io/Docs/docs/ZOOitemPro/images/filter_params.png)

- **Filter**
	- **Apps** - allows to choose the Apps the Item should be part of. No selection is equal to select all.
	- **Categories** - allows to choose the Categories the Item should be part of. No selection is equal to select all.
	- **Types** - allows to choose the Types the Item should be part of. No selection is equal to select all.
	- **Author** - allows to filter the Items by Authors settings it's User IDs delimeted by a comma. The [userid] variable can be used to add the ID of the curren User.
	- **Published State** - allows to set Published State the Items should have.
	- **Frontpage State** - allows to set Frontpage State the Items should have.
	- **Offset** - allows to set the query offset removing the first Items from the result.
	- **Limit** - allows to set the query limit removing the last Items from the result.
	- **Date**
		- **Created** - allows to filter the Items by it's created date.
		- **Modified** - allows to filter the Items by it's modified date.
		- **Published Up** - allows to filter the Items by it's published up date.
		- **Published Down** - allows to filter the Items by it's published down date.
- **Order**
	- **Random** - allows to set a random order for the filtered items.
	- **Revers** - allows to reverse the final ordering.
	- **Priority** - allows to set if the Items priority should be considered for the ordering.
	- **Alphanumeric** - allows to choose if the ordering should be done with alphanumeric values. Enable if your order is failing, specially if there are numbers involved.
	- **Core** - allows to choose the core element by which will be made the order.


More options could be available for the Element specific filtering and ordering depending of the App/Type selected.

### Tip
Dates inputs supports special variables such as **[yesterday]**, **[today]** and **[tomorrow]** which are very useful for creating dynamic filtering.