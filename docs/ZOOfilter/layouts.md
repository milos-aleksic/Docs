# Layouts Configuration

There are several ZOOfilter layouts accesible within ZOO App Layouts.

[screenshot]

## Search layout

This layout is used to assign the elements that will be part of the Search form. Notice that the render layouts and params are not the same but specific for the form purpose. Not all elements are compatible with this layout, only the ones that are searchable.

ZOOfilter groups the Elements into *Category*, *Date*, *Input*, *Option* and *Rating*. Depending of the Element group you assign to the Search Position one of the following Elements Layouts will appear.

**Note**: if you are using custom elements check this [doc](ZOOfilter/custom_elements).

### Category Elements
To the Elements considered part of the Category group, 4 layouts are available:

- **Default** - Will render a Dropdown form field.
- **Checkbox** - Will render a Checkbox form field.
- **Radio** - Will render a Radio form field.
- **Ajax** - Will render a one level Dropdown form field which will load consecuent Dropdown subcategories when the parent is selected.

### Date Elements
To the Elements considered part of the Date group, next layouts are available:

- **Default** - Will render a date Input form field.
- **Range** - Will render two date Inputs form fields for range searches.

### Input Elements
To the Elements considered part of the Input group, next layouts are available:

- **Default** - Will render a text Input form field.
- **Range** - Will render two text Inputs form fields for range searches.

### Option Elements
To the Elements considered part of the Option group, next layouts are available:

- **Default** - Will render a Dropdown form field.
- **Checkbox** - Will render a Checkbox form field.
- **Radio** - Will render a Radio form field.

### Rating Elements
To the Elements considered part of the Option group, next layouts are available:

- **Select** - Will render a Dropdown form field.
- **Checkbox** - Will render a Checkbox form field.
- **Radio** - Will render a Radio form field.
- **Range** - Will render two text Inputs form fields for range searches.

## Order layout

This layout is used for the order form rendered in the search results view which would allow to reorder the results by this elements value. Notice that not all elements are compatible with this layout, only the ones that are orderable.

[screenshot]

For each element you can set:

- **Alternative Label** - Allows to override the default element label displayed in the order form.
- **Value Type** - Allows to choose which type comparison should be used when ordering with this value.

## Result layout

This layout is used to display the results view. You can place any Element here.

