# IncrementalData Schema

```txt
session-replay/incremental-data-schema.json
```

Schema of a Session Replay IncrementalData type.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [incremental-data-schema.json](../out/session-replay/incremental-data-schema.json "open original schema") |

## IncrementalData Type

merged type ([IncrementalData](incremental-data-schema-1.md))

one (and only one) of

* one (and only one) of

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

* one (and only one) of

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
