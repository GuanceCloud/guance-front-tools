# Untitled undefined type in MobileMutationData Schema

```txt
session-replay/mobile/mutation-data-schema.json#/allOf/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [mutation-data-schema.json\*](../out/session-replay/mobile/mutation-data-schema.json "open original schema") |

## 0 Type

unknown

# 0 Properties

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                                             |
| :---------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [source](#source) | `integer` | Required | cannot be null | [MobileMutationData](mutation-data-schema-1-allof-0-properties-source.md "session-replay/mobile/mutation-data-schema.json#/allOf/0/properties/source") |

## source

The source of this type of incremental data.

`source`

* is required

* Type: `integer`

* cannot be null

* defined in: [MobileMutationData](mutation-data-schema-1-allof-0-properties-source.md "session-replay/mobile/mutation-data-schema.json#/allOf/0/properties/source")

### source Type

`integer`

### source Constraints

**constant**: the value of this property must be equal to:

```json
0
```

### source Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
