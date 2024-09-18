# WireframeClip Schema

```txt
session-replay/mobile/wireframe-clip-schema.json
```

Schema of clipping information for a Wireframe.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [wireframe-clip-schema.json](../out/session-replay/mobile/wireframe-clip-schema.json "open original schema") |

## WireframeClip Type

`object` ([WireframeClip](wireframe-clip-schema.md))

# WireframeClip Properties

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                        |
| :---------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [top](#top)       | `integer` | Optional | cannot be null | [WireframeClip](wireframe-clip-schema-properties-top.md "session-replay/mobile/wireframe-clip-schema.json#/properties/top")       |
| [bottom](#bottom) | `integer` | Optional | cannot be null | [WireframeClip](wireframe-clip-schema-properties-bottom.md "session-replay/mobile/wireframe-clip-schema.json#/properties/bottom") |
| [left](#left)     | `integer` | Optional | cannot be null | [WireframeClip](wireframe-clip-schema-properties-left.md "session-replay/mobile/wireframe-clip-schema.json#/properties/left")     |
| [right](#right)   | `integer` | Optional | cannot be null | [WireframeClip](wireframe-clip-schema-properties-right.md "session-replay/mobile/wireframe-clip-schema.json#/properties/right")   |

## top

The amount of space in pixels that needs to be clipped (masked) at the top of the wireframe.

`top`

* is optional

* Type: `integer`

* cannot be null

* defined in: [WireframeClip](wireframe-clip-schema-properties-top.md "session-replay/mobile/wireframe-clip-schema.json#/properties/top")

### top Type

`integer`

### top Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## bottom

The amount of space in pixels that needs to be clipped (masked) at the bottom of the wireframe.

`bottom`

* is optional

* Type: `integer`

* cannot be null

* defined in: [WireframeClip](wireframe-clip-schema-properties-bottom.md "session-replay/mobile/wireframe-clip-schema.json#/properties/bottom")

### bottom Type

`integer`

### bottom Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## left

The amount of space in pixels that needs to be clipped (masked) at the left of the wireframe.

`left`

* is optional

* Type: `integer`

* cannot be null

* defined in: [WireframeClip](wireframe-clip-schema-properties-left.md "session-replay/mobile/wireframe-clip-schema.json#/properties/left")

### left Type

`integer`

### left Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## right

The amount of space in pixels that needs to be clipped (masked) at the right of the wireframe.

`right`

* is optional

* Type: `integer`

* cannot be null

* defined in: [WireframeClip](wireframe-clip-schema-properties-right.md "session-replay/mobile/wireframe-clip-schema.json#/properties/right")

### right Type

`integer`

### right Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
