# Untitled undefined type in MetaRecord Schema

```txt
session-replay/common/meta-record-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [meta-record-schema.json\*](../out/session-replay/common/meta-record-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property      | Type      | Required | Nullable       | Defined by                                                                                                                           |
| :------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type) | `integer` | Required | cannot be null | [MetaRecord](meta-record-schema-allof-1-properties-type.md "session-replay/common/meta-record-schema.json#/allOf/1/properties/type") |
| [data](#data) | `object`  | Required | cannot be null | [MetaRecord](meta-record-schema-allof-1-properties-data.md "session-replay/common/meta-record-schema.json#/allOf/1/properties/data") |

## type

The type of this Record.

`type`

* is required

* Type: `integer`

* cannot be null

* defined in: [MetaRecord](meta-record-schema-allof-1-properties-type.md "session-replay/common/meta-record-schema.json#/allOf/1/properties/type")

### type Type

`integer`

### type Constraints

**constant**: the value of this property must be equal to:

```json
4
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## data

The data contained by this record.

`data`

* is required

* Type: `object` ([Details](meta-record-schema-allof-1-properties-data.md))

* cannot be null

* defined in: [MetaRecord](meta-record-schema-allof-1-properties-data.md "session-replay/common/meta-record-schema.json#/allOf/1/properties/data")

### data Type

`object` ([Details](meta-record-schema-allof-1-properties-data.md))
