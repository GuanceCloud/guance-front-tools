# Untitled undefined type in MobileIncrementalSnapshotRecord Schema

```txt
session-replay/mobile/incremental-snapshot-record-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [incremental-snapshot-record-schema.json\*](../out/session-replay/mobile/incremental-snapshot-record-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property      | Type      | Required | Nullable       | Defined by                                                                                                                                                                                  |
| :------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [type](#type) | `integer` | Required | cannot be null | [MobileIncrementalSnapshotRecord](incremental-snapshot-record-schema-2-allof-1-properties-type.md "session-replay/mobile/incremental-snapshot-record-schema.json#/allOf/1/properties/type") |
| [data](#data) | Merged    | Required | cannot be null | [MobileIncrementalSnapshotRecord](incremental-data-schema-2.md "session-replay/mobile/incremental-data-schema.json#/allOf/1/properties/data")                                               |

## type

The type of this Record.

`type`

* is required

* Type: `integer`

* cannot be null

* defined in: [MobileIncrementalSnapshotRecord](incremental-snapshot-record-schema-2-allof-1-properties-type.md "session-replay/mobile/incremental-snapshot-record-schema.json#/allOf/1/properties/type")

### type Type

`integer`

### type Constraints

**constant**: the value of this property must be equal to:

```json
11
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## data

Mobile-specific. Schema of a Session Replay IncrementalData type.

`data`

* is required

* Type: `object` ([MobileIncrementalData](incremental-data-schema-2.md))

* cannot be null

* defined in: [MobileIncrementalSnapshotRecord](incremental-data-schema-2.md "session-replay/mobile/incremental-data-schema.json#/allOf/1/properties/data")

### data Type

`object` ([MobileIncrementalData](incremental-data-schema-2.md))

one (and only one) of

* all of

  * [Untitled undefined type in MobileMutationData](mutation-data-schema-1-allof-0.md "check type definition")

  * all of

    * [Untitled undefined type in MobileMutationPayload](mutation-payload-schema-1-allof-0.md "check type definition")

* all of

  * [Untitled undefined type in TouchData](touch-data-schema-allof-0.md "check type definition")

* all of

  * [Untitled undefined type in ViewportResizeData](viewport-resize-data-schema-allof-0.md "check type definition")

  * [ViewportResizeDimension](viewport-resize-dimension-schema.md "check type definition")

* all of

  * [Untitled undefined type in PointerInteractionData](pointer-interaction-data-schema-allof-0.md "check type definition")

  * [PointerInteraction](pointer-interaction-schema.md "check type definition")
