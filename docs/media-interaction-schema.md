# MediaInteraction Schema

```txt
session-replay/browser/media-interaction-schema.json
```

Browser-specific. Schema of a MediaInteraction.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [media-interaction-schema.json](../out/session-replay/browser/media-interaction-schema.json "open original schema") |

## MediaInteraction Type

`object` ([MediaInteraction](media-interaction-schema.md))

# MediaInteraction Properties

| Property      | Type      | Required | Nullable       | Defined by                                                                                                                              |
| :------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)     | `integer` | Required | cannot be null | [MediaInteraction](media-interaction-schema-properties-id.md "session-replay/browser/media-interaction-schema.json#/properties/id")     |
| [type](#type) | `integer` | Required | cannot be null | [MediaInteraction](media-interaction-schema-properties-type.md "session-replay/browser/media-interaction-schema.json#/properties/type") |

## id

Id for the target node for this MediaInteraction.

`id`

* is required

* Type: `integer`

* cannot be null

* defined in: [MediaInteraction](media-interaction-schema-properties-id.md "session-replay/browser/media-interaction-schema.json#/properties/id")

### id Type

`integer`

## type

The type of MediaInteraction.

`type`

* is required

* Type: `integer`

* cannot be null

* defined in: [MediaInteraction](media-interaction-schema-properties-type.md "session-replay/browser/media-interaction-schema.json#/properties/type")

### type Type

`integer`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `0`   |             |
| `1`   |             |

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
