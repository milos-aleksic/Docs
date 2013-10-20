# Configuration

## Step 1. Enable ZOOcart for the Application

Choose or create the ZOO application, that you wish to use as a product catalogue. At first you neeed to enable **ZOOcart** for this application.
To do this, switch to Config tab of chosen application, set *“Enable ZOO cart”* param to “Yes” (on the right panel) and save changes.

![Enable ZOOcart](http://joolanders.github.io/Docs/docs/ZOOcart/images/zc3.png)

### Quick note
After that the additional tabs: **“Orders”** and **“ZOOcart Config”** will be displayed right after **“Config”** tab.

## Step 2. Setup the Type

You need to add ZOOcart elements: **“PricePro”** , **“Quantity”** and **“AddToCart”** to the item type, that will be used as a product type (e.g. Product, Article, e.t.c) of the chosen application. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types)

### Quick note
Note, that ZOOcart requires ALL of these elements ( **"PricePro"** , **“Quantity”** and **“AddToCart”**) to be added to chosen type.

## Step 3. Specify the Price Pro and Quantity elements

ZOOcart will autorecognize the elements but it is recommended to specify them. To do so Edit the Type where they have been added, on the ZOOcart panel below the Type name field you can choose the appropiate Element instances for Price and Quantity.

![Specify the Elements](http://joolanders.github.io/Docs/docs/ZOOcart/images/zc22.png)

## Step 4. Setup ZOOcart for the Application

To configure **ZOOcart** for the application switch to appropriate application and click the "ZOOcart" tab.

![Setup ZOOcart](http://joolanders.github.io/Docs/docs/ZOOcart/images/zc4.png)

And setup all the necessary params. Follow the **Configuration Wizard** messages - it will help you to complete the configuration. For more details please review the [Settings doc](ZOOcart/settings.md).

![Follow the Configuration Wizard](http://joolanders.github.io/Docs/docs/ZOOcart/images/zc25.png)

## Step 5. Setup the elements

Now that your items are Products you can display the price/quantity information and the Checkout button. To do so, assign the Price Pro, Quantity & AddToCart elements to a position using it's default layouts. For more information about layouts setup, please review the [ZOO official docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

## Done!

You ZOOcart basic setup is ready!