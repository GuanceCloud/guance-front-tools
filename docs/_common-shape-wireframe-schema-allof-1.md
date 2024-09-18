# Untitled undefined type in CommonShapeWireframe Schema

```txt
session-replay/mobile/_common-shape-wireframe-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [\_common-shape-wireframe-schema.json\*](../out/session-replay/mobile/_common-shape-wireframe-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                  | Type   | Required | Nullable       | Defined by                                                                                                                   |
| :------------------------ | :----- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| [shapeStyle](#shapestyle) | Merged | Optional | cannot be null | [CommonShapeWireframe](shape-style-schema.md "session-replay/mobile/shape-style-schema.json#/allOf/1/properties/shapeStyle") |
| [border](#border)         | Merged | Optional | cannot be null | [CommonShapeWireframe](shape-border-schema.md "session-replay/mobile/shape-border-schema.json#/allOf/1/properties/border")   |

## shapeStyle

The style of this wireframe.

`shapeStyle`

* is optional

* Type: `object` ([ShapeStyle](shape-style-schema.md))

* cannot be null

* defined in: [CommonShapeWireframe](shape-style-schema.md "session-replay/mobile/shape-style-schema.json#/allOf/1/properties/shapeStyle")

### shapeStyle Type

`object` ([ShapeStyle](shape-style-schema.md))

all of

* [Untitled undefined type in ShapeStyle](shape-style-schema-allof-0.md "check type definition")

## border

The border properties of this wireframe. The default value is null (no-border).

`border`

* is optional

* Type: `object` ([ShapeBorder](shape-border-schema.md))

* cannot be null

* defined in: [CommonShapeWireframe](shape-border-schema.md "session-replay/mobile/shape-border-schema.json#/allOf/1/properties/border")

### border Type

`object` ([ShapeBorder](shape-border-schema.md))

all of

* [Untitled undefined type in ShapeBorder](shape-border-schema-allof-0.md "check type definition")
