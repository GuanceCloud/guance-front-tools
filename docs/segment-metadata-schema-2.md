# SegmentMetadata Schema

```txt
session-replay/segment-metadata-schema.json
```

Schema of a Session Replay SegmentMetadata.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [segment-metadata-schema.json](../out/session-replay/segment-metadata-schema.json "open original schema") |

## SegmentMetadata Type

merged type ([SegmentMetadata](segment-metadata-schema-2.md))

one (and only one) of

* all of

  * [SegmentContext](segment-context-schema.md "check type definition")

  * [CommonSegmentMetadataSchema](_common-segment-metadata-schema.md "check type definition")

  * [Untitled undefined type in BrowserSegmentMetadata](segment-metadata-schema-allof-2.md "check type definition")

* all of

  * [SegmentContext](segment-context-schema.md "check type definition")

  * [CommonSegmentMetadataSchema](_common-segment-metadata-schema.md "check type definition")

  * [Untitled undefined type in MobileSegmentMetadata](segment-metadata-schema-1-allof-2.md "check type definition")
