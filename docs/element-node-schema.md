# ElementNode Schema

```txt
session-replay/browser/element-node-schema.json
```

Schema of an Element Node.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [element-node-schema.json](../out/session-replay/browser/element-node-schema.json "open original schema") |

## ElementNode Type

`object` ([ElementNode](element-node-schema.md))

# ElementNode Properties

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                           |
| :------------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)             | `integer`     | Required | cannot be null | [ElementNode](element-node-schema-properties-type.md "session-replay/browser/element-node-schema.json#/properties/type")             |
| [tagName](#tagname)       | `string`      | Required | cannot be null | [ElementNode](element-node-schema-properties-tagname.md "session-replay/browser/element-node-schema.json#/properties/tagName")       |
| [attributes](#attributes) | `object`      | Required | cannot be null | [ElementNode](attributes-schema.md "session-replay/browser/attributes-schema.json#/properties/attributes")                           |
| [childNodes](#childnodes) | `array`       | Required | cannot be null | [ElementNode](element-node-schema-properties-childnodes.md "session-replay/browser/element-node-schema.json#/properties/childNodes") |
| [isSVG](#issvg)           | Not specified | Optional | cannot be null | [ElementNode](element-node-schema-properties-issvg.md "session-replay/browser/element-node-schema.json#/properties/isSVG")           |

## type

The type of this Node.

`type`

* is required

* Type: `integer`

* cannot be null

* defined in: [ElementNode](element-node-schema-properties-type.md "session-replay/browser/element-node-schema.json#/properties/type")

### type Type

`integer`

### type Constraints

**constant**: the value of this property must be equal to:

```json
2
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## tagName

TagName for this Node

`tagName`

* is required

* Type: `string`

* cannot be null

* defined in: [ElementNode](element-node-schema-properties-tagname.md "session-replay/browser/element-node-schema.json#/properties/tagName")

### tagName Type

`string`

## attributes

Schema of an Attributes type.

`attributes`

* is required

* Type: `object` ([Attributes](attributes-schema.md))

* cannot be null

* defined in: [ElementNode](attributes-schema.md "session-replay/browser/attributes-schema.json#/properties/attributes")

### attributes Type

`object` ([Attributes](attributes-schema.md))

## childNodes



`childNodes`

* is required

* Type: `object[]` ([SerializedNodeWithId](serialized-node-with-id-schema.md))

* cannot be null

* defined in: [ElementNode](element-node-schema-properties-childnodes.md "session-replay/browser/element-node-schema.json#/properties/childNodes")

### childNodes Type

`object[]` ([SerializedNodeWithId](serialized-node-with-id-schema.md))

## isSVG

Is this node a SVG instead of a HTML

`isSVG`

* is optional

* Type: unknown

* cannot be null

* defined in: [ElementNode](element-node-schema-properties-issvg.md "session-replay/browser/element-node-schema.json#/properties/isSVG")

### isSVG Type

unknown

### isSVG Constraints

**constant**: the value of this property must be equal to:

```json
true
```
