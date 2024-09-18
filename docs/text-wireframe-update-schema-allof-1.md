# Untitled undefined type in TextWireframeUpdate Schema

```txt
session-replay/mobile/text-wireframe-update-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [text-wireframe-update-schema.json\*](../out/session-replay/mobile/text-wireframe-update-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :---------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                 | `string` | Required | cannot be null | [TextWireframeUpdate](text-wireframe-update-schema-allof-1-properties-type.md "session-replay/mobile/text-wireframe-update-schema.json#/allOf/1/properties/type") |
| [text](#text)                 | `string` | Optional | cannot be null | [TextWireframeUpdate](text-wireframe-update-schema-allof-1-properties-text.md "session-replay/mobile/text-wireframe-update-schema.json#/allOf/1/properties/text") |
| [textStyle](#textstyle)       | Merged   | Optional | cannot be null | [TextWireframeUpdate](text-style-schema.md "session-replay/mobile/text-style-schema.json#/allOf/1/properties/textStyle")                                          |
| [textPosition](#textposition) | Merged   | Optional | cannot be null | [TextWireframeUpdate](text-position-schema.md "session-replay/mobile/text-position-schema.json#/allOf/1/properties/textPosition")                                 |

## type

The type of the wireframe.

`type`

* is required

* Type: `string`

* cannot be null

* defined in: [TextWireframeUpdate](text-wireframe-update-schema-allof-1-properties-type.md "session-replay/mobile/text-wireframe-update-schema.json#/allOf/1/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"text"
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## text

The text value of the wireframe.

`text`

* is optional

* Type: `string`

* cannot be null

* defined in: [TextWireframeUpdate](text-wireframe-update-schema-allof-1-properties-text.md "session-replay/mobile/text-wireframe-update-schema.json#/allOf/1/properties/text")

### text Type

`string`

## textStyle

Schema of all properties of a TextStyle.

`textStyle`

* is optional

* Type: `object` ([TextStyle](text-style-schema.md))

* cannot be null

* defined in: [TextWireframeUpdate](text-style-schema.md "session-replay/mobile/text-style-schema.json#/allOf/1/properties/textStyle")

### textStyle Type

`object` ([TextStyle](text-style-schema.md))

all of

* [Untitled undefined type in TextStyle](text-style-schema-allof-0.md "check type definition")

## textPosition

Schema of all properties of a TextPosition.

`textPosition`

* is optional

* Type: `object` ([TextPosition](text-position-schema.md))

* cannot be null

* defined in: [TextWireframeUpdate](text-position-schema.md "session-replay/mobile/text-position-schema.json#/allOf/1/properties/textPosition")

### textPosition Type

`object` ([TextPosition](text-position-schema.md))

all of

* [Untitled undefined type in TextPosition](text-position-schema-allof-0.md "check type definition")
