# RemovedNodeMutation Schema

```txt
session-replay/browser/node-removed-mutation-schema.json
```

Schema of a RemovedNodeMutation.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [node-removed-mutation-schema.json](../out/session-replay/browser/node-removed-mutation-schema.json "open original schema") |

## RemovedNodeMutation Type

`object` ([RemovedNodeMutation](node-removed-mutation-schema.md))

# RemovedNodeMutation Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                 |
| :-------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `integer` | Required | cannot be null | [RemovedNodeMutation](node-removed-mutation-schema-properties-id.md "session-replay/browser/node-removed-mutation-schema.json#/properties/id")             |
| [parentId](#parentid) | `integer` | Required | cannot be null | [RemovedNodeMutation](node-removed-mutation-schema-properties-parentid.md "session-replay/browser/node-removed-mutation-schema.json#/properties/parentId") |

## id

Id of the mutated node.

`id`

* is required

* Type: `integer`

* cannot be null

* defined in: [RemovedNodeMutation](node-removed-mutation-schema-properties-id.md "session-replay/browser/node-removed-mutation-schema.json#/properties/id")

### id Type

`integer`

## parentId

Id for the parent node for this RemovedNodeMutation

`parentId`

* is required

* Type: `integer`

* cannot be null

* defined in: [RemovedNodeMutation](node-removed-mutation-schema-properties-parentid.md "session-replay/browser/node-removed-mutation-schema.json#/properties/parentId")

### parentId Type

`integer`
