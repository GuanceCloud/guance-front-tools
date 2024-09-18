# Untitled undefined type in ShapeBorder Schema

```txt
session-replay/mobile/shape-border-schema.json#/allOf/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [shape-border-schema.json\*](../out/session-replay/mobile/shape-border-schema.json "open original schema") |

## 0 Type

unknown

# 0 Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                                |
| :-------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| [color](#color) | `string`  | Required | cannot be null | [ShapeBorder](shape-border-schema-allof-0-properties-color.md "session-replay/mobile/shape-border-schema.json#/allOf/0/properties/color") |
| [width](#width) | `integer` | Required | cannot be null | [ShapeBorder](shape-border-schema-allof-0-properties-width.md "session-replay/mobile/shape-border-schema.json#/allOf/0/properties/width") |

## color

The border color as a String hexadecimal. Follows the #RRGGBBAA color format with the alpha value as optional.

`color`

* is required

* Type: `string`

* cannot be null

* defined in: [ShapeBorder](shape-border-schema-allof-0-properties-color.md "session-replay/mobile/shape-border-schema.json#/allOf/0/properties/color")

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

## width

The width of the border in pixels.

`width`

* is required

* Type: `integer`

* cannot be null

* defined in: [ShapeBorder](shape-border-schema-allof-0-properties-width.md "session-replay/mobile/shape-border-schema.json#/allOf/0/properties/width")

### width Type

`integer`

### width Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
