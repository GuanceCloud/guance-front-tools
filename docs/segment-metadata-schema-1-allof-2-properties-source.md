# Untitled string in MobileSegmentMetadata Schema

```txt
session-replay/mobile/segment-metadata-schema.json#/allOf/2/properties/source
```

The source of this record

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [segment-metadata-schema.json\*](../out/session-replay/mobile/segment-metadata-schema.json "open original schema") |

## source Type

`string`

## source Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"android"`      |             |
| `"ios"`          |             |
| `"flutter"`      |             |
| `"react-native"` |             |
