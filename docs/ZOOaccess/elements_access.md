# Elements Access

All of your elements in ZOO should now have a new section in the element configuration called ZOOaccess. This allows you to set who can access that specific element.

The access evaluation can be set on each element Configuration or Assignment. The *Evalute* checkbox must be marked in order to start evaluating them.

[screenshot]

- **Evaluate** - Allows to choose if the access will be evaluated for this element. Must be selected in order to view the rest of the options.
- **Apply on Edit View** - Allows to choose if the selected rules should be applied also in the Edit view.
- **Matching method** - Allows to choose if a match should be accepted when ALL or ANY (one or more) of the assignments are matched.
- **Action** - Allows to choose the action that should be applied to the element if there is a match. The *Render* action will render the element if the evalution was positive, the *Not render* action will render the element if the evalution was negative.

## Access Hierarchy
Our recommendation is to set your base or most common restrictions at the Type level, in the Element Config, and override them in the Layout Positions assignments as needed.

If you do so, in the Layout Positions assignment the ZOOaccess configuration appears as *Override* instead of *Evaluate*. 

![Override on Assignment](http://joolanders.github.io/Docs/docs/ZOOaccess/images/layout_override.png)

By checking the *Yes* box you can then override any or all existing restrictions that have been placed on this element.