# StyleSheetAddRule Schema

```txt
session-replay/browser/stylesheet-rule-add-schema.json
```

Browser-specific. Schema of a StyleSheetAddRule.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [stylesheet-rule-add-schema.json](../out/session-replay/browser/stylesheet-rule-add-schema.json "open original schema") |

## StyleSheetAddRule Type

`object` ([StyleSheetAddRule](stylesheet-rule-add-schema.md))

# StyleSheetAddRule Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                     |
| :-------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [rule](#rule)   | `string` | Required | cannot be null | [StyleSheetAddRule](stylesheet-rule-add-schema-properties-rule.md "session-replay/browser/stylesheet-rule-add-schema.json#/properties/rule")   |
| [index](#index) | Merged   | Optional | cannot be null | [StyleSheetAddRule](stylesheet-rule-add-schema-properties-index.md "session-replay/browser/stylesheet-rule-add-schema.json#/properties/index") |

## rule

Text content for this StyleSheetAddRule.

`rule`

* is required

* Type: `string`

* cannot be null

* defined in: [StyleSheetAddRule](stylesheet-rule-add-schema-properties-rule.md "session-replay/browser/stylesheet-rule-add-schema.json#/properties/rule")

### rule Type

`string`

## index

Index of this StyleSheetAddRule in its StyleSheet.

`index`

* is optional

* Type: merged type ([Details](stylesheet-rule-add-schema-properties-index.md))

* cannot be null

* defined in: [StyleSheetAddRule](stylesheet-rule-add-schema-properties-index.md "session-replay/browser/stylesheet-rule-add-schema.json#/properties/index")

### index Type

merged type ([Details](stylesheet-rule-add-schema-properties-index.md))

one (and only one) of

* [Untitled integer in StyleSheetAddRule](stylesheet-rule-add-schema-properties-index-oneof-0.md "check type definition")

* [Untitled array in StyleSheetAddRule](stylesheet-rule-add-schema-properties-index-oneof-1.md "check type definition")
