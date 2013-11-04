# Settings

![Settings](http://joolanders.github.io/Docs/docs/ZOOseo/images/settings.png)

- **Category path in URL** - generate the url using the category structure the item / category is in. This is the preferred version, and also what you probably expect. It removes /category and /item from the url, and limits the alias conflicts between category and items only to the category and items on the same level (ie: within the same category. The Result is something like /base/url/category/subcategory/subsubcategory/the-item-alias.

- **Remove /item** - removes the /item from the generated SEF urls.
- **Remove /category** - removes the /category from the generated SEF urls.
- **Redirect old urls** - will redirect the the old urls (/item and /category) to the new ones to avoid content duplication.
- **Alias Priority** - allows to choose which alias should take priority if a category and an item have the same one.
- **Overwrite Item Metadata** - if enabled, even the manually set metadata of the item will be overwriten. Reccomended only if you're fixing your site metadata the first time. Should be disabled later to allow custom metadata.
- **Overwrite Category Metadata** - if enabled, even the manually set metadata of the category will be overwriten. Reccomended only if you're fixing your site metadata the first time. Should be disabled later to allow custom metadata
- **Item: Generate on** - allows to set when the metadata should be generated, on item saving or displaying (init). On init is great for first time generation, but has very bad performance, so it's better to leave it to saved for live sites.
- **Category: Generate on** - allows to set when the metadata should be generated, on category saving or displaying (init). On init is great for first time generation, but has very bad performance, so it's better to leave it to saved for live sites.
- **Item Separator** - separator if there are more elements in the same position. For keywords, comma will always be used.
- **Category Separator** - separator if there are more elements in the same position. For keywords, comma will always be used.
- **Category Metatitle** - what fields has to be used to set the metatitle in the category.
- **Category Metadescription** - what fields has to be used to set the metadescription in the category.
- **Category Keywords** - what fields has to be used to set the keywords in the category.
- **Category Author** - what fields has to be used to set the author in the category.