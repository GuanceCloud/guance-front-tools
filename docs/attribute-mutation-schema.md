# AttributeMutation Schema

```txt
session-replay/browser/attribute-mutation-schema.json
```

Schema of an AttributeMutation.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [attribute-mutation-schema.json](../out/session-replay/browser/attribute-mutation-schema.json "open original schema") |

## AttributeMutation Type

`object` ([AttributeMutation](attribute-mutation-schema.md))

# AttributeMutation Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                             |
| :------------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                 | `integer` | Required | cannot be null | [AttributeMutation](attribute-mutation-schema-properties-id.md "session-replay/browser/attribute-mutation-schema.json#/properties/id")                 |
| [attributes](#attributes) | `object`  | Required | cannot be null | [AttributeMutation](attribute-mutation-schema-properties-attributes.md "session-replay/browser/attribute-mutation-schema.json#/properties/attributes") |

## id

Id of the mutated node.

`id`

* is required

* Type: `integer`

* cannot be null

* defined in: [AttributeMutation](attribute-mutation-schema-properties-id.md "session-replay/browser/attribute-mutation-schema.json#/properties/id")

### id Type

`integer`

## attributes

Attributes for this AttributeMutation

`attributes`

* is required

* Type: `object` ([Details](attribute-mutation-schema-properties-attributes.md))

* cannot be null

* defined in: [AttributeMutation](attribute-mutation-schema-properties-attributes.md "session-replay/browser/attribute-mutation-schema.json#/properties/attributes")

### attributes Type

`object` ([Details](attribute-mutation-schema-properties-attributes.md))
