# Untitled undefined type in MobileSegmentMetadata Schema

```txt
session-replay/mobile/segment-metadata-schema.json#/allOf/2
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [segment-metadata-schema.json\*](../out/session-replay/mobile/segment-metadata-schema.json "open original schema") |

## 2 Type

unknown

# 2 Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                      |
| :---------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [source](#source) | `string` | Required | cannot be null | [MobileSegmentMetadata](segment-metadata-schema-1-allof-2-properties-source.md "session-replay/mobile/segment-metadata-schema.json#/allOf/2/properties/source") |

## source

The source of this record

`source`

* is required

* Type: `string`

* cannot be null

* defined in: [MobileSegmentMetadata](segment-metadata-schema-1-allof-2-properties-source.md "session-replay/mobile/segment-metadata-schema.json#/allOf/2/properties/source")

### source Type

`string`

### source Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"android"`      |             |
| `"ios"`          |             |
| `"flutter"`      |             |
| `"react-native"` |             |
