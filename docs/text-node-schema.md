# TextNode Schema

```txt
session-replay/browser/text-node-schema.json
```

Schema of a Text Node.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [text-node-schema.json](../out/session-replay/browser/text-node-schema.json "open original schema") |

## TextNode Type

`object` ([TextNode](text-node-schema.md))

# TextNode Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                    |
| :-------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)               | `integer`     | Required | cannot be null | [TextNode](text-node-schema-properties-type.md "session-replay/browser/text-node-schema.json#/properties/type")               |
| [textContent](#textcontent) | `string`      | Required | cannot be null | [TextNode](text-node-schema-properties-textcontent.md "session-replay/browser/text-node-schema.json#/properties/textContent") |
| [isStyle](#isstyle)         | Not specified | Optional | cannot be null | [TextNode](text-node-schema-properties-isstyle.md "session-replay/browser/text-node-schema.json#/properties/isStyle")         |

## type

The type of this Node.

`type`

* is required

* Type: `integer`

* cannot be null

* defined in: [TextNode](text-node-schema-properties-type.md "session-replay/browser/text-node-schema.json#/properties/type")

### type Type

`integer`

### type Constraints

**constant**: the value of this property must be equal to:

```json
3
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## textContent

Text value for this Text Node

`textContent`

* is required

* Type: `string`

* cannot be null

* defined in: [TextNode](text-node-schema-properties-textcontent.md "session-replay/browser/text-node-schema.json#/properties/textContent")

### textContent Type

`string`

## isStyle



`isStyle`

* is optional

* Type: unknown

* cannot be null

* defined in: [TextNode](text-node-schema-properties-isstyle.md "session-replay/browser/text-node-schema.json#/properties/isStyle")

### isStyle Type

unknown

### isStyle Constraints

**constant**: the value of this property must be equal to:

```json
true
```
