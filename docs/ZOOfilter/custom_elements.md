# Custom Elements

ZOOfilter groups the Elements into *Category*, *Date*, *Input*, *Option* and *Rating*. It will autoassign the group to each of the ZOO Elements and will ignore any uncategorized element. Fortunatly it is possible to assign a category to custom elements:

1. Open the custom element XML file.
2. Localize the `<element/>` tag.
3. Add a *zfgroup* attribute with the appropiate category value. 
Eg: `<element type="textpro" zfgroup="input">`
4. Save the file and done!