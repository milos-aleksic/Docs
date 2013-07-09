# Switching (upgrading) your existing zoo elements to pro #

Don't loose time upgrading all your data, just upgrade your elements!

If you have a site already working with a standard ZOO element, it would would be a lot of work switching manually to Pro version. The good news is that you can switch without loosing any data!

## Here's how to upgrade your data and app ##

1. Be sure you have installed the PRO element and have it working FIRST.
1. Go to `media/zoo/applications/YOURAPP/types/YOURTYPE.config` and edit it.
1. Search for the param that relates to the specific element you are upgrading
1. Locate the `type` entry for the element (it should be at the bottom of the specific element's section
1. Change the `type` from the standard (existing) to the Pro version. i.e. If you are upgrading from the *Text* element to the *TextPro* element, locate text and change the type to textpro. Here are the various standard elements with their pro versions
 - text -> textpro
 - textarea -> textareapro
 - download -> downloadpro
 - image -> imagepro
 - date -> datepro
 - googlemaps -> googlemapspro
 - link -> linkpro
1. Save and exit.
1. Now return to your ZOO admin area
1. Edit that same Content Type
1. Locate and open the element that you are upgrading Your element that was a 'standard' element before should now be a PRO element
1. Configure/Edit the new Pro features settings that you want to use
1. Save the type That's it. Your entries should now be updated to use the PRO element.

Please note: Although you are able to theoretically upgrade any element (and the element will become a PRO element with all the functionality added after upgrading), there are a couple elements where you will not be able to retain all of your content when you do the upgrade. Here are those elements:

- relatedcategories -> relatedcategoriespro
- relateditems -> relateditemspro

Making the changes as indicated above will make the old element appear as a new (pro) element in your type; however, any related content entered previously may be lost.

Please backup before doing this. We don't take any responsability of lost data.