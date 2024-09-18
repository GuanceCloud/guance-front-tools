# Untitled object in TextPosition Schema

```txt
session-replay/mobile/text-position-schema.json#/allOf/0/properties/alignment
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | Read only           | [text-position-schema.json\*](../out/session-replay/mobile/text-position-schema.json "open original schema") |

## alignment Type

`object` ([Details](text-position-schema-allof-0-properties-alignment.md))

# alignment Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                       |
| :------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [horizontal](#horizontal) | `string` | Optional | cannot be null | [TextPosition](text-position-schema-allof-0-properties-alignment-properties-horizontal.md "session-replay/mobile/text-position-schema.json#/allOf/0/properties/alignment/properties/horizontal") |
| [vertical](#vertical)     | `string` | Optional | cannot be null | [TextPosition](text-position-schema-allof-0-properties-alignment-properties-vertical.md "session-replay/mobile/text-position-schema.json#/allOf/0/properties/alignment/properties/vertical")     |

## horizontal

The horizontal text alignment. The default value is `left`.

`horizontal`

* is optional

* Type: `string`

* cannot be null

* defined in: [TextPosition](text-position-schema-allof-0-properties-alignment-properties-horizontal.md "session-replay/mobile/text-position-schema.json#/allOf/0/properties/alignment/properties/horizontal")

### horizontal Type

`string`

### horizontal Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"left"`   |             |
| `"right"`  |             |
| `"center"` |             |

### horizontal Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## vertical

The vertical text alignment. The default value is `top`.

`vertical`

* is optional

* Type: `string`

* cannot be null

* defined in: [TextPosition](text-position-schema-allof-0-properties-alignment-properties-vertical.md "session-replay/mobile/text-position-schema.json#/allOf/0/properties/alignment/properties/vertical")

### vertical Type

`string`

### vertical Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"top"`    |             |
| `"bottom"` |             |
| `"center"` |             |

### vertical Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
