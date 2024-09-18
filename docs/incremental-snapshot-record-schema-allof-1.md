# Untitled undefined type in BrowserIncrementalSnapshotRecord Schema

```txt
session-replay/browser/incremental-snapshot-record-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [incremental-snapshot-record-schema.json\*](../out/session-replay/browser/incremental-snapshot-record-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property      | Type      | Required | Nullable       | Defined by                                                                                                                                                                                  |
| :------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [type](#type) | `integer` | Required | cannot be null | [BrowserIncrementalSnapshotRecord](incremental-snapshot-record-schema-allof-1-properties-type.md "session-replay/browser/incremental-snapshot-record-schema.json#/allOf/1/properties/type") |
| [data](#data) | Merged    | Required | cannot be null | [BrowserIncrementalSnapshotRecord](incremental-data-schema.md "session-replay/browser/incremental-data-schema.json#/allOf/1/properties/data")                                               |
| [id](#id)     | `integer` | Optional | cannot be null | [BrowserIncrementalSnapshotRecord](incremental-snapshot-record-schema-allof-1-properties-id.md "session-replay/browser/incremental-snapshot-record-schema.json#/allOf/1/properties/id")     |

## type

The type of this Record.

`type`

* is required

* Type: `integer`

* cannot be null

* defined in: [BrowserIncrementalSnapshotRecord](incremental-snapshot-record-schema-allof-1-properties-type.md "session-replay/browser/incremental-snapshot-record-schema.json#/allOf/1/properties/type")

### type Type

`integer`

### type Constraints

**constant**: the value of this property must be equal to:

```json
3
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## data

Browser-specific. Schema of a Session Replay IncrementalData type.

`data`

* is required

* Type: `object` ([BrowserIncrementalData](incremental-data-schema.md))

* cannot be null

* defined in: [BrowserIncrementalSnapshotRecord](incremental-data-schema.md "session-replay/browser/incremental-data-schema.json#/allOf/1/properties/data")

### data Type

`object` ([BrowserIncrementalData](incremental-data-schema.md))

one (and only one) of

* all of

  * [Untitled undefined type in BrowserMutationData](mutation-data-schema-allof-0.md "check type definition")

  * all of

    * [Untitled undefined type in BrowserMutationPayload](mutation-payload-schema-allof-0.md "check type definition")

* [MousemoveData](mouse-move-data-schema.md "check type definition")

* all of

  * [Untitled undefined type in MouseInteractionData](mouse-interaction-data-schema-allof-0.md "check type definition")

  * one (and only one) of

    * [Untitled undefined type in MouseInteraction](mouse-interaction-schema-oneof-0.md "check type definition")

    * [Untitled undefined type in MouseInteraction](mouse-interaction-schema-oneof-1.md "check type definition")

* all of

  * [Untitled undefined type in ScrollData](scroll-data-schema-allof-0.md "check type definition")

  * [ScrollPosition](scroll-position-schema.md "check type definition")

* all of

  * [Untitled undefined type in InputData](input-data-schema-allof-0.md "check type definition")

  * one (and only one) of

    * [Untitled undefined type in InputState](input-state-schema-oneof-0.md "check type definition")

    * [Untitled undefined type in InputState](input-state-schema-oneof-1.md "check type definition")

* all of

  * [Untitled undefined type in MediaInteractionData](media-interaction-data-schema-allof-0.md "check type definition")

  * [MediaInteraction](media-interaction-schema.md "check type definition")

* all of

  * [Untitled undefined type in StyleSheetRuleData](stylesheet-rule-data-schema-allof-0.md "check type definition")

  * [StyleSheetRule](stylesheet-rule-schema.md "check type definition")

* all of

  * [Untitled undefined type in ViewportResizeData](viewport-resize-data-schema-allof-0.md "check type definition")

  * [ViewportResizeDimension](viewport-resize-dimension-schema.md "check type definition")

* all of

  * [Untitled undefined type in PointerInteractionData](pointer-interaction-data-schema-allof-0.md "check type definition")

  * [PointerInteraction](pointer-interaction-schema.md "check type definition")

## id



`id`

* is optional

* Type: `integer`

* cannot be null

* defined in: [BrowserIncrementalSnapshotRecord](incremental-snapshot-record-schema-allof-1-properties-id.md "session-replay/browser/incremental-snapshot-record-schema.json#/allOf/1/properties/id")

### id Type

`integer`
