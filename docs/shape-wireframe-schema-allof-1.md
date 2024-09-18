# Untitled undefined type in ShapeWireframe Schema

```txt
session-replay/mobile/shape-wireframe-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [shape-wireframe-schema.json\*](../out/session-replay/mobile/shape-wireframe-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type) | `string` | Required | cannot be null | [ShapeWireframe](shape-wireframe-schema-allof-1-properties-type.md "session-replay/mobile/shape-wireframe-schema.json#/allOf/1/properties/type") |

## type

The type of the wireframe.

`type`

* is required

* Type: `string`

* cannot be null

* defined in: [ShapeWireframe](shape-wireframe-schema-allof-1-properties-type.md "session-replay/mobile/shape-wireframe-schema.json#/allOf/1/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"shape"
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
