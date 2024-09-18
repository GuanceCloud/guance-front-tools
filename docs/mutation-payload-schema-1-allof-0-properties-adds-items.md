# Untitled object in MobileMutationPayload Schema

```txt
session-replay/mobile/mutation-payload-schema.json#/allOf/0/properties/adds/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [mutation-payload-schema.json\*](../out/session-replay/mobile/mutation-payload-schema.json "open original schema") |

## items Type

`object` ([Details](mutation-payload-schema-1-allof-0-properties-adds-items.md))

# items Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                          |
| :------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [previousId](#previousid) | `integer` | Optional | cannot be null | [MobileMutationPayload](mutation-payload-schema-1-allof-0-properties-adds-items-properties-previousid.md "session-replay/mobile/mutation-payload-schema.json#/allOf/0/properties/adds/items/properties/previousId") |
| [wireframe](#wireframe)   | Merged    | Required | cannot be null | [MobileMutationPayload](wireframe-schema.md "session-replay/mobile/wireframe-schema.json#/allOf/0/properties/adds/items/properties/wireframe")                                                                      |

## previousId

The previous wireframe id next or after which this new wireframe is drawn or attached to, respectively.

`previousId`

* is optional

* Type: `integer`

* cannot be null

* defined in: [MobileMutationPayload](mutation-payload-schema-1-allof-0-properties-adds-items-properties-previousid.md "session-replay/mobile/mutation-payload-schema.json#/allOf/0/properties/adds/items/properties/previousId")

### previousId Type

`integer`

## wireframe

Schema of a Wireframe type.

`wireframe`

* is required

* Type: `object` ([Wireframe](wireframe-schema.md))

* cannot be null

* defined in: [MobileMutationPayload](wireframe-schema.md "session-replay/mobile/wireframe-schema.json#/allOf/0/properties/adds/items/properties/wireframe")

### wireframe Type

`object` ([Wireframe](wireframe-schema.md))

one (and only one) of

* all of

  * all of

    * [CommonWireframe](_common-wireframe-schema.md "check type definition")

    * [Untitled undefined type in CommonShapeWireframe](_common-shape-wireframe-schema-allof-1.md "check type definition")

  * [Untitled undefined type in ShapeWireframe](shape-wireframe-schema-allof-1.md "check type definition")

* all of

  * all of

    * [CommonWireframe](_common-wireframe-schema.md "check type definition")

    * [Untitled undefined type in CommonShapeWireframe](_common-shape-wireframe-schema-allof-1.md "check type definition")

  * [Untitled undefined type in TextWireframe](text-wireframe-schema-allof-1.md "check type definition")

* all of

  * all of

    * [CommonWireframe](_common-wireframe-schema.md "check type definition")

    * [Untitled undefined type in CommonShapeWireframe](_common-shape-wireframe-schema-allof-1.md "check type definition")

  * [Untitled undefined type in ImageWireframe](image-wireframe-schema-allof-1.md "check type definition")

* all of

  * [CommonWireframe](_common-wireframe-schema.md "check type definition")

  * [Untitled undefined type in PlaceholderWireframe](placeholder-wireframe-schema-allof-1.md "check type definition")

* all of

  * all of

    * [CommonWireframe](_common-wireframe-schema.md "check type definition")

    * [Untitled undefined type in CommonShapeWireframe](_common-shape-wireframe-schema-allof-1.md "check type definition")

  * [Untitled undefined type in WebviewWireframe](webview-wireframe-schema-allof-1.md "check type definition")
