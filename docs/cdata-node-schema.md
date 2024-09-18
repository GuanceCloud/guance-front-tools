# CDataNode Schema

```txt
session-replay/browser/cdata-node-schema.json
```

Schema of a CData Node.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [cdata-node-schema.json](../out/session-replay/browser/cdata-node-schema.json "open original schema") |

## CDataNode Type

`object` ([CDataNode](cdata-node-schema.md))

# CDataNode Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                       |
| :-------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)               | `integer`     | Required | cannot be null | [CDataNode](cdata-node-schema-properties-type.md "session-replay/browser/cdata-node-schema.json#/properties/type")               |
| [textContent](#textcontent) | Not specified | Required | cannot be null | [CDataNode](cdata-node-schema-properties-textcontent.md "session-replay/browser/cdata-node-schema.json#/properties/textContent") |

## type

The type of this Node.

`type`

* is required

* Type: `integer`

* cannot be null

* defined in: [CDataNode](cdata-node-schema-properties-type.md "session-replay/browser/cdata-node-schema.json#/properties/type")

### type Type

`integer`

### type Constraints

**constant**: the value of this property must be equal to:

```json
4
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## textContent



`textContent`

* is required

* Type: unknown

* cannot be null

* defined in: [CDataNode](cdata-node-schema-properties-textcontent.md "session-replay/browser/cdata-node-schema.json#/properties/textContent")

### textContent Type

unknown

### textContent Constraints

**constant**: the value of this property must be equal to:

```json
""
```
