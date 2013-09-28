# Elements Access

In your ZOO elements configuration and assignement there is a section called ZOOaccess, it allows you to set who can access that specific element. The *Evalute* checkbox must be marked in order to start evaluating them.

![Evaluate](http://joolanders.github.io/Docs/docs/ZOOaksubs/images/evaluate.png)

- **Item Override** - allows to enable the access overriding on each Item.
- **Evaluate** - allows to choose if the access will be evaluated for this element. Must be selected in order to view the rest of the options.
- **Matching method** - allows to choose if a match should be accepted when ALL or ANY (one or more) of the assignments are matched.
- **Action** - allows to choose the action that should be applied to the element if there is a match. The *Render* action will render the element if the evalution was positive, the *Not render* action will render the element if the evalution was negative.

If you are in the Positions Assignments and have set an evaluation in the Element config, the ZOOaccess section will display *Override* instead of *Evaluate*. By checking the *Yes* box you can override any or all existing restrictions that have been stated.

## Access Rules

ZOOaksubs has a preset rules for the access evaluation. By default the rules are ignored and the access will be no evaluated. In order to start the rule evaluation, it's state must be changed. Each rule has 3 states:

- **Selection** - the rule will be considered a match only when the following selections ARE met.
- **Exclude Selection** - the rule will be considered a match only when the following selections ARE NOT met.
- **Ignore** - the rule will not be evaluated.

### Levels rule

This rule evaluates if the User has an active and valid Akeeba Subscription for the specified Levels.

![Levels Rule](http://joolanders.github.io/Docs/docs/ZOOaksubs/images/rule_levels.png)

- **Levels** - allows to choose the *Akeeba Subscription Level* for which the User should have a valid subscription. Multiple selection is possible. 
 - There is a special Level called **Use this Item as Level**, only present if syncing this Type, which when selected will add to the evaluation Level list the current Item from which will be retrieved the related Level. 
- **Mode** - allows to choose if the User should have access to all (AND) levels or any (OR) of them.
- **User** - allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).

### Packages rule

This rule evaluates if the User has an active and valid Akeeba Subscription for the specified Level package. The Package is just a list of Level synced Items IDs which are chosen by Related Items element.

![Packages Rule](http://joolanders.github.io/Docs/docs/ZOOaksubs/images/rule_packages.png)

- **Levels** - allows to choose *Related Item Element* that represents the Package.
- **Mode** - allows to choose if the User should be parto of all (AND) groups or any (OR) of them.
- **User** - allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).