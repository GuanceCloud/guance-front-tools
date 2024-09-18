# Untitled undefined type in ImageWireframe Schema

```txt
session-replay/mobile/image-wireframe-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [image-wireframe-schema.json\*](../out/session-replay/mobile/image-wireframe-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                   |
| :------------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)             | `string`  | Required | cannot be null | [ImageWireframe](image-wireframe-schema-allof-1-properties-type.md "session-replay/mobile/image-wireframe-schema.json#/allOf/1/properties/type")             |
| [base64](#base64)         | `string`  | Optional | cannot be null | [ImageWireframe](image-wireframe-schema-allof-1-properties-base64.md "session-replay/mobile/image-wireframe-schema.json#/allOf/1/properties/base64")         |
| [resourceId](#resourceid) | `string`  | Optional | cannot be null | [ImageWireframe](image-wireframe-schema-allof-1-properties-resourceid.md "session-replay/mobile/image-wireframe-schema.json#/allOf/1/properties/resourceId") |
| [mimeType](#mimetype)     | `string`  | Optional | cannot be null | [ImageWireframe](image-wireframe-schema-allof-1-properties-mimetype.md "session-replay/mobile/image-wireframe-schema.json#/allOf/1/properties/mimeType")     |
| [isEmpty](#isempty)       | `boolean` | Optional | cannot be null | [ImageWireframe](image-wireframe-schema-allof-1-properties-isempty.md "session-replay/mobile/image-wireframe-schema.json#/allOf/1/properties/isEmpty")       |

## type

The type of the wireframe.

`type`

* is required

* Type: `string`

* cannot be null

* defined in: [ImageWireframe](image-wireframe-schema-allof-1-properties-type.md "session-replay/mobile/image-wireframe-schema.json#/allOf/1/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"image"
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## base64

base64 representation of the image. Not required as the ImageWireframe can be initialised without any base64

`base64`

* is optional

* Type: `string`

* cannot be null

* defined in: [ImageWireframe](image-wireframe-schema-allof-1-properties-base64.md "session-replay/mobile/image-wireframe-schema.json#/allOf/1/properties/base64")

### base64 Type

`string`

## resourceId

Unique identifier of the image resource

`resourceId`

* is optional

* Type: `string`

* cannot be null

* defined in: [ImageWireframe](image-wireframe-schema-allof-1-properties-resourceid.md "session-replay/mobile/image-wireframe-schema.json#/allOf/1/properties/resourceId")

### resourceId Type

`string`

## mimeType

MIME type of the image file

`mimeType`

* is optional

* Type: `string`

* cannot be null

* defined in: [ImageWireframe](image-wireframe-schema-allof-1-properties-mimetype.md "session-replay/mobile/image-wireframe-schema.json#/allOf/1/properties/mimeType")

### mimeType Type

`string`

## isEmpty

Flag describing an image wireframe that should render an empty state placeholder

`isEmpty`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ImageWireframe](image-wireframe-schema-allof-1-properties-isempty.md "session-replay/mobile/image-wireframe-schema.json#/allOf/1/properties/isEmpty")

### isEmpty Type

`boolean`
