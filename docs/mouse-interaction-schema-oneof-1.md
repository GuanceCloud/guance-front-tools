# Untitled undefined type in MouseInteraction Schema

```txt
session-replay/browser/mouse-interaction-schema.json#/oneOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [mouse-interaction-schema.json\*](../out/session-replay/browser/mouse-interaction-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property      | Type      | Required | Nullable       | Defined by                                                                                                                                              |
| :------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [type](#type) | `integer` | Required | cannot be null | [MouseInteraction](mouse-interaction-schema-oneof-1-properties-type.md "session-replay/browser/mouse-interaction-schema.json#/oneOf/1/properties/type") |
| [id](#id)     | `integer` | Required | cannot be null | [MouseInteraction](mouse-interaction-schema-oneof-1-properties-id.md "session-replay/browser/mouse-interaction-schema.json#/oneOf/1/properties/id")     |

## type

The type of MouseInteraction: 5=focus, 6=blur

`type`

* is required

* Type: `integer`

* cannot be null

* defined in: [MouseInteraction](mouse-interaction-schema-oneof-1-properties-type.md "session-replay/browser/mouse-interaction-schema.json#/oneOf/1/properties/type")

### type Type

`integer`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `5`   |             |
| `6`   |             |

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## id

Id for the target node for this MouseInteraction.

`id`

* is required

* Type: `integer`

* cannot be null

* defined in: [MouseInteraction](mouse-interaction-schema-oneof-1-properties-id.md "session-replay/browser/mouse-interaction-schema.json#/oneOf/1/properties/id")

### id Type

`integer`
