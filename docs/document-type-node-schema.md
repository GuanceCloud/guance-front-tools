# DocumentTypeNode Schema

```txt
session-replay/browser/document-type-node-schema.json
```

Schema of a Document Type Node.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [document-type-node-schema.json](../out/session-replay/browser/document-type-node-schema.json "open original schema") |

## DocumentTypeNode Type

`object` ([DocumentTypeNode](document-type-node-schema.md))

# DocumentTypeNode Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                        |
| :-------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| [type](#type)         | `integer` | Required | cannot be null | [DocumentTypeNode](document-type-node-schema-properties-type.md "session-replay/browser/document-type-node-schema.json#/properties/type")         |
| [name](#name)         | `string`  | Required | cannot be null | [DocumentTypeNode](document-type-node-schema-properties-name.md "session-replay/browser/document-type-node-schema.json#/properties/name")         |
| [publicId](#publicid) | `string`  | Required | cannot be null | [DocumentTypeNode](document-type-node-schema-properties-publicid.md "session-replay/browser/document-type-node-schema.json#/properties/publicId") |
| [systemId](#systemid) | `string`  | Required | cannot be null | [DocumentTypeNode](document-type-node-schema-properties-systemid.md "session-replay/browser/document-type-node-schema.json#/properties/systemId") |

## type

The type of this Node.

`type`

* is required

* Type: `integer`

* cannot be null

* defined in: [DocumentTypeNode](document-type-node-schema-properties-type.md "session-replay/browser/document-type-node-schema.json#/properties/type")

### type Type

`integer`

### type Constraints

**constant**: the value of this property must be equal to:

```json
1
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## name

Name for this DocumentType

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [DocumentTypeNode](document-type-node-schema-properties-name.md "session-replay/browser/document-type-node-schema.json#/properties/name")

### name Type

`string`

## publicId

PublicId for this DocumentType

`publicId`

* is required

* Type: `string`

* cannot be null

* defined in: [DocumentTypeNode](document-type-node-schema-properties-publicid.md "session-replay/browser/document-type-node-schema.json#/properties/publicId")

### publicId Type

`string`

## systemId

SystemId for this DocumentType

`systemId`

* is required

* Type: `string`

* cannot be null

* defined in: [DocumentTypeNode](document-type-node-schema-properties-systemid.md "session-replay/browser/document-type-node-schema.json#/properties/systemId")

### systemId Type

`string`
