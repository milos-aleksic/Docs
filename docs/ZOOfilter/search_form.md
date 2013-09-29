# Search Form

ZOOfilter Search form is displayed by the *ZOOfilter Module* and controlled by the *ZOOfilter Plugin*. Currently is limited to search trough one App and Type at the time.

The Form inputs are composed by the Elements in the ZOOfilter layouts.


## Search layout

This layout is used to assign the elements that will be part of the Search form. Notice that the render layouts and params are specific for the form purpose. Only the serachable and Elements with a group are compatible with this laout. For more information please review the [Field](ZOOfilter/layout.md) doc.

## Order layout

This layout is used for the order form rendered in the search results view which would allow to reorder the results by this elements value. Notice that not all elements are compatible with this layout, only the ones that are orderable.

For each element you can set:

- **Alternative Label** - Allows to override the default element label displayed in the order form.
- **Value Type** - Allows to choose which type comparison should be used when ordering with this value.

## Result layout

This layout is used to display the results view. You can place any Element here.

