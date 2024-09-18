# ScrollPosition Schema

```txt
session-replay/browser/scroll-position-schema.json
```

Browser-specific. Schema of a ScrollPosition.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [scroll-position-schema.json](../out/session-replay/browser/scroll-position-schema.json "open original schema") |

## ScrollPosition Type

`object` ([ScrollPosition](scroll-position-schema.md))

# ScrollPosition Properties

| Property  | Type      | Required | Nullable       | Defined by                                                                                                                    |
| :-------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [id](#id) | `integer` | Required | cannot be null | [ScrollPosition](scroll-position-schema-properties-id.md "session-replay/browser/scroll-position-schema.json#/properties/id") |
| [x](#x)   | `number`  | Required | cannot be null | [ScrollPosition](scroll-position-schema-properties-x.md "session-replay/browser/scroll-position-schema.json#/properties/x")   |
| [y](#y)   | `number`  | Required | cannot be null | [ScrollPosition](scroll-position-schema-properties-y.md "session-replay/browser/scroll-position-schema.json#/properties/y")   |

## id

Id for the target node for this ScrollPosition.

`id`

* is required

* Type: `integer`

* cannot be null

* defined in: [ScrollPosition](scroll-position-schema-properties-id.md "session-replay/browser/scroll-position-schema.json#/properties/id")

### id Type

`integer`

## x

X-axis coordinate for this ScrollPosition.

`x`

* is required

* Type: `number`

* cannot be null

* defined in: [ScrollPosition](scroll-position-schema-properties-x.md "session-replay/browser/scroll-position-schema.json#/properties/x")

### x Type

`number`

## y

Y-axis coordinate for this ScrollPosition.

`y`

* is required

* Type: `number`

* cannot be null

* defined in: [ScrollPosition](scroll-position-schema-properties-y.md "session-replay/browser/scroll-position-schema.json#/properties/y")

### y Type

`number`
