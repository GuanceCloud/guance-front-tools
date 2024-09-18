# BrowserNode Schema

```txt
session-replay/browser/node-schema.json
```

Schema of a Node type.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [node-schema.json](../out/session-replay/browser/node-schema.json "open original schema") |

## BrowserNode Type

`object` ([BrowserNode](node-schema.md))

# BrowserNode Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                     |
| :------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| [node](#node)                   | Merged   | Required | cannot be null | [BrowserNode](serialized-node-with-id-schema.md "session-replay/browser/serialized-node-with-id-schema.json#/properties/node") |
| [initialOffset](#initialoffset) | `object` | Required | cannot be null | [BrowserNode](node-schema-properties-initialoffset.md "session-replay/browser/node-schema.json#/properties/initialOffset")     |

## node

Serialized node contained by this Record.

`node`

* is required

* Type: `object` ([SerializedNodeWithId](serialized-node-with-id-schema.md))

* cannot be null

* defined in: [BrowserNode](serialized-node-with-id-schema.md "session-replay/browser/serialized-node-with-id-schema.json#/properties/node")

### node Type

`object` ([SerializedNodeWithId](serialized-node-with-id-schema.md))

all of

* [Untitled undefined type in SerializedNodeWithId](serialized-node-with-id-schema-allof-0.md "check type definition")

* any of

  * [DocumentNode](document-node-schema.md "check type definition")

  * [DocumentFragmentNode](document-fragment-node-schema.md "check type definition")

  * [DocumentTypeNode](document-type-node-schema.md "check type definition")

  * [ElementNode](element-node-schema.md "check type definition")

  * [TextNode](text-node-schema.md "check type definition")

  * [CDataNode](cdata-node-schema.md "check type definition")

## initialOffset

Initial node offset position.

`initialOffset`

* is required

* Type: `object` ([Details](node-schema-properties-initialoffset.md))

* cannot be null

* defined in: [BrowserNode](node-schema-properties-initialoffset.md "session-replay/browser/node-schema.json#/properties/initialOffset")

### initialOffset Type

`object` ([Details](node-schema-properties-initialoffset.md))
