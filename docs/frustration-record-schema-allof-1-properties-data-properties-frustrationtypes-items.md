# Untitled string in FrustrationRecord Schema

```txt
session-replay/browser/frustration-record-schema.json#/allOf/1/properties/data/properties/frustrationTypes/items
```

The type of frustration signal.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | Read only           | [frustration-record-schema.json\*](../out/session-replay/browser/frustration-record-schema.json "open original schema") |

## items Type

`string`

## items Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"rage_click"`  |             |
| `"error_click"` |             |
| `"dead_click"`  |             |
