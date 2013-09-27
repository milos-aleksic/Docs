# Rules

ZOOaccess has a list of rules for the access evaluation. By default the rules are ignored and the access will be no evaluated. In order to start the rule evaluation, it's state must be changed. Each rule has 3 states:

- **Selection** - The rule will be considered a match only when the following selections ARE met.
- **Exclude Selection** - The rule will be considered a match only when the following selections ARE NOT met.
- **Ignore** - The rule will not be evaluated.

## User Access rule

This rule evaluates if the User has the appropiate Joomla Viewing Access Level.

![User Access](http://joolanders.github.io/Docs/docs/ZOOaccess/images/rule_useraccess.png)

- **Levels** - allows to choose the *User Access* level which will be evaluated. Multiple selection is possible.
- **Mode** - allows to choose if the User should have access to all (AND) levels or any (OR) of them.
- **User** - allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).

## User Group rule

This rule evaluates if the User is part of the selected Joomla User Groups.

![User Group](http://joolanders.github.io/Docs/docs/ZOOaccess/images/rule_usergroup.png)

- **Levels** - allows to choose the *User Group* which will be evaluated. Multiple selection is possible.
- **Mode** - allows to choose if the User should be parto of all (AND) groups or any (OR) of them.
- **User** - allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).

## Date rule

This rule evaluates if current date/time matches the specified range. Take in consideration that is used the date/time of your server, not of the visitors system.

![Date](http://joolanders.github.io/Docs/docs/ZOOaccess/images/rule_date.png)

- **Start** - allows to choose the start date/time.
- **End** - allows to choose the start date/time.

## Searchbot rule

This rule evaluates the searchbot being used, if it's the case.

![Searchbot](http://joolanders.github.io/Docs/docs/ZOOaccess/images/rule_searchbot.png)

- **Bots** - allows to set the Bots list using *|* as a separator. 

## Element value rule

This rule evaluates the specified Element value. It will check the Element value being stored in the DB, not the one being displayed.

![Element Value](http://joolanders.github.io/Docs/docs/ZOOaccess/images/rule_elementvalue.png)

- **Element** - allows to choose the element which value will be evaluated.
- **Value** - allows to set the element value to be evaluated.

## Content Plugin rule

This rule uses the Joomla Content plugins to make an evaluation. It should be used when there is no specific rule but there is an apropiate Content Plugin.

![Content Plugin](http://joolanders.github.io/Docs/docs/ZOOaccess/images/rule_contentplugin.png)

- **Expression** - allows to write one or several Content Plugin Expressions with a dummy content. If the Expression returns the dummy content the rule will be considered positive. If more than one Expression ANY logic will be used by default. Eg. {lang es}DUMMY{/lang}

## Item Author rule

This rule evaluates if the User is the Item Author or if it has modified it.

![Item Author](http://joolanders.github.io/Docs/docs/ZOOaccess/images/rule_itemauthor.png)

- **User** - allows to choose the type of evaluation that will be performed.

## ZOOcart Items rule

This rule evaluates if the User has purchased the specified ZOOcart Items.

![ZOOcart Items](http://joolanders.github.io/Docs/docs/ZOOaccess/images/rule_zoocartitems.png)

- **Include current** - allows to include the current Item to the selection. The Item where the Element is being rendered will be used as part of the selection.
- **Items** - allows to create the list of Items for the evaluation.
- **Mode** - allows to choose if the User should have purchased all (AND) Items or any (OR) of them.
- **User** - allows to choose who will be the evaluated user, the current viewer (User) or the Item's Author (Author).