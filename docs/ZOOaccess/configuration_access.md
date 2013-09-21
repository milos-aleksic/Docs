# Access Configuration

If the installation process went well ALL of your elements in ZOO should now have a new section in the element configuration called ZOOaccess. This allows you to set who can access that specific element.

# Rules evaluation

The rules can be set on each element Config and be applied generally and/or on Layout view and be applied only on it. The *Evalute* checkbox must be marked in order to start evaluating them.

**Note**: Even if set in Config the rules can be overrided in the Layout.

[screenshot]

- **Evaluate** - Allows to choose if the selected rules will be applied to the element.
- **Apply on Edit View** - Allows to choose if the selected rules should be applied also in the Edit view.
- **Matching method** - Allows to choose if a match should be accepted when ALL or ANY (one or more) of the assignments are matched.
- **Action** - Allows to choose the action that should be perfomed if there is a match.

By default all rules are ignored and the Element access will be no evaluated. In order to start the rule evaluation, it's state must be changed. Each rule has 3 states:

- **Selection** - The rule will be considered a match only when the following selections ARE met.
- **Exclude Selection** - The rule will be considered a match only when the following selections ARE NOT met.
- **Ignore** - The rule will not be evaluated.

The combination of rules states and evaluation action allows for very flexible elements access behaviour. For individual rule information check it's appropiate section in the left menu.

Access Restriction Hierarchy