# Elements Access

All of your elements in ZOO should now have a new section in the element configuration called ZOOaksubs. This allows you to set who can access that specific element.

The access evaluation can be set on each element Configuration or Assignment. The *Evalute* checkbox must be marked in order to start evaluating them.

[screenshot]

- **Item Override** - Enabling this option you will be able to override the access settings on each Item.
- **Evaluate** - Allows to choose if the access will be evaluated for this element. Must be selected in order to view the rest of the options.
- **Matching method** - Allows to choose if a match should be accepted when ALL or ANY (one or more) of the assignments are matched.
- **Action** - Allows to choose the action that should be applied to the element if there is a match. The *Render* action will render the element if the evalution was positive, the *Not render* action will render the element if the evalution was negative.

## Access Hierarchy

Our recommendation is to set your base or most common restrictions at the Type level, in the Element Config, and override them in the Layout Positions assignments as needed.

If you do so, in the Layout Positions assignment the ZOOaksubs configuration appears as *Override* instead of *Evaluate*. 

By checking the *Yes* box you can then override any or all existing restrictions that have been placed on this element.

## Access Rules

ZOOaksubs has a preset rules for the access evaluation. By default the rules are ignored and the access will be no evaluated. In order to start the rule evaluation, it's state must be changed. Each rule has 3 states:

- **Selection** - The rule will be considered a match only when the following selections ARE met.
- **Exclude Selection** - The rule will be considered a match only when the following selections ARE NOT met.
- **Ignore** - The rule will not be evaluated.

### Levels rule

This rule evaluates if the User has an active and valid Akeeba Subscription for the specified Levels.

[screenshot]

- **Levels** - Allows to choose the *Akeeba Subscription Level* for which the User should have a valid subscription. Multiple selection is possible. 
 - There is a special Level called **Use this Item as Level**, only present if syncing this Type, which when selected will add to the evaluation Level list the current Item from which will be retrieved the related Level. 
- **Mode** - Allows to choose if the User should have access to all (AND) levels or any (OR) of them.
- **User** - Allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).

### Packages rule

This rule evaluates if the User has an active and valid Akeeba Subscription for the specified Level package. The Package is just a list of Level synced Items IDs which are chosen by Related Items element.

[screenshot]

- **Levels** - Allows to choose *Related Item Element* that represents the Package.
- **Mode** - Allows to choose if the User should be parto of all (AND) groups or any (OR) of them.
- **User** - Allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).