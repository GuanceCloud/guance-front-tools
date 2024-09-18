# MobileRecord Schema

```txt
session-replay/mobile/record-schema.json
```

Mobile-specific. Schema of a Session Replay Record.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [record-schema.json](../out/session-replay/mobile/record-schema.json "open original schema") |

## MobileRecord Type

`object` ([MobileRecord](record-schema-1.md))

one (and only one) of

* all of

  * [CommonRecordSchema](_common-record-schema.md "check type definition")

  * [Untitled undefined type in MobileFullSnapshotRecord](full-snapshot-record-schema-2-allof-1.md "check type definition")

* all of

  * [CommonRecordSchema](_common-record-schema.md "check type definition")

  * [Untitled undefined type in MobileIncrementalSnapshotRecord](incremental-snapshot-record-schema-2-allof-1.md "check type definition")

* all of

  * all of

    * [CommonRecordSchema](_common-record-schema.md "check type definition")

    * [Untitled undefined type in SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema-allof-1.md "check type definition")

  * [Untitled undefined type in MetaRecord](meta-record-schema-allof-1.md "check type definition")

* all of

  * all of

    * [CommonRecordSchema](_common-record-schema.md "check type definition")

    * [Untitled undefined type in SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema-allof-1.md "check type definition")

  * [Untitled undefined type in FocusRecord](focus-record-schema-allof-1.md "check type definition")

* all of

  * all of

    * [CommonRecordSchema](_common-record-schema.md "check type definition")

    * [Untitled undefined type in SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema-allof-1.md "check type definition")

  * [Untitled undefined type in ViewEndRecord](view-end-record-schema-allof-1.md "check type definition")

* all of

  * all of

    * [CommonRecordSchema](_common-record-schema.md "check type definition")

    * [Untitled undefined type in SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema-allof-1.md "check type definition")

  * [Untitled undefined type in VisualViewportRecord](visual-viewport-record-schema-allof-1.md "check type definition")
