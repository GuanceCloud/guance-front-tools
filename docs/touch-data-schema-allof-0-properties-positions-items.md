# Untitled object in TouchData Schema

```txt
session-replay/mobile/touch-data-schema.json#/allOf/0/properties/positions/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [touch-data-schema.json\*](../out/session-replay/mobile/touch-data-schema.json "open original schema") |

## items Type

`object` ([Details](touch-data-schema-allof-0-properties-positions-items.md))

# items Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                        |
| :---------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id)               | `integer` | Required | cannot be null | [TouchData](touch-data-schema-allof-0-properties-positions-items-properties-id.md "session-replay/mobile/touch-data-schema.json#/allOf/0/properties/positions/items/properties/id")               |
| [x](#x)                 | `integer` | Required | cannot be null | [TouchData](touch-data-schema-allof-0-properties-positions-items-properties-x.md "session-replay/mobile/touch-data-schema.json#/allOf/0/properties/positions/items/properties/x")                 |
| [y](#y)                 | `integer` | Required | cannot be null | [TouchData](touch-data-schema-allof-0-properties-positions-items-properties-y.md "session-replay/mobile/touch-data-schema.json#/allOf/0/properties/positions/items/properties/y")                 |
| [timestamp](#timestamp) | `integer` | Required | cannot be null | [TouchData](touch-data-schema-allof-0-properties-positions-items-properties-timestamp.md "session-replay/mobile/touch-data-schema.json#/allOf/0/properties/positions/items/properties/timestamp") |

## id

The touch id of the touch event this position corresponds to. In mobile it is possible to have multiple touch events (fingers touching the screen) happening at the same time.

`id`

* is required

* Type: `integer`

* cannot be null

* defined in: [TouchData](touch-data-schema-allof-0-properties-positions-items-properties-id.md "session-replay/mobile/touch-data-schema.json#/allOf/0/properties/positions/items/properties/id")

### id Type

`integer`

### id Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## x

The x coordinate value of the position.

`x`

* is required

* Type: `integer`

* cannot be null

* defined in: [TouchData](touch-data-schema-allof-0-properties-positions-items-properties-x.md "session-replay/mobile/touch-data-schema.json#/allOf/0/properties/positions/items/properties/x")

### x Type

`integer`

### x Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## y

The y coordinate value of the position.

`y`

* is required

* Type: `integer`

* cannot be null

* defined in: [TouchData](touch-data-schema-allof-0-properties-positions-items-properties-y.md "session-replay/mobile/touch-data-schema.json#/allOf/0/properties/positions/items/properties/y")

### y Type

`integer`

### y Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## timestamp

The UTC timestamp in milliseconds corresponding to the moment the position change was recorded. Each timestamp is computed as the UTC interval since 00:00:00.000 01.01.1970.

`timestamp`

* is required

* Type: `integer`

* cannot be null

* defined in: [TouchData](touch-data-schema-allof-0-properties-positions-items-properties-timestamp.md "session-replay/mobile/touch-data-schema.json#/allOf/0/properties/positions/items/properties/timestamp")

### timestamp Type

`integer`

### timestamp Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
