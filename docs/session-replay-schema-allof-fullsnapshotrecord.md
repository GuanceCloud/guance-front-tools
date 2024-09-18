# FullSnapshotRecord Schema

```txt
session-replay/full-snapshot-record-schema.json#/allOf/3
```

Schema of a Record type which contains the full snapshot of a screen.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [session-replay-schema.json\*](../out/session-replay-schema.json "open original schema") |

## 3 Type

merged type ([FullSnapshotRecord](session-replay-schema-allof-fullsnapshotrecord.md))

one (and only one) of

* all of

  * all of

    * [CommonRecordSchema](_common-record-schema.md "check type definition")

    * [Untitled undefined type in SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema-allof-1.md "check type definition")

  * [Untitled undefined type in BrowserFullSnapshotRecord](full-snapshot-record-schema-allof-1.md "check type definition")

* all of

  * [CommonRecordSchema](_common-record-schema.md "check type definition")

  * [Untitled undefined type in MobileFullSnapshotRecord](full-snapshot-record-schema-2-allof-1.md "check type definition")
