# Untitled undefined type in ShapeStyle Schema

```txt
session-replay/mobile/shape-style-schema.json#/allOf/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [shape-style-schema.json\*](../out/session-replay/mobile/shape-style-schema.json "open original schema") |

## 0 Type

unknown

# 0 Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                                 |
| :---------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [backgroundColor](#backgroundcolor) | `string` | Optional | cannot be null | [ShapeStyle](shape-style-schema-allof-0-properties-backgroundcolor.md "session-replay/mobile/shape-style-schema.json#/allOf/0/properties/backgroundColor") |
| [opacity](#opacity)                 | `number` | Optional | cannot be null | [ShapeStyle](shape-style-schema-allof-0-properties-opacity.md "session-replay/mobile/shape-style-schema.json#/allOf/0/properties/opacity")                 |
| [cornerRadius](#cornerradius)       | `number` | Optional | cannot be null | [ShapeStyle](shape-style-schema-allof-0-properties-cornerradius.md "session-replay/mobile/shape-style-schema.json#/allOf/0/properties/cornerRadius")       |

## backgroundColor

The background color for this wireframe as a String hexadecimal. Follows the #RRGGBBAA color format with the alpha value as optional. The default value is #FFFFFF00.

`backgroundColor`

* is optional

* Type: `string`

* cannot be null

* defined in: [ShapeStyle](shape-style-schema-allof-0-properties-backgroundcolor.md "session-replay/mobile/shape-style-schema.json#/allOf/0/properties/backgroundColor")

### backgroundColor Type

`string`

### backgroundColor Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^#[A-Fa-f0-9]{6}([A-Fa-f0-9]{2})?$
```

[try pattern](https://regexr.com/?expression=%5E%23%5BA-Fa-f0-9%5D%7B6%7D\(%5BA-Fa-f0-9%5D%7B2%7D\)%3F%24 "try regular expression with regexr.com")

### backgroundColor Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## opacity

The opacity of this wireframe. Takes values from 0 to 1, default value is 1.

`opacity`

* is optional

* Type: `number`

* cannot be null

* defined in: [ShapeStyle](shape-style-schema-allof-0-properties-opacity.md "session-replay/mobile/shape-style-schema.json#/allOf/0/properties/opacity")

### opacity Type

`number`

### opacity Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## cornerRadius

The corner(border) radius of this wireframe in pixels. The default value is 0.

`cornerRadius`

* is optional

* Type: `number`

* cannot be null

* defined in: [ShapeStyle](shape-style-schema-allof-0-properties-cornerradius.md "session-replay/mobile/shape-style-schema.json#/allOf/0/properties/cornerRadius")

### cornerRadius Type

`number`

### cornerRadius Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
