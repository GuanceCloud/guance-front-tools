# Attributes Schema

```txt
session-replay/browser/attributes-schema.json
```

Schema of an Attributes type.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                            |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [attributes-schema.json](../out/session-replay/browser/attributes-schema.json "open original schema") |

## Attributes Type

`object` ([Attributes](attributes-schema.md))

# Attributes Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                    |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Multiple | Optional | cannot be null | [Attributes](attributes-schema-additionalproperties.md "session-replay/browser/attributes-schema.json#/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



* is optional

* Type: any of the following: `string` or `number` or `boolean` ([Details](attributes-schema-additionalproperties.md))

* cannot be null

* defined in: [Attributes](attributes-schema-additionalproperties.md "session-replay/browser/attributes-schema.json#/additionalProperties")

### additionalProperties Type

any of the following: `string` or `number` or `boolean` ([Details](attributes-schema-additionalproperties.md))
