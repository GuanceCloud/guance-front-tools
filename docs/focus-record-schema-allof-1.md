# Untitled undefined type in FocusRecord Schema

```txt
session-replay/common/focus-record-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [focus-record-schema.json\*](../out/session-replay/common/focus-record-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property      | Type      | Required | Nullable       | Defined by                                                                                                                              |
| :------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type) | `integer` | Required | cannot be null | [FocusRecord](focus-record-schema-allof-1-properties-type.md "session-replay/common/focus-record-schema.json#/allOf/1/properties/type") |
| [data](#data) | `object`  | Required | cannot be null | [FocusRecord](focus-record-schema-allof-1-properties-data.md "session-replay/common/focus-record-schema.json#/allOf/1/properties/data") |

## type

The type of this Record.

`type`

* is required

* Type: `integer`

* cannot be null

* defined in: [FocusRecord](focus-record-schema-allof-1-properties-type.md "session-replay/common/focus-record-schema.json#/allOf/1/properties/type")

### type Type

`integer`

### type Constraints

**constant**: the value of this property must be equal to:

```json
6
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## data



`data`

* is required

* Type: `object` ([Details](focus-record-schema-allof-1-properties-data.md))

* cannot be null

* defined in: [FocusRecord](focus-record-schema-allof-1-properties-data.md "session-replay/common/focus-record-schema.json#/allOf/1/properties/data")

### data Type

`object` ([Details](focus-record-schema-allof-1-properties-data.md))
