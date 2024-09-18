# Untitled string in PointerInteraction Schema

```txt
session-replay/common/pointer-interaction-schema.json#/properties/pointerEventType
```

Schema of an PointerEventType

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | Read only           | [pointer-interaction-schema.json\*](../out/session-replay/common/pointer-interaction-schema.json "open original schema") |

## pointerEventType Type

`string`

## pointerEventType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"down"` |             |
| `"up"`   |             |
| `"move"` |             |
