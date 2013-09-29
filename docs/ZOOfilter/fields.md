# Fields

ZOOfilter Form fields are composed by the Elements for whom ZOOfilter will use specific group layouts. Those layouts are stored in the **modules/mod_zoofilter/tmpl/_elements** folder, where you can even store your custom layouts.

## Groups

In order to apply the correct field layout to each Element ZOOfilter groups them into *Category*, *Date*, *Input*, *Option* and *Rating*. When an Element is assigned to a position of the *Search Layout* the Group specific layout will appear as options.

If you are using custom elements and those are searchable you would need to assign them the Group manually, to do so:

1. Open the custom element XML file.
2. Localize the `<element/>` tag.
3. Add a *zfgroup* attribute with the appropiate category value. 
Eg: `<element type="textpro" zfgroup="input">`
4. Save the file and done!

### Category group
For the Elements considered part of the Category group, 4 layouts are available:

- **Default** - Will render a Dropdown form field.
- **Checkbox** - Will render a Checkbox form field.
- **Radio** - Will render a Radio form field.
- **Ajax** - Will render a one level Dropdown form field which will load consecuent Dropdown subcategories when the parent is selected.

### Date group
For the Elements considered part of the Date group, next layouts are available:

- **Default** - Will render a date Input form field.
- **Range** - Will render two date Inputs form fields for range searches.

### Input group
For the Elements considered part of the Input group, next layouts are available:

- **Default** - Will render a text Input form field.
- **Range** - Will render two text Inputs form fields for range searches.

### Option group
For the Elements considered part of the Option group, next layouts are available:

- **Default** - Will render a Dropdown form field.
- **Checkbox** - Will render a Checkbox form field.
- **Radio** - Will render a Radio form field.

### Rating group
For the Elements considered part of the Option group, next layouts are available:

- **Select** - Will render a Dropdown form field.
- **Checkbox** - Will render a Checkbox form field.
- **Radio** - Will render a Radio form field.
- **Range** - Will render two text Inputs form fields for range searches.