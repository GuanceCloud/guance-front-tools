# SegmentMetadata Schema

```txt
session-replay/segment-metadata-schema.json#/allOf/1
```

Schema of a Session Replay SegmentMetadata.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [session-replay-schema.json\*](../out/session-replay-schema.json "open original schema") |

## 1 Type

merged type ([SegmentMetadata](session-replay-schema-allof-segmentmetadata.md))

one (and only one) of

* all of

  * [SegmentContext](segment-context-schema.md "check type definition")

  * [CommonSegmentMetadataSchema](_common-segment-metadata-schema.md "check type definition")

  * [Untitled undefined type in BrowserSegmentMetadata](segment-metadata-schema-allof-2.md "check type definition")

* all of

  * [SegmentContext](segment-context-schema.md "check type definition")

  * [CommonSegmentMetadataSchema](_common-segment-metadata-schema.md "check type definition")

  * [Untitled undefined type in MobileSegmentMetadata](segment-metadata-schema-1-allof-2.md "check type definition")
