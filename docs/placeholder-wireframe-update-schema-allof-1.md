# Untitled undefined type in PlaceholderWireframeUpdate Schema

```txt
session-replay/mobile/placeholder-wireframe-update-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [placeholder-wireframe-update-schema.json\*](../out/session-replay/mobile/placeholder-wireframe-update-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                               |
| :-------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | `string` | Required | cannot be null | [PlaceholderWireframeUpdate](placeholder-wireframe-update-schema-allof-1-properties-type.md "session-replay/mobile/placeholder-wireframe-update-schema.json#/allOf/1/properties/type")   |
| [label](#label) | `string` | Optional | cannot be null | [PlaceholderWireframeUpdate](placeholder-wireframe-update-schema-allof-1-properties-label.md "session-replay/mobile/placeholder-wireframe-update-schema.json#/allOf/1/properties/label") |

## type

The type of the wireframe.

`type`

* is required

* Type: `string`

* cannot be null

* defined in: [PlaceholderWireframeUpdate](placeholder-wireframe-update-schema-allof-1-properties-type.md "session-replay/mobile/placeholder-wireframe-update-schema.json#/allOf/1/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"placeholder"
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## label

Label of the placeholder

`label`

* is optional

* Type: `string`

* cannot be null

* defined in: [PlaceholderWireframeUpdate](placeholder-wireframe-update-schema-allof-1-properties-label.md "session-replay/mobile/placeholder-wireframe-update-schema.json#/allOf/1/properties/label")

### label Type

`string`
