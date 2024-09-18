# StyleSheetRule Schema

```txt
session-replay/browser/stylesheet-rule-schema.json
```

Browser-specific. Schema of a StyleSheetRule.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [stylesheet-rule-schema.json](../out/session-replay/browser/stylesheet-rule-schema.json "open original schema") |

## StyleSheetRule Type

`object` ([StyleSheetRule](stylesheet-rule-schema.md))

# StyleSheetRule Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                              |
| :------------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)           | `integer` | Required | cannot be null | [StyleSheetRule](stylesheet-rule-schema-properties-id.md "session-replay/browser/stylesheet-rule-schema.json#/properties/id")           |
| [adds](#adds)       | `array`   | Optional | cannot be null | [StyleSheetRule](stylesheet-rule-schema-properties-adds.md "session-replay/browser/stylesheet-rule-schema.json#/properties/adds")       |
| [removes](#removes) | `array`   | Optional | cannot be null | [StyleSheetRule](stylesheet-rule-schema-properties-removes.md "session-replay/browser/stylesheet-rule-schema.json#/properties/removes") |

## id

Id of the owner node for this StyleSheetRule.

`id`

* is required

* Type: `integer`

* cannot be null

* defined in: [StyleSheetRule](stylesheet-rule-schema-properties-id.md "session-replay/browser/stylesheet-rule-schema.json#/properties/id")

### id Type

`integer`

### id Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## adds

Rules added to this StyleSheetRule.

`adds`

* is optional

* Type: `object[]` ([StyleSheetAddRule](stylesheet-rule-add-schema.md))

* cannot be null

* defined in: [StyleSheetRule](stylesheet-rule-schema-properties-adds.md "session-replay/browser/stylesheet-rule-schema.json#/properties/adds")

### adds Type

`object[]` ([StyleSheetAddRule](stylesheet-rule-add-schema.md))

## removes

Rules deleted from this StyleSheetRule.

`removes`

* is optional

* Type: `object[]` ([StyleSheetDeleteRule](stylesheet-rule-delete-schema.md))

* cannot be null

* defined in: [StyleSheetRule](stylesheet-rule-schema-properties-removes.md "session-replay/browser/stylesheet-rule-schema.json#/properties/removes")

### removes Type

`object[]` ([StyleSheetDeleteRule](stylesheet-rule-delete-schema.md))
