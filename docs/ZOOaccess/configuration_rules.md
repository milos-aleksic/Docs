# Rules

ZOOaccess has a preset rules for the access evaluation. By default the rules are ignored and the access will be no evaluated. In order to start the rule evaluation, it's state must be changed. Each rule has 3 states:

- **Selection** - The rule will be considered a match only when the following selections ARE met.
- **Exclude Selection** - The rule will be considered a match only when the following selections ARE NOT met.
- **Ignore** - The rule will not be evaluated.

## User Access rule

This rule evaluates if the User has the appropiate Joomla Viewing Access Level.

[screenshot]

- **Levels** - Allows to choose the *User Access* level which will be evaluated. Multiple selection is possible.
- **Mode** - Allows to choose if the User should have access to all (AND) levels or any (OR) of them.
- **User** - Allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).

## User Group rule

This rule evaluates if the User is part of the selected Joomla User Groups.

[screenshot]

- **Levels** - Allows to choose the *User Group* which will be evaluated. Multiple selection is possible.
- **Mode** - Allows to choose if the User should be parto of all (AND) groups or any (OR) of them.
- **User** - Allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).

## Date rule

This rule evaluates if current date/time matches the specified range. Take in consideration that is used the date/time of your server, not of the visitors system.

[screenshot]

- **Start** - Allows to choose the start date/time.
- **End** - Allows to choose the start date/time.

## Searchbot rule

This rule evaluates the searchbot being used, if it's the case.

[screenshot]

- **Bots** - Allows to set the Bots list using *|* as a separator. 

## Element value rule

This rule evaluates the specified Element value. It will check the Element value being stored in the DB, not the one being displayed.

[screenshot]

- **Element** - Allows to choose the element which value will be evaluated.
- **Value** - Allows to set the element value to be evaluated.

## Content Plugin rule

This rule uses the Joomla Content plugins to make an evaluation. It should be used when there is no specific rule but there is an apropiate Content Plugin.

[screenshot]

- **Expression** - Allows to write one or several Content Plugin Expressions with a dummy content. If the Expression returns the dummy content the rule will be considered positive. If more than one Expression ANY logic will be used by default. Eg. {lang es}DUMMY{/lang}

## ZOOcart Items rule

This rule evaluates if the User has purchased the specified ZOOcart Items.

[screenshot]

- **Include current** - Allows to include the current Item to the selection. The Item where the Element is being rendered will be used as part of the selection.
- **Items** - Allows to create the list of Items for the evaluation.
- **Mode** - Allows to choose if the User should have purchased all (AND) Items or any (OR) of them.
- **User** - Allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).