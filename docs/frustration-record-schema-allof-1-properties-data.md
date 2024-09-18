# Untitled object in FrustrationRecord Schema

```txt
session-replay/browser/frustration-record-schema.json#/allOf/1/properties/data
```

Schema of a Session Replay FrustrationRecord data structure type.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [frustration-record-schema.json\*](../out/session-replay/browser/frustration-record-schema.json "open original schema") |

## data Type

`object` ([Details](frustration-record-schema-allof-1-properties-data.md))

# data Properties

| Property                              | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :------------------------------------ | :------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [frustrationTypes](#frustrationtypes) | `array` | Required | cannot be null | [FrustrationRecord](frustration-record-schema-allof-1-properties-data-properties-frustrationtypes.md "session-replay/browser/frustration-record-schema.json#/allOf/1/properties/data/properties/frustrationTypes") |
| [recordIds](#recordids)               | `array` | Required | cannot be null | [FrustrationRecord](frustration-record-schema-allof-1-properties-data-properties-recordids.md "session-replay/browser/frustration-record-schema.json#/allOf/1/properties/data/properties/recordIds")               |

## frustrationTypes

Collection of frustration signal types.

`frustrationTypes`

* is required

* Type: `string[]`

* cannot be null

* defined in: [FrustrationRecord](frustration-record-schema-allof-1-properties-data-properties-frustrationtypes.md "session-replay/browser/frustration-record-schema.json#/allOf/1/properties/data/properties/frustrationTypes")

### frustrationTypes Type

`string[]`

## recordIds

Collection of frustration signal event IDs.

`recordIds`

* is required

* Type: `integer[]`

* cannot be null

* defined in: [FrustrationRecord](frustration-record-schema-allof-1-properties-data-properties-recordids.md "session-replay/browser/frustration-record-schema.json#/allOf/1/properties/data/properties/recordIds")

### recordIds Type

`integer[]`
