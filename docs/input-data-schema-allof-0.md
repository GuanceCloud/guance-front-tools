# Untitled undefined type in InputData Schema

```txt
session-replay/browser/input-data-schema.json#/allOf/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [input-data-schema.json\*](../out/session-replay/browser/input-data-schema.json "open original schema") |

## 0 Type

unknown

# 0 Properties

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                             |
| :---------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| [source](#source) | `integer` | Required | cannot be null | [InputData](input-data-schema-allof-0-properties-source.md "session-replay/browser/input-data-schema.json#/allOf/0/properties/source") |
| [id](#id)         | `integer` | Required | cannot be null | [InputData](input-data-schema-allof-0-properties-id.md "session-replay/browser/input-data-schema.json#/allOf/0/properties/id")         |

## source

The source of this type of incremental data.

`source`

* is required

* Type: `integer`

* cannot be null

* defined in: [InputData](input-data-schema-allof-0-properties-source.md "session-replay/browser/input-data-schema.json#/allOf/0/properties/source")

### source Type

`integer`

### source Constraints

**constant**: the value of this property must be equal to:

```json
5
```

### source Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## id

Id for the target node for this InputData.

`id`

* is required

* Type: `integer`

* cannot be null

* defined in: [InputData](input-data-schema-allof-0-properties-id.md "session-replay/browser/input-data-schema.json#/allOf/0/properties/id")

### id Type

`integer`
