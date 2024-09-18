# CommonWireframe Schema

```txt
session-replay/mobile/_common-wireframe-schema.json
```

Schema of common properties for Wireframe events type.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [\_common-wireframe-schema.json](../out/session-replay/mobile/_common-wireframe-schema.json "open original schema") |

## CommonWireframe Type

`object` ([CommonWireframe](_common-wireframe-schema.md))

# CommonWireframe Properties

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                                |
| :---------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)         | `integer` | Required | cannot be null | [CommonWireframe](_common-wireframe-schema-properties-id.md "session-replay/mobile/_common-wireframe-schema.json#/properties/id")         |
| [x](#x)           | `integer` | Required | cannot be null | [CommonWireframe](_common-wireframe-schema-properties-x.md "session-replay/mobile/_common-wireframe-schema.json#/properties/x")           |
| [y](#y)           | `integer` | Required | cannot be null | [CommonWireframe](_common-wireframe-schema-properties-y.md "session-replay/mobile/_common-wireframe-schema.json#/properties/y")           |
| [width](#width)   | `integer` | Required | cannot be null | [CommonWireframe](_common-wireframe-schema-properties-width.md "session-replay/mobile/_common-wireframe-schema.json#/properties/width")   |
| [height](#height) | `integer` | Required | cannot be null | [CommonWireframe](_common-wireframe-schema-properties-height.md "session-replay/mobile/_common-wireframe-schema.json#/properties/height") |
| [clip](#clip)     | `object`  | Optional | cannot be null | [CommonWireframe](wireframe-clip-schema.md "session-replay/mobile/wireframe-clip-schema.json#/properties/clip")                           |

## id

Defines the unique ID of the wireframe. This is persistent throughout the view lifetime.

`id`

* is required

* Type: `integer`

* cannot be null

* defined in: [CommonWireframe](_common-wireframe-schema-properties-id.md "session-replay/mobile/_common-wireframe-schema.json#/properties/id")

### id Type

`integer`

### id Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## x

The position in pixels on X axis of the UI element in absolute coordinates. The anchor point is always the top-left corner of the wireframe.

`x`

* is required

* Type: `integer`

* cannot be null

* defined in: [CommonWireframe](_common-wireframe-schema-properties-x.md "session-replay/mobile/_common-wireframe-schema.json#/properties/x")

### x Type

`integer`

### x Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## y

The position in pixels on Y axis of the UI element in absolute coordinates. The anchor point is always the top-left corner of the wireframe.

`y`

* is required

* Type: `integer`

* cannot be null

* defined in: [CommonWireframe](_common-wireframe-schema-properties-y.md "session-replay/mobile/_common-wireframe-schema.json#/properties/y")

### y Type

`integer`

### y Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## width

The width in pixels of the UI element, normalized based on the device pixels per inch density (DPI). Example: if a device has a DPI = 2, the width of all UI elements is divided by 2 to get a normalized width.

`width`

* is required

* Type: `integer`

* cannot be null

* defined in: [CommonWireframe](_common-wireframe-schema-properties-width.md "session-replay/mobile/_common-wireframe-schema.json#/properties/width")

### width Type

`integer`

### width Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## height

The height in pixels of the UI element, normalized based on the device pixels per inch density (DPI). Example: if a device has a DPI = 2, the height of all UI elements is divided by 2 to get a normalized height.

`height`

* is required

* Type: `integer`

* cannot be null

* defined in: [CommonWireframe](_common-wireframe-schema-properties-height.md "session-replay/mobile/_common-wireframe-schema.json#/properties/height")

### height Type

`integer`

### height Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## clip

Schema of clipping information for a Wireframe.

`clip`

* is optional

* Type: `object` ([WireframeClip](wireframe-clip-schema.md))

* cannot be null

* defined in: [CommonWireframe](wireframe-clip-schema.md "session-replay/mobile/wireframe-clip-schema.json#/properties/clip")

### clip Type

`object` ([WireframeClip](wireframe-clip-schema.md))
