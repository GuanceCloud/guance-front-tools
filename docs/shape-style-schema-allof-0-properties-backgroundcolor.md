# Untitled string in ShapeStyle Schema

```txt
session-replay/mobile/shape-style-schema.json#/allOf/0/properties/backgroundColor
```

The background color for this wireframe as a String hexadecimal. Follows the #RRGGBBAA color format with the alpha value as optional. The default value is #FFFFFF00.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | Read only           | [shape-style-schema.json\*](../out/session-replay/mobile/shape-style-schema.json "open original schema") |

## backgroundColor Type

`string`

## backgroundColor Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^#[A-Fa-f0-9]{6}([A-Fa-f0-9]{2})?$
```

[try pattern](https://regexr.com/?expression=%5E%23%5BA-Fa-f0-9%5D%7B6%7D\(%5BA-Fa-f0-9%5D%7B2%7D\)%3F%24 "try regular expression with regexr.com")
