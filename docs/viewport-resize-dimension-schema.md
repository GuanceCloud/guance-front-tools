# ViewportResizeDimension Schema

```txt
session-replay/common/viewport-resize-dimension-schema.json
```

Schema of a ViewportResizeDimension.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [viewport-resize-dimension-schema.json](../out/session-replay/common/viewport-resize-dimension-schema.json "open original schema") |

## ViewportResizeDimension Type

`object` ([ViewportResizeDimension](viewport-resize-dimension-schema.md))

# ViewportResizeDimension Properties

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                                                        |
| :---------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [width](#width)   | `integer` | Required | cannot be null | [ViewportResizeDimension](viewport-resize-dimension-schema-properties-width.md "session-replay/common/viewport-resize-dimension-schema.json#/properties/width")   |
| [height](#height) | `integer` | Required | cannot be null | [ViewportResizeDimension](viewport-resize-dimension-schema-properties-height.md "session-replay/common/viewport-resize-dimension-schema.json#/properties/height") |

## width

The new width of the screen in pixels, normalized based on the device pixels per inch density (DPI). Example: if a device has a DPI = 2, the width is divided by 2 to get a normalized width.

`width`

* is required

* Type: `integer`

* cannot be null

* defined in: [ViewportResizeDimension](viewport-resize-dimension-schema-properties-width.md "session-replay/common/viewport-resize-dimension-schema.json#/properties/width")

### width Type

`integer`

## height

The new height of the screen in pixels, normalized based on the device pixels per inch density (DPI). Example: if a device has a DPI = 2, the height is divided by 2 to get a normalized height.

`height`

* is required

* Type: `integer`

* cannot be null

* defined in: [ViewportResizeDimension](viewport-resize-dimension-schema-properties-height.md "session-replay/common/viewport-resize-dimension-schema.json#/properties/height")

### height Type

`integer`
