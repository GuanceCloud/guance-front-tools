# Segment Schema

```txt
session-replay/segment-schema.json
```

Schema of a Session Replay data Segment.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [segment-schema.json](../out/session-replay/segment-schema.json "open original schema") |

## Segment Type

`object` ([Segment](segment-schema-2.md))

one (and only one) of

* all of

  * all of

    * [SegmentContext](segment-context-schema.md "check type definition")

    * [CommonSegmentMetadataSchema](_common-segment-metadata-schema.md "check type definition")

    * [Untitled undefined type in BrowserSegmentMetadata](segment-metadata-schema-allof-2.md "check type definition")

  * [Untitled undefined type in BrowserSegment](segment-schema-allof-1.md "check type definition")

* all of

  * all of

    * [SegmentContext](segment-context-schema.md "check type definition")

    * [CommonSegmentMetadataSchema](_common-segment-metadata-schema.md "check type definition")

    * [Untitled undefined type in MobileSegmentMetadata](segment-metadata-schema-1-allof-2.md "check type definition")

  * [Untitled undefined type in MobileSegment](segment-schema-1-allof-1.md "check type definition")
