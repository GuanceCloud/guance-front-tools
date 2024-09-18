# DocumentNode Schema

```txt
session-replay/browser/document-node-schema.json
```

Schema of a Document Node.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [document-node-schema.json](../out/session-replay/browser/document-node-schema.json "open original schema") |

## DocumentNode Type

`object` ([DocumentNode](document-node-schema.md))

# DocumentNode Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                              |
| :---------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [type](#type)                             | `integer` | Required | cannot be null | [DocumentNode](document-node-schema-properties-type.md "session-replay/browser/document-node-schema.json#/properties/type")                             |
| [adoptedStyleSheets](#adoptedstylesheets) | `array`   | Optional | cannot be null | [DocumentNode](document-node-schema-properties-adoptedstylesheets.md "session-replay/browser/document-node-schema.json#/properties/adoptedStyleSheets") |
| [childNodes](#childnodes)                 | `array`   | Required | cannot be null | [DocumentNode](document-node-schema-properties-childnodes.md "session-replay/browser/document-node-schema.json#/properties/childNodes")                 |

## type

The type of this Node.

`type`

* is required

* Type: `integer`

* cannot be null

* defined in: [DocumentNode](document-node-schema-properties-type.md "session-replay/browser/document-node-schema.json#/properties/type")

### type Type

`integer`

### type Constraints

**constant**: the value of this property must be equal to:

```json
0
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## adoptedStyleSheets

Stylesheet added dynamically

`adoptedStyleSheets`

* is optional

* Type: `object[]` ([StyleSheet](stylesheet-schema.md))

* cannot be null

* defined in: [DocumentNode](document-node-schema-properties-adoptedstylesheets.md "session-replay/browser/document-node-schema.json#/properties/adoptedStyleSheets")

### adoptedStyleSheets Type

`object[]` ([StyleSheet](stylesheet-schema.md))

### adoptedStyleSheets Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## childNodes



`childNodes`

* is required

* Type: `object[]` ([SerializedNodeWithId](serialized-node-with-id-schema.md))

* cannot be null

* defined in: [DocumentNode](document-node-schema-properties-childnodes.md "session-replay/browser/document-node-schema.json#/properties/childNodes")

### childNodes Type

`object[]` ([SerializedNodeWithId](serialized-node-with-id-schema.md))
