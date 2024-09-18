# Untitled object in BrowserNode Schema

```txt
session-replay/browser/node-schema.json#/properties/initialOffset
```

Initial node offset position.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [node-schema.json\*](../out/session-replay/browser/node-schema.json "open original schema") |

## initialOffset Type

`object` ([Details](node-schema-properties-initialoffset.md))

# initialOffset Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                                 |
| :------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [top](#top)   | `number` | Required | cannot be null | [BrowserNode](node-schema-properties-initialoffset-properties-top.md "session-replay/browser/node-schema.json#/properties/initialOffset/properties/top")   |
| [left](#left) | `number` | Required | cannot be null | [BrowserNode](node-schema-properties-initialoffset-properties-left.md "session-replay/browser/node-schema.json#/properties/initialOffset/properties/left") |

## top

Top position offset for this node.

`top`

* is required

* Type: `number`

* cannot be null

* defined in: [BrowserNode](node-schema-properties-initialoffset-properties-top.md "session-replay/browser/node-schema.json#/properties/initialOffset/properties/top")

### top Type

`number`

## left

Left position offset for this node.

`left`

* is required

* Type: `number`

* cannot be null

* defined in: [BrowserNode](node-schema-properties-initialoffset-properties-left.md "session-replay/browser/node-schema.json#/properties/initialOffset/properties/left")

### left Type

`number`
