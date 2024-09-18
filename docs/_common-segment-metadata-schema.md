# CommonSegmentMetadataSchema Schema

```txt
session-replay/common/_common-segment-metadata-schema.json
```

Schema of common properties for a Segment Metadata type.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [\_common-segment-metadata-schema.json](../out/session-replay/common/_common-segment-metadata-schema.json "open original schema") |

## CommonSegmentMetadataSchema Type

`object` ([CommonSegmentMetadataSchema](_common-segment-metadata-schema.md))

# CommonSegmentMetadataSchema Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                |
| :---------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [start](#start)                           | `integer` | Required | cannot be null | [CommonSegmentMetadataSchema](_common-segment-metadata-schema-properties-start.md "session-replay/common/_common-segment-metadata-schema.json#/properties/start")                         |
| [end](#end)                               | `integer` | Required | cannot be null | [CommonSegmentMetadataSchema](_common-segment-metadata-schema-properties-end.md "session-replay/common/_common-segment-metadata-schema.json#/properties/end")                             |
| [records\_count](#records_count)          | `integer` | Required | cannot be null | [CommonSegmentMetadataSchema](_common-segment-metadata-schema-properties-records_count.md "session-replay/common/_common-segment-metadata-schema.json#/properties/records_count")         |
| [index\_in\_view](#index_in_view)         | `integer` | Optional | cannot be null | [CommonSegmentMetadataSchema](_common-segment-metadata-schema-properties-index_in_view.md "session-replay/common/_common-segment-metadata-schema.json#/properties/index_in_view")         |
| [has\_full\_snapshot](#has_full_snapshot) | `boolean` | Optional | cannot be null | [CommonSegmentMetadataSchema](_common-segment-metadata-schema-properties-has_full_snapshot.md "session-replay/common/_common-segment-metadata-schema.json#/properties/has_full_snapshot") |

## start

The start UTC timestamp in milliseconds corresponding to the first record in the Segment data. Each timestamp is computed as the UTC interval since 00:00:00.000 01.01.1970.

`start`

* is required

* Type: `integer`

* cannot be null

* defined in: [CommonSegmentMetadataSchema](_common-segment-metadata-schema-properties-start.md "session-replay/common/_common-segment-metadata-schema.json#/properties/start")

### start Type

`integer`

## end

The end UTC timestamp in milliseconds corresponding to the last record in the Segment data. Each timestamp is computed as the UTC interval since 00:00:00.000 01.01.1970.

`end`

* is required

* Type: `integer`

* cannot be null

* defined in: [CommonSegmentMetadataSchema](_common-segment-metadata-schema-properties-end.md "session-replay/common/_common-segment-metadata-schema.json#/properties/end")

### end Type

`integer`

## records\_count

The number of records in this Segment.

`records_count`

* is required

* Type: `integer`

* cannot be null

* defined in: [CommonSegmentMetadataSchema](_common-segment-metadata-schema-properties-records_count.md "session-replay/common/_common-segment-metadata-schema.json#/properties/records_count")

### records\_count Type

`integer`

## index\_in\_view

The index of this Segment in the segments list that was recorded for this view ID. Starts from 0.

`index_in_view`

* is optional

* Type: `integer`

* cannot be null

* defined in: [CommonSegmentMetadataSchema](_common-segment-metadata-schema-properties-index_in_view.md "session-replay/common/_common-segment-metadata-schema.json#/properties/index_in_view")

### index\_in\_view Type

`integer`

## has\_full\_snapshot

Whether this Segment contains a full snapshot record or not.

`has_full_snapshot`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [CommonSegmentMetadataSchema](_common-segment-metadata-schema-properties-has_full_snapshot.md "session-replay/common/_common-segment-metadata-schema.json#/properties/has_full_snapshot")

### has\_full\_snapshot Type

`boolean`
