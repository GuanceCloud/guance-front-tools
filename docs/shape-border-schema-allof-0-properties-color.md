# Untitled string in ShapeBorder Schema

```txt
session-replay/mobile/shape-border-schema.json#/allOf/0/properties/color
```

The border color as a String hexadecimal. Follows the #RRGGBBAA color format with the alpha value as optional.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | Read only           | [shape-border-schema.json\*](../out/session-replay/mobile/shape-border-schema.json "open original schema") |

## color Type

`string`

## color Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^#[A-Fa-f0-9]{6}([A-Fa-f0-9]{2})?$
```

[try pattern](https://regexr.com/?expression=%5E%23%5BA-Fa-f0-9%5D%7B6%7D\(%5BA-Fa-f0-9%5D%7B2%7D\)%3F%24 "try regular expression with regexr.com")
