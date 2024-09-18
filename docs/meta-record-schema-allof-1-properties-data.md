# Untitled object in MetaRecord Schema

```txt
session-replay/common/meta-record-schema.json#/allOf/1/properties/data
```

The data contained by this record.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [meta-record-schema.json\*](../out/session-replay/common/meta-record-schema.json "open original schema") |

## data Type

`object` ([Details](meta-record-schema-allof-1-properties-data.md))

# data Properties

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                                                               |
| :---------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [width](#width)   | `integer` | Required | cannot be null | [MetaRecord](meta-record-schema-allof-1-properties-data-properties-width.md "session-replay/common/meta-record-schema.json#/allOf/1/properties/data/properties/width")   |
| [height](#height) | `integer` | Required | cannot be null | [MetaRecord](meta-record-schema-allof-1-properties-data-properties-height.md "session-replay/common/meta-record-schema.json#/allOf/1/properties/data/properties/height") |
| [href](#href)     | `string`  | Optional | cannot be null | [MetaRecord](meta-record-schema-allof-1-properties-data-properties-href.md "session-replay/common/meta-record-schema.json#/allOf/1/properties/data/properties/href")     |

## width

The width of the screen in pixels, normalized based on the device pixels per inch density (DPI). Example: if a device has a DPI = 2, the normalized width is the current width divided by 2.

`width`

* is required

* Type: `integer`

* cannot be null

* defined in: [MetaRecord](meta-record-schema-allof-1-properties-data-properties-width.md "session-replay/common/meta-record-schema.json#/allOf/1/properties/data/properties/width")

### width Type

`integer`

## height

The height of the screen in pixels, normalized based on the device pixels per inch density (DPI). Example: if a device has a DPI = 2, the normalized height is the current height divided by 2.

`height`

* is required

* Type: `integer`

* cannot be null

* defined in: [MetaRecord](meta-record-schema-allof-1-properties-data-properties-height.md "session-replay/common/meta-record-schema.json#/allOf/1/properties/data/properties/height")

### height Type

`integer`

## href

Browser-specific. URL of the view described by this record.

`href`

* is optional

* Type: `string`

* cannot be null

* defined in: [MetaRecord](meta-record-schema-allof-1-properties-data-properties-href.md "session-replay/common/meta-record-schema.json#/allOf/1/properties/data/properties/href")

### href Type

`string`
