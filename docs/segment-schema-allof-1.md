# Untitled undefined type in BrowserSegment Schema

```txt
session-replay/browser/segment-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [segment-schema.json\*](../out/session-replay/browser/segment-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property            | Type    | Required | Nullable       | Defined by                                                                                                                              |
| :------------------ | :------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [records](#records) | `array` | Required | cannot be null | [BrowserSegment](segment-schema-allof-1-properties-records.md "session-replay/browser/segment-schema.json#/allOf/1/properties/records") |

## records

The records contained by this Segment.

`records`

* is required

* Type: `object[]` ([BrowserRecord](record-schema.md))

* cannot be null

* defined in: [BrowserSegment](segment-schema-allof-1-properties-records.md "session-replay/browser/segment-schema.json#/allOf/1/properties/records")

### records Type

`object[]` ([BrowserRecord](record-schema.md))

### records Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
