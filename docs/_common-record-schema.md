# CommonRecordSchema Schema

```txt
session-replay/common/_common-record-schema.json
```

Schema of common properties for a Record event type.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [\_common-record-schema.json](../out/session-replay/common/_common-record-schema.json "open original schema") |

## CommonRecordSchema Type

`object` ([CommonRecordSchema](_common-record-schema.md))

# CommonRecordSchema Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                   |
| :---------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| [timestamp](#timestamp) | `integer` | Required | cannot be null | [CommonRecordSchema](_common-record-schema-properties-timestamp.md "session-replay/common/_common-record-schema.json#/properties/timestamp") |

## timestamp

Defines the UTC time in milliseconds when this Record was performed.

`timestamp`

* is required

* Type: `integer`

* cannot be null

* defined in: [CommonRecordSchema](_common-record-schema-properties-timestamp.md "session-replay/common/_common-record-schema.json#/properties/timestamp")

### timestamp Type

`integer`
