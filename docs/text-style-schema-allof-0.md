# Untitled undefined type in TextStyle Schema

```txt
session-replay/mobile/text-style-schema.json#/allOf/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | Read only           | [text-style-schema.json\*](../out/session-replay/mobile/text-style-schema.json "open original schema") |

## 0 Type

unknown

# 0 Properties

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                            |
| :---------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| [family](#family) | `string`  | Required | cannot be null | [TextStyle](text-style-schema-allof-0-properties-family.md "session-replay/mobile/text-style-schema.json#/allOf/0/properties/family") |
| [size](#size)     | `integer` | Required | cannot be null | [TextStyle](text-style-schema-allof-0-properties-size.md "session-replay/mobile/text-style-schema.json#/allOf/0/properties/size")     |
| [color](#color)   | `string`  | Required | cannot be null | [TextStyle](text-style-schema-allof-0-properties-color.md "session-replay/mobile/text-style-schema.json#/allOf/0/properties/color")   |

## family

The preferred font family collection, ordered by preference and formatted as a String list: e.g. Century Gothic, Verdana, sans-serif

`family`

* is required

* Type: `string`

* cannot be null

* defined in: [TextStyle](text-style-schema-allof-0-properties-family.md "session-replay/mobile/text-style-schema.json#/allOf/0/properties/family")

### family Type

`string`

### family Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## size

The font size in pixels.

`size`

* is required

* Type: `integer`

* cannot be null

* defined in: [TextStyle](text-style-schema-allof-0-properties-size.md "session-replay/mobile/text-style-schema.json#/allOf/0/properties/size")

### size Type

`integer`

### size Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## color

The font color as a string hexadecimal. Follows the #RRGGBBAA color format with the alpha value as optional.

`color`

* is required

* Type: `string`

* cannot be null

* defined in: [TextStyle](text-style-schema-allof-0-properties-color.md "session-replay/mobile/text-style-schema.json#/allOf/0/properties/color")

### color Type

`string`

### color Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^#[A-Fa-f0-9]{6}([A-Fa-f0-9]{2})?$
```

[try pattern](https://regexr.com/?expression=%5E%23%5BA-Fa-f0-9%5D%7B6%7D\(%5BA-Fa-f0-9%5D%7B2%7D\)%3F%24 "try regular expression with regexr.com")

### color Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
