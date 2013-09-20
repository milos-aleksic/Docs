# Rules evaluation

The rules can be set on each element Config and be applied generally and/or on Layout view and be applied only on it. The *Evalute* checkbox must be marked in order to start evaluating them.

**Note**: Even if set in Config the rules can be overrided in the Layout.

[screenshot]

- **Evaluate** - Allows to choose if the selected rules will be applied to the element.
- **Apply on Edit View** - Allows to choose if the selected rules should be applied also in the Edit view.
- **Matching method** - Allows to choose if a match should be accepted when ALL or ANY (one or more) of the assignments are matched.
- **Action** - Allows to choose the action that should be perfomed if there is a match.

By default all rules are ignored and the Element access will be no evaluated. In order to start the rule evaluation, it's state must be changed. Each rule has 3 states:

- **Ignore** - The rule will not be evaluated.
- **Selection** - The rule will be evaluated and a match will be considered when the evaluation is true.
- **Exclude Selection** - The rule will be evaluated and a match will be considered when the evaluation is false.

The combination of rules states and evaluation action allows for very flexible elements access behaviour. For individual rule information check it's appropiate section in the left menu.

# Rules

## User Access rule

This rule evaluates if the User has the appropiate Joomla Viewing Access Level.

[screenshot]

- **Levels** - Allows to choose the *User Access* level which will be evaluated.
- **Mode** - Allows to choose if the User should have access to all (AND) levels or any (OR) of them.
- **User** - Allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).

## User Group

This rule evaluates if the User is part of the selected Joomla User Groups.

[screenshot]

- **Levels** - Allows to choose the *User Group* which will be evaluated.
- **Mode** - Allows to choose if the User should be parto of all (AND) groups or any (OR) of them.
- **User** - Allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).

## Date

This rule evaluates if current date/time matches the specified range. Take in consideration that is used the date/time of your server, not of the visitors system.

[screenshot]

- **Start** - Allows to choose the start date/time.
- **End** - Allows to choose the start date/time.

## Searchbot

This rule evaluates the searchbot being used, if it's the case.

[screenshot]

- **Bots** - Allows to set the Bots list using *|* as a separator. 

## Element value

This rule evaluates the specified Element value. It will check the Element value being stored in the DB, not the one being displayed.

[screenshot]

- **Element** - Allows to choose the element which value will be evaluated.
- **Value** - Allows to set the element value to be evaluated.

## Content Plugin

This rule uses the Joomla Content plugins to make an evaluation. It should be used when there is no specific rule but there is an apropiate Content Plugin.

[screenshot]

- **Expression** - Allows to write one or several Content Plugin Expressions with a dummy content. If the Expression returns the dummy content the rule will be considered positive. If more than one Expression ANY logic will be used by default. Eg. {lang es}DUMMY{/lang}

## ZOOcart Items

This rule evaluates if the User has purchased the specified ZOOcart Items.

[screenshot]

- **Include current** - Allows to include the current Item to the selection. The Item where the Element is being rendered will be used as part of the selection.
- **Items** - Allows to create the list of Items for the evaluation.
- **Mode** - Allows to choose if the User should have purchased all (AND) Items or any (OR) of them.
- **User** - Allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).