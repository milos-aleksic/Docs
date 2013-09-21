# Module Configuration

The Module is used to display the Search Forms.

## Options
It is only posible to filter Items from the same Type/App at a time and you would need to choose it in the Module params. It is posible however to display several Modules with diferent configurations in the same page.

![Module Params](http://joolanders.github.io/Docs/docs/ZOOfilter/images/module_params.png)

- **Items** - Allows to choose the ZOO App and Type which Items will be filtered.
- **Form method** - Allows to choose the method that will be used by the Form to send the search data.
 - **GET** - Recommended.
 - **POST** - This methos does NOT support pagination between results.
- **Show Ordering** - Allows to choose if the *Ordering Form* should be displayed in the results page. If enabled it will allow the users to reorder the filtered results. 
- **Show search page title** - Allows to choose if the *Page Title* should be displayed in the results page. If enabled it will allow the users to reorder the filtered results. See *Search page title* below.
- **Show Submit Button** - Allows to choose if the *Submit* button should be displayed in the search form.
- **Show Clear Button** - Allows to choose if the *Clean* button should be displayed in the search form. The button allows to clear the contents of any presently entered filtering criteria.
- **Search page title** - Allows to set the *Search page title*. See previous *Show search page title*.
- **Columns** - Allows to choose the amount of columns with which will be rendered the Items in the results view.
- **Items Per Page** - Allows to choose the amount of Items per page that will be displayed in the results view.
- **Max number of results** - Allows to set a maximun number of results to display. 1000 (default) will display up to 1000 results/entries in the filter results. Any items matching the filter criteria that are beyond 1000 will not be rendered. You can set this to any valid integer.
- **Page Layout** - Allows to set the type of Page Layout for the results page:
 - **Search** - (default) will display the results using standard results display
 - **Json** - will return the JSON (code) result of the filtering operation. This option is ment for custom results layouts.
- **Ordering Layout** - Allows to choose the Order Layout that will be used to render the order form.
- **Result Layout** - Allows to choose the Result Layout that will be used to render Items in the results view.
- **Module Layout** - Allows to choose the Search Layout that will be used to render the form.
- **Result Page Itemid** - Allows to set a specific Itemid on the results page.
- **Module Class Suffix** - Allows to set a module class suffix for specific module styling.