# AddedNodeMutation Schema

```txt
session-replay/browser/node-added-mutation-schema.json
```

Schema of an AddedNodeMutation.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [node-added-mutation-schema.json](../out/session-replay/browser/node-added-mutation-schema.json "open original schema") |

## AddedNodeMutation Type

`object` ([AddedNodeMutation](node-added-mutation-schema.md))

# AddedNodeMutation Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                               |
| :------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [node](#node)             | Merged    | Required | cannot be null | [AddedNodeMutation](serialized-node-with-id-schema.md "session-replay/browser/serialized-node-with-id-schema.json#/properties/node")                     |
| [parentId](#parentid)     | `integer` | Required | cannot be null | [AddedNodeMutation](node-added-mutation-schema-properties-parentid.md "session-replay/browser/node-added-mutation-schema.json#/properties/parentId")     |
| [nextId](#nextid)         | Merged    | Required | cannot be null | [AddedNodeMutation](node-added-mutation-schema-properties-nextid.md "session-replay/browser/node-added-mutation-schema.json#/properties/nextId")         |
| [previousId](#previousid) | Merged    | Optional | cannot be null | [AddedNodeMutation](node-added-mutation-schema-properties-previousid.md "session-replay/browser/node-added-mutation-schema.json#/properties/previousId") |

## node

Serialized node contained by this Record.

`node`

* is required

* Type: `object` ([SerializedNodeWithId](serialized-node-with-id-schema.md))

* cannot be null

* defined in: [AddedNodeMutation](serialized-node-with-id-schema.md "session-replay/browser/serialized-node-with-id-schema.json#/properties/node")

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

## parentId

Id for the parent node for this AddedNodeMutation.

`parentId`

* is required

* Type: `integer`

* cannot be null

* defined in: [AddedNodeMutation](node-added-mutation-schema-properties-parentid.md "session-replay/browser/node-added-mutation-schema.json#/properties/parentId")

### parentId Type

`integer`

## nextId



`nextId`

* is required

* Type: merged type ([Details](node-added-mutation-schema-properties-nextid.md))

* cannot be null

* defined in: [AddedNodeMutation](node-added-mutation-schema-properties-nextid.md "session-replay/browser/node-added-mutation-schema.json#/properties/nextId")

### nextId Type

merged type ([Details](node-added-mutation-schema-properties-nextid.md))

any of

* [Untitled integer in AddedNodeMutation](node-added-mutation-schema-properties-nextid-anyof-0.md "check type definition")

* [Untitled null in AddedNodeMutation](node-added-mutation-schema-properties-nextid-anyof-1.md "check type definition")

## previousId



`previousId`

* is optional

* Type: merged type ([Details](node-added-mutation-schema-properties-previousid.md))

* cannot be null

* defined in: [AddedNodeMutation](node-added-mutation-schema-properties-previousid.md "session-replay/browser/node-added-mutation-schema.json#/properties/previousId")

### previousId Type

merged type ([Details](node-added-mutation-schema-properties-previousid.md))

any of

* [Untitled integer in AddedNodeMutation](node-added-mutation-schema-properties-previousid-anyof-0.md "check type definition")

* [Untitled null in AddedNodeMutation](node-added-mutation-schema-properties-previousid-anyof-1.md "check type definition")
