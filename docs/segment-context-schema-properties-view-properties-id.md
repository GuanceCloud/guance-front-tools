# Untitled string in SegmentContext Schema

```txt
session-replay/common/segment-context-schema.json#/properties/view/properties/id
```

UUID of the view

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [segment-context-schema.json\*](../out/session-replay/common/segment-context-schema.json "open original schema") |

## id Type

`string`

## id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-f0-9%5D%7B8%7D-%5Ba-f0-9%5D%7B4%7D-%5Ba-f0-9%5D%7B4%7D-%5Ba-f0-9%5D%7B4%7D-%5Ba-f0-9%5D%7B12%7D%24 "try regular expression with regexr.com")
