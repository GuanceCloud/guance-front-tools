# Untitled undefined type in WebviewWireframe Schema

```txt
session-replay/mobile/webview-wireframe-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [webview-wireframe-schema.json\*](../out/session-replay/mobile/webview-wireframe-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                       |
| :---------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)           | `string`  | Required | cannot be null | [WebviewWireframe](webview-wireframe-schema-allof-1-properties-type.md "session-replay/mobile/webview-wireframe-schema.json#/allOf/1/properties/type")           |
| [slotId](#slotid)       | `string`  | Required | cannot be null | [WebviewWireframe](webview-wireframe-schema-allof-1-properties-slotid.md "session-replay/mobile/webview-wireframe-schema.json#/allOf/1/properties/slotId")       |
| [isVisible](#isvisible) | `boolean` | Optional | cannot be null | [WebviewWireframe](webview-wireframe-schema-allof-1-properties-isvisible.md "session-replay/mobile/webview-wireframe-schema.json#/allOf/1/properties/isVisible") |

## type

The type of the wireframe.

`type`

* is required

* Type: `string`

* cannot be null

* defined in: [WebviewWireframe](webview-wireframe-schema-allof-1-properties-type.md "session-replay/mobile/webview-wireframe-schema.json#/allOf/1/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"webview"
```

### type Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## slotId

Unique Id of the slot containing this webview.

`slotId`

* is required

* Type: `string`

* cannot be null

* defined in: [WebviewWireframe](webview-wireframe-schema-allof-1-properties-slotid.md "session-replay/mobile/webview-wireframe-schema.json#/allOf/1/properties/slotId")

### slotId Type

`string`

### slotId Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## isVisible

Whether this webview is visible or not.

`isVisible`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [WebviewWireframe](webview-wireframe-schema-allof-1-properties-isvisible.md "session-replay/mobile/webview-wireframe-schema.json#/allOf/1/properties/isVisible")

### isVisible Type

`boolean`

### isVisible Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
