# MobileIncrementalData Schema

```txt
session-replay/mobile/incremental-data-schema.json
```

Mobile-specific. Schema of a Session Replay IncrementalData type.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [incremental-data-schema.json](../out/session-replay/mobile/incremental-data-schema.json "open original schema") |

## MobileIncrementalData Type

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
