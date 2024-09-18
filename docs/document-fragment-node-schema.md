# DocumentFragmentNode Schema

```txt
session-replay/browser/document-fragment-node-schema.json
```

Schema of a Document FragmentNode.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [document-fragment-node-schema.json](../out/session-replay/browser/document-fragment-node-schema.json "open original schema") |

## DocumentFragmentNode Type

`object` ([DocumentFragmentNode](document-fragment-node-schema.md))

# DocumentFragmentNode Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                        |
| :---------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                             | `integer` | Required | cannot be null | [DocumentFragmentNode](document-fragment-node-schema-properties-type.md "session-replay/browser/document-fragment-node-schema.json#/properties/type")                             |
| [adoptedStyleSheets](#adoptedstylesheets) | `array`   | Optional | cannot be null | [DocumentFragmentNode](document-fragment-node-schema-properties-adoptedstylesheets.md "session-replay/browser/document-fragment-node-schema.json#/properties/adoptedStyleSheets") |
| [isShadowRoot](#isshadowroot)             | `boolean` | Required | cannot be null | [DocumentFragmentNode](document-fragment-node-schema-properties-isshadowroot.md "session-replay/browser/document-fragment-node-schema.json#/properties/isShadowRoot")             |
| [childNodes](#childnodes)                 | `array`   | Required | cannot be null | [DocumentFragmentNode](document-fragment-node-schema-properties-childnodes.md "session-replay/browser/document-fragment-node-schema.json#/properties/childNodes")                 |

## type

The type of this Node.

`type`

* is required

* Type: `integer`

* cannot be null

* defined in: [DocumentFragmentNode](document-fragment-node-schema-properties-type.md "session-replay/browser/document-fragment-node-schema.json#/properties/type")

### type Type

`integer`

### type Constraints

**constant**: the value of this property must be equal to:

```json
11
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## adoptedStyleSheets

Stylesheet added dynamically

`adoptedStyleSheets`

* is optional

* Type: `object[]` ([StyleSheet](stylesheet-schema.md))

* cannot be null

* defined in: [DocumentFragmentNode](document-fragment-node-schema-properties-adoptedstylesheets.md "session-replay/browser/document-fragment-node-schema.json#/properties/adoptedStyleSheets")

### adoptedStyleSheets Type

`object[]` ([StyleSheet](stylesheet-schema.md))

### adoptedStyleSheets Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## isShadowRoot

Is this node a shadow root or not

`isShadowRoot`

* is required

* Type: `boolean`

* cannot be null

* defined in: [DocumentFragmentNode](document-fragment-node-schema-properties-isshadowroot.md "session-replay/browser/document-fragment-node-schema.json#/properties/isShadowRoot")

### isShadowRoot Type

`boolean`

### isShadowRoot Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## childNodes



`childNodes`

* is required

* Type: `object[]` ([SerializedNodeWithId](serialized-node-with-id-schema.md))

* cannot be null

* defined in: [DocumentFragmentNode](document-fragment-node-schema-properties-childnodes.md "session-replay/browser/document-fragment-node-schema.json#/properties/childNodes")

### childNodes Type

`object[]` ([SerializedNodeWithId](serialized-node-with-id-schema.md))
