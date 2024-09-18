# SessionReplay Schema

```txt
session-replay-schema.json
```

Schema of all properties of Session Replay

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                             |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [session-replay-schema.json](../out/session-replay-schema.json "open original schema") |

## SessionReplay Type

`object` ([SessionReplay](session-replay-schema.md))

all of

* one (and only one) of

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

* one (and only one) of

  * all of

    * [SegmentContext](segment-context-schema.md "check type definition")

    * [CommonSegmentMetadataSchema](_common-segment-metadata-schema.md "check type definition")

    * [Untitled undefined type in BrowserSegmentMetadata](segment-metadata-schema-allof-2.md "check type definition")

  * all of

    * [SegmentContext](segment-context-schema.md "check type definition")

    * [CommonSegmentMetadataSchema](_common-segment-metadata-schema.md "check type definition")

    * [Untitled undefined type in MobileSegmentMetadata](segment-metadata-schema-1-allof-2.md "check type definition")

* one (and only one) of

  * one (and only one) of

    * all of

      * [SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema.md "check type definition")

      * [Untitled undefined type in BrowserFullSnapshotRecord](full-snapshot-record-schema-allof-1.md "check type definition")

    * all of

      * [SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema.md "check type definition")

      * [Untitled undefined type in BrowserIncrementalSnapshotRecord](incremental-snapshot-record-schema-allof-1.md "check type definition")

    * all of

      * [SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema.md "check type definition")

      * [Untitled undefined type in MetaRecord](meta-record-schema-allof-1.md "check type definition")

    * all of

      * [SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema.md "check type definition")

      * [Untitled undefined type in FocusRecord](focus-record-schema-allof-1.md "check type definition")

    * all of

      * [SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema.md "check type definition")

      * [Untitled undefined type in ViewEndRecord](view-end-record-schema-allof-1.md "check type definition")

    * all of

      * [SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema.md "check type definition")

      * [Untitled undefined type in VisualViewportRecord](visual-viewport-record-schema-allof-1.md "check type definition")

    * all of

      * [SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema.md "check type definition")

      * [Untitled undefined type in FrustrationRecord](frustration-record-schema-allof-1.md "check type definition")

  * one (and only one) of

    * all of

      * [CommonRecordSchema](_common-record-schema.md "check type definition")

      * [Untitled undefined type in MobileFullSnapshotRecord](full-snapshot-record-schema-2-allof-1.md "check type definition")

    * all of

      * [CommonRecordSchema](_common-record-schema.md "check type definition")

      * [Untitled undefined type in MobileIncrementalSnapshotRecord](incremental-snapshot-record-schema-2-allof-1.md "check type definition")

    * all of

      * [SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema.md "check type definition")

      * [Untitled undefined type in MetaRecord](meta-record-schema-allof-1.md "check type definition")

    * all of

      * [SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema.md "check type definition")

      * [Untitled undefined type in FocusRecord](focus-record-schema-allof-1.md "check type definition")

    * all of

      * [SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema.md "check type definition")

      * [Untitled undefined type in ViewEndRecord](view-end-record-schema-allof-1.md "check type definition")

    * all of

      * [SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema.md "check type definition")

      * [Untitled undefined type in VisualViewportRecord](visual-viewport-record-schema-allof-1.md "check type definition")

* one (and only one) of

  * all of

    * all of

      * [CommonRecordSchema](_common-record-schema.md "check type definition")

      * [Untitled undefined type in SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema-allof-1.md "check type definition")

    * [Untitled undefined type in BrowserFullSnapshotRecord](full-snapshot-record-schema-allof-1.md "check type definition")

  * all of

    * [CommonRecordSchema](_common-record-schema.md "check type definition")

    * [Untitled undefined type in MobileFullSnapshotRecord](full-snapshot-record-schema-2-allof-1.md "check type definition")

* one (and only one) of

  * all of

    * all of

      * [CommonRecordSchema](_common-record-schema.md "check type definition")

      * [Untitled undefined type in SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema-allof-1.md "check type definition")

    * [Untitled undefined type in BrowserIncrementalSnapshotRecord](incremental-snapshot-record-schema-allof-1.md "check type definition")

  * all of

    * [CommonRecordSchema](_common-record-schema.md "check type definition")

    * [Untitled undefined type in MobileIncrementalSnapshotRecord](incremental-snapshot-record-schema-2-allof-1.md "check type definition")

* one (and only one) of

  * one (and only one) of

    * all of

      * [Untitled undefined type in BrowserMutationData](mutation-data-schema-allof-0.md "check type definition")

      * [BrowserMutationPayload](mutation-payload-schema.md "check type definition")

    * [MousemoveData](mouse-move-data-schema.md "check type definition")

    * all of

      * [Untitled undefined type in MouseInteractionData](mouse-interaction-data-schema-allof-0.md "check type definition")

      * [MouseInteraction](mouse-interaction-schema.md "check type definition")

    * all of

      * [Untitled undefined type in ScrollData](scroll-data-schema-allof-0.md "check type definition")

      * [ScrollPosition](scroll-position-schema.md "check type definition")

    * all of

      * [Untitled undefined type in InputData](input-data-schema-allof-0.md "check type definition")

      * [InputState](input-state-schema.md "check type definition")

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

  * one (and only one) of

    * all of

      * [Untitled undefined type in MobileMutationData](mutation-data-schema-1-allof-0.md "check type definition")

      * [MobileMutationPayload](mutation-payload-schema-1.md "check type definition")

    * all of

      * [Untitled undefined type in TouchData](touch-data-schema-allof-0.md "check type definition")

    * all of

      * [Untitled undefined type in ViewportResizeData](viewport-resize-data-schema-allof-0.md "check type definition")

      * [ViewportResizeDimension](viewport-resize-dimension-schema.md "check type definition")

    * all of

      * [Untitled undefined type in PointerInteractionData](pointer-interaction-data-schema-allof-0.md "check type definition")

      * [PointerInteraction](pointer-interaction-schema.md "check type definition")

* one (and only one) of

  * all of

    * [Untitled undefined type in BrowserMutationData](mutation-data-schema-allof-0.md "check type definition")

    * all of

      * [Untitled undefined type in BrowserMutationPayload](mutation-payload-schema-allof-0.md "check type definition")

  * all of

    * [Untitled undefined type in MobileMutationData](mutation-data-schema-1-allof-0.md "check type definition")

    * all of

      * [Untitled undefined type in MobileMutationPayload](mutation-payload-schema-1-allof-0.md "check type definition")

* one (and only one) of

  * all of

    * [Untitled undefined type in BrowserMutationPayload](mutation-payload-schema-allof-0.md "check type definition")

  * all of

    * [Untitled undefined type in MobileMutationPayload](mutation-payload-schema-1-allof-0.md "check type definition")
