# Compare Element

The *Compare* Element is used by ZOOcompare for several compare features. Is necesary to be part of the Type being compared.

## Element Layouts

The element will show diferent rendering layouts depending of the position and layout where it is dropped:

### Standard ZOO layouts
When placed into any standart ZOO Layout position it will offer an *Add to Compare / Remove from Compare* button display.

### ZOOcompare Chart Layout
When placed into the *ZOOcompare Chart Compare* layout it will adapt to offer diferenty displays depending of the position:

- **Row position**
	Will offer row related displays, such as table Main Header and Headers.

	![Row Position](http://joolanders.github.io/Docs/docs/ZOOcompare/images/element_chart_row_position.png)

	- **Main Header**
		Will render a Header with the appropiate Item name on each column.

		- **Link to item** - allows to choose if the Item name should be linkable to the Item full view.
		- **Remove button** - allows to choose if beside the Item name it should be displayed a button which will remove the Item from the table.

	- **Header**
		Will render a Header which can Hide/Show it's childs.

		- **Title** - the Header title.
		- **Fold feature** - allows to choose the Fold (child hiding feature) state. Offers to start with the childs hiden, unhiden or don't allow this feature at all.

- **Toolbar position**
	Will offer a Toolbar related displays, such as Download CSV, Restore Chart and Restore Hidden buttons.

	- **Download CSV** - allows to download a CSV of the currently displayed Chart data.
	- **Restore Chart** - allows to restore the Chart to it's initial state, if some Items was removed for example.
	- **Restore Hidden** - allows to restore the hidden rows.