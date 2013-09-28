# Aksubs Level Sync element

The *Aksubs Level Sync* is used for the ZOOaksubs Level sync feature. For more information checkout the related [doc](ZOOaksubs/configuration_level_syncing.md). 

## Type configuration

### Basic Parameters

<% {
	"type":"snippet", "url":"snippets/element_config_basic.md"
} %>

### Specific Parameters

- **Default** - Allows to choose the default Element sync state.

## Position Assignment

### Basic Parameters

<% {
	"type":"snippet", "url":"snippets/element_position_basic.md"
} %>

### Layout Parameters

*Layout Parameters* shows the available layouts for the element.

- **Main Layout** - Allows to specify main layout.

## Layouts

There are two rendering layouts:

- **Default** - will render a checkout button for the current synced Level.
- **Level** - will render Level related information such as Duration or Price.

If your project need specific rendering feature you can override or [create your own](GettingStarted/custom_layout.md) layout.
