# Add to Cart element

For **Add to Cart** element you can set only one specific param:

![Add to Cart element](http://joolanders.github.io/Docs/docs/ZOOcart/images/zc21.png)

**Enable By Default** - If this option is set, "Add to cart" button will be available by default.

## Layout

To setup **Add To Cart** element's layout except the basic options you can specify the following ones:

![Add to Cart Layout](http://joolanders.github.io/Docs/docs/ZOOcart/images/zc24.png)

- **Main Layout** - Option allows to choose layout for price output among available ones.
- **Label** - To set the label for Add To Cart button if it's needed
- **Action after Add** - This parameter allows to specify which action will be executed after user click the "Add to Cart" button. You can choose one of the following options:
	- **Redirect To Cart** - If chosen after "Add to Cart" button click user will be redirected to the cart page.
	- **Reload the Page** - If chosen after "Add to Cart" button click page will be reloaded (use if it's necessary to refresh some data on the page).
	- **Do not Redirect** - No action will be executed after adding item to the cart.
- **Menu Item Id** - Set menu item id if you want to snap the cart to some specific menu item.
- **Update the cart module?** - If set to "Yes", ZOOcart module state will be updated (if it is present on the current page).
- **Avoid ReAdd** - Set this option to Yes to disallow repeatedly adding items to the cart by clicking the button time after time.
- **Label for already in the cart** - To specify the text on the "Add to Cart" button when the appropriate item is already in the cart.