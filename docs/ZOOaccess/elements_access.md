# Elements Access

In your ZOO elements configuration and assignement there is a section called ZOOaccess, it allows you to set who can access that specific element. The *Evalute* checkbox must be marked in order to start evaluating them.

![Evaluate](http://joolanders.github.io/Docs/docs/ZOOaccess/images/evaluate.png)

- **Evaluate** - allows to choose if the access will be evaluated for this element. Must be selected in order to view the rest of the options.
- **Apply on Edit View** - allows to choose if the selected rules should be applied also in the Edit view.
- **Matching method** - allows to choose if a match should be accepted when ALL or ANY (one or more) of the assignments are matched.
- **Action** - allows to choose the action that should be applied to the element if there is a match. The *Render* action will render the element if the evalution was positive, the *Not render* action will render the element if the evalution was negative.

If you are in the Positions Assignments and have set an evaluation in the Element config, the ZOOaccess section will display *Override* instead of *Evaluate*. 

![Override on Assignment](http://joolanders.github.io/Docs/docs/ZOOaccess/images/layout_override.png)

By checking the *Yes* box you can override any or all existing restrictions that have been stated.