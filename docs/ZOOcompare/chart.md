# Chart

The ZOOcompare Chart is the comparison table used to display the Items selected by the User. It's responsive and Bootstrap based.

## Chart Layout

The *ZOOcompare Chart / Compare* layout is used to assign the elements that will be part of the Chart and can be found in the ZOO Extensions Layouts. It has two positions, *Rows* and *Toolbar*.

![Positions](http://joolanders.github.io/Docs/docs/ZOOcompare/images/chart_positions.png)

- **Rows**
	In this position you can place any Element which data you would like to be displayed in the comparison Chart. Each Element has it's own Rendering options, be sure to set it up as needed. It could happen that the Element has no data, in that case an alternative text could be displayed using the "If no value, render instead* field under the ZOOcompare Section.

	Additionally you can place the *Compare* Element in this position to render special rows such as *Main Header* and *Header* or even add custom ones. Checkout the [Element Doc](ZOOcompare/element_compare.md) for more details.

- **Toolbar**
	In this position you can place only the *Compare* Element which will allow you to choose Toolbar buttons such as *Download CSV*, *Restore Chart* and *Restore Hidden*. Those are rendered in the Bottom of the Chart when using the Default Layout.

	Checkout the [Element Doc](ZOOcompare/element_compare.md) for more details.