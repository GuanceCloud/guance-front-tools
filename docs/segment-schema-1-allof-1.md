# Untitled undefined type in MobileSegment Schema

```txt
session-replay/mobile/segment-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [segment-schema.json\*](../out/session-replay/mobile/segment-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property            | Type    | Required | Nullable       | Defined by                                                                                                                              |
| :------------------ | :------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [records](#records) | `array` | Required | cannot be null | [MobileSegment](segment-schema-1-allof-1-properties-records.md "session-replay/mobile/segment-schema.json#/allOf/1/properties/records") |

## records

The records contained by this Segment.

`records`

* is required

* Type: `object[]` ([MobileRecord](record-schema-1.md))

* cannot be null

* defined in: [MobileSegment](segment-schema-1-allof-1-properties-records.md "session-replay/mobile/segment-schema.json#/allOf/1/properties/records")

### records Type

`object[]` ([MobileRecord](record-schema-1.md))

### records Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
