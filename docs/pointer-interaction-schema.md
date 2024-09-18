# PointerInteraction Schema

```txt
session-replay/common/pointer-interaction-schema.json
```

Schema of a PointerInteraction.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [pointer-interaction-schema.json](../out/session-replay/common/pointer-interaction-schema.json "open original schema") |

## PointerInteraction Type

`object` ([PointerInteraction](pointer-interaction-schema.md))

# PointerInteraction Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                           |
| :------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [pointerEventType](#pointereventtype) | `string`  | Required | cannot be null | [PointerInteraction](pointer-interaction-schema-properties-pointereventtype.md "session-replay/common/pointer-interaction-schema.json#/properties/pointerEventType") |
| [pointerType](#pointertype)           | `string`  | Required | cannot be null | [PointerInteraction](pointer-interaction-schema-properties-pointertype.md "session-replay/common/pointer-interaction-schema.json#/properties/pointerType")           |
| [pointerId](#pointerid)               | `integer` | Required | cannot be null | [PointerInteraction](pointer-interaction-schema-properties-pointerid.md "session-replay/common/pointer-interaction-schema.json#/properties/pointerId")               |
| [x](#x)                               | `number`  | Required | cannot be null | [PointerInteraction](pointer-interaction-schema-properties-x.md "session-replay/common/pointer-interaction-schema.json#/properties/x")                               |
| [y](#y)                               | `number`  | Required | cannot be null | [PointerInteraction](pointer-interaction-schema-properties-y.md "session-replay/common/pointer-interaction-schema.json#/properties/y")                               |

## pointerEventType

Schema of an PointerEventType

`pointerEventType`

* is required

* Type: `string`

* cannot be null

* defined in: [PointerInteraction](pointer-interaction-schema-properties-pointereventtype.md "session-replay/common/pointer-interaction-schema.json#/properties/pointerEventType")

### pointerEventType Type

`string`

### pointerEventType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"down"` |             |
| `"up"`   |             |
| `"move"` |             |

### pointerEventType Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## pointerType

Schema of an PointerType

`pointerType`

* is required

* Type: `string`

* cannot be null

* defined in: [PointerInteraction](pointer-interaction-schema-properties-pointertype.md "session-replay/common/pointer-interaction-schema.json#/properties/pointerType")

### pointerType Type

`string`

### pointerType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"mouse"` |             |
| `"touch"` |             |
| `"pen"`   |             |

### pointerType Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## pointerId

Id of the pointer of this PointerInteraction.

`pointerId`

* is required

* Type: `integer`

* cannot be null

* defined in: [PointerInteraction](pointer-interaction-schema-properties-pointerid.md "session-replay/common/pointer-interaction-schema.json#/properties/pointerId")

### pointerId Type

`integer`

## x

X-axis coordinate for this PointerInteraction.

`x`

* is required

* Type: `number`

* cannot be null

* defined in: [PointerInteraction](pointer-interaction-schema-properties-x.md "session-replay/common/pointer-interaction-schema.json#/properties/x")

### x Type

`number`

## y

Y-axis coordinate for this PointerInteraction.

`y`

* is required

* Type: `number`

* cannot be null

* defined in: [PointerInteraction](pointer-interaction-schema-properties-y.md "session-replay/common/pointer-interaction-schema.json#/properties/y")

### y Type

`number`
