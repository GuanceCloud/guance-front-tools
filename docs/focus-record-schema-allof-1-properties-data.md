# Untitled object in FocusRecord Schema

```txt
session-replay/common/focus-record-schema.json#/allOf/1/properties/data
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [focus-record-schema.json\*](../out/session-replay/common/focus-record-schema.json "open original schema") |

## data Type

`object` ([Details](focus-record-schema-allof-1-properties-data.md))

# data Properties

| Property                 | Type      | Required | Nullable       | Defined by                                                                                                                                                                        |
| :----------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [has\_focus](#has_focus) | `boolean` | Required | cannot be null | [FocusRecord](focus-record-schema-allof-1-properties-data-properties-has_focus.md "session-replay/common/focus-record-schema.json#/allOf/1/properties/data/properties/has_focus") |

## has\_focus

Whether this screen has a focus or not. For now it will always be true for mobile.

`has_focus`

* is required

* Type: `boolean`

* cannot be null

* defined in: [FocusRecord](focus-record-schema-allof-1-properties-data-properties-has_focus.md "session-replay/common/focus-record-schema.json#/allOf/1/properties/data/properties/has_focus")

### has\_focus Type

`boolean`

### has\_focus Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
