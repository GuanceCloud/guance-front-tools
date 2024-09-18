# StyleSheetDeleteRule Schema

```txt
session-replay/browser/stylesheet-rule-delete-schema.json
```

Browser-specific. Schema of a StyleSheetDeleteRule.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [stylesheet-rule-delete-schema.json](../out/session-replay/browser/stylesheet-rule-delete-schema.json "open original schema") |

## StyleSheetDeleteRule Type

`object` ([StyleSheetDeleteRule](stylesheet-rule-delete-schema.md))

# StyleSheetDeleteRule Properties

| Property        | Type   | Required | Nullable       | Defined by                                                                                                                                              |
| :-------------- | :----- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [index](#index) | Merged | Required | cannot be null | [StyleSheetDeleteRule](stylesheet-rule-delete-schema-properties-index.md "session-replay/browser/stylesheet-rule-delete-schema.json#/properties/index") |

## index

Index of this StyleSheetDeleteRule in its StyleSheet.

`index`

* is required

* Type: merged type ([Details](stylesheet-rule-delete-schema-properties-index.md))

* cannot be null

* defined in: [StyleSheetDeleteRule](stylesheet-rule-delete-schema-properties-index.md "session-replay/browser/stylesheet-rule-delete-schema.json#/properties/index")

### index Type

merged type ([Details](stylesheet-rule-delete-schema-properties-index.md))

one (and only one) of

* [Untitled integer in StyleSheetDeleteRule](stylesheet-rule-delete-schema-properties-index-oneof-0.md "check type definition")

* [Untitled array in StyleSheetDeleteRule](stylesheet-rule-delete-schema-properties-index-oneof-1.md "check type definition")
