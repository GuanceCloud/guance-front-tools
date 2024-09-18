# Untitled object in TextPosition Schema

```txt
session-replay/mobile/text-position-schema.json#/allOf/0/properties/padding
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | Read only           | [text-position-schema.json\*](../out/session-replay/mobile/text-position-schema.json "open original schema") |

## padding Type

`object` ([Details](text-position-schema-allof-0-properties-padding.md))

# padding Properties

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                                                                           |
| :---------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [top](#top)       | `integer` | Optional | cannot be null | [TextPosition](text-position-schema-allof-0-properties-padding-properties-top.md "session-replay/mobile/text-position-schema.json#/allOf/0/properties/padding/properties/top")       |
| [bottom](#bottom) | `integer` | Optional | cannot be null | [TextPosition](text-position-schema-allof-0-properties-padding-properties-bottom.md "session-replay/mobile/text-position-schema.json#/allOf/0/properties/padding/properties/bottom") |
| [left](#left)     | `integer` | Optional | cannot be null | [TextPosition](text-position-schema-allof-0-properties-padding-properties-left.md "session-replay/mobile/text-position-schema.json#/allOf/0/properties/padding/properties/left")     |
| [right](#right)   | `integer` | Optional | cannot be null | [TextPosition](text-position-schema-allof-0-properties-padding-properties-right.md "session-replay/mobile/text-position-schema.json#/allOf/0/properties/padding/properties/right")   |

## top

The top padding in pixels. The default value is 0.

`top`

* is optional

* Type: `integer`

* cannot be null

* defined in: [TextPosition](text-position-schema-allof-0-properties-padding-properties-top.md "session-replay/mobile/text-position-schema.json#/allOf/0/properties/padding/properties/top")

### top Type

`integer`

### top Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## bottom

The bottom padding in pixels. The default value is 0.

`bottom`

* is optional

* Type: `integer`

* cannot be null

* defined in: [TextPosition](text-position-schema-allof-0-properties-padding-properties-bottom.md "session-replay/mobile/text-position-schema.json#/allOf/0/properties/padding/properties/bottom")

### bottom Type

`integer`

### bottom Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## left

The left padding in pixels. The default value is 0.

`left`

* is optional

* Type: `integer`

* cannot be null

* defined in: [TextPosition](text-position-schema-allof-0-properties-padding-properties-left.md "session-replay/mobile/text-position-schema.json#/allOf/0/properties/padding/properties/left")

### left Type

`integer`

### left Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## right

The right padding in pixels. The default value is 0.

`right`

* is optional

* Type: `integer`

* cannot be null

* defined in: [TextPosition](text-position-schema-allof-0-properties-padding-properties-right.md "session-replay/mobile/text-position-schema.json#/allOf/0/properties/padding/properties/right")

### right Type

`integer`

### right Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
