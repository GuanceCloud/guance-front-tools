# Untitled undefined type in MouseInteraction Schema

```txt
session-replay/browser/mouse-interaction-schema.json#/oneOf/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [mouse-interaction-schema.json\*](../out/session-replay/browser/mouse-interaction-schema.json "open original schema") |

## 0 Type

unknown

# 0 Properties

| Property      | Type      | Required | Nullable       | Defined by                                                                                                                                              |
| :------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [type](#type) | `integer` | Required | cannot be null | [MouseInteraction](mouse-interaction-schema-oneof-0-properties-type.md "session-replay/browser/mouse-interaction-schema.json#/oneOf/0/properties/type") |
| [id](#id)     | `integer` | Required | cannot be null | [MouseInteraction](mouse-interaction-schema-oneof-0-properties-id.md "session-replay/browser/mouse-interaction-schema.json#/oneOf/0/properties/id")     |
| [x](#x)       | `number`  | Required | cannot be null | [MouseInteraction](mouse-interaction-schema-oneof-0-properties-x.md "session-replay/browser/mouse-interaction-schema.json#/oneOf/0/properties/x")       |
| [y](#y)       | `number`  | Required | cannot be null | [MouseInteraction](mouse-interaction-schema-oneof-0-properties-y.md "session-replay/browser/mouse-interaction-schema.json#/oneOf/0/properties/y")       |

## type

The type of MouseInteraction: 0=mouseup, 1=mousedown, 2=click, 3=contextmenu, 4=dblclick, 7=touchstart, 9=touchend

`type`

* is required

* Type: `integer`

* cannot be null

* defined in: [MouseInteraction](mouse-interaction-schema-oneof-0-properties-type.md "session-replay/browser/mouse-interaction-schema.json#/oneOf/0/properties/type")

### type Type

`integer`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `0`   |             |
| `1`   |             |
| `2`   |             |
| `3`   |             |
| `4`   |             |
| `7`   |             |
| `9`   |             |

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## id

Id for the target node for this MouseInteraction.

`id`

* is required

* Type: `integer`

* cannot be null

* defined in: [MouseInteraction](mouse-interaction-schema-oneof-0-properties-id.md "session-replay/browser/mouse-interaction-schema.json#/oneOf/0/properties/id")

### id Type

`integer`

## x

X-axis coordinate for this MouseInteraction.

`x`

* is required

* Type: `number`

* cannot be null

* defined in: [MouseInteraction](mouse-interaction-schema-oneof-0-properties-x.md "session-replay/browser/mouse-interaction-schema.json#/oneOf/0/properties/x")

### x Type

`number`

## y

Y-axis coordinate for this MouseInteraction.

`y`

* is required

* Type: `number`

* cannot be null

* defined in: [MouseInteraction](mouse-interaction-schema-oneof-0-properties-y.md "session-replay/browser/mouse-interaction-schema.json#/oneOf/0/properties/y")

### y Type

`number`
