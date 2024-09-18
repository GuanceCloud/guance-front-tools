# TextMutation Schema

```txt
session-replay/browser/text-mutation-schema.json
```

Schema of a TextMutation.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [text-mutation-schema.json](../out/session-replay/browser/text-mutation-schema.json "open original schema") |

## TextMutation Type

`object` ([TextMutation](text-mutation-schema.md))

# TextMutation Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                    |
| :-------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)       | `integer` | Required | cannot be null | [TextMutation](text-mutation-schema-properties-id.md "session-replay/browser/text-mutation-schema.json#/properties/id")       |
| [value](#value) | Merged    | Required | cannot be null | [TextMutation](text-mutation-schema-properties-value.md "session-replay/browser/text-mutation-schema.json#/properties/value") |

## id

Id of the mutated node.

`id`

* is required

* Type: `integer`

* cannot be null

* defined in: [TextMutation](text-mutation-schema-properties-id.md "session-replay/browser/text-mutation-schema.json#/properties/id")

### id Type

`integer`

## value

Value for this TextMutation

`value`

* is required

* Type: merged type ([Details](text-mutation-schema-properties-value.md))

* cannot be null

* defined in: [TextMutation](text-mutation-schema-properties-value.md "session-replay/browser/text-mutation-schema.json#/properties/value")

### value Type

merged type ([Details](text-mutation-schema-properties-value.md))

one (and only one) of

* [Untitled null in TextMutation](text-mutation-schema-properties-value-oneof-0.md "check type definition")

* [Untitled string in TextMutation](text-mutation-schema-properties-value-oneof-1.md "check type definition")
