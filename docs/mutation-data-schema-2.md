# MutationData Schema

```txt
session-replay/mutation-data-schema.json
```

Schema of a MutationData.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [mutation-data-schema.json](../out/session-replay/mutation-data-schema.json "open original schema") |

## MutationData Type

merged type ([MutationData](mutation-data-schema-2.md))

one (and only one) of

* all of

  * [Untitled undefined type in BrowserMutationData](mutation-data-schema-allof-0.md "check type definition")

  * all of

    * [Untitled undefined type in BrowserMutationPayload](mutation-payload-schema-allof-0.md "check type definition")

* all of

  * [Untitled undefined type in MobileMutationData](mutation-data-schema-1-allof-0.md "check type definition")

  * all of

    * [Untitled undefined type in MobileMutationPayload](mutation-payload-schema-1-allof-0.md "check type definition")
