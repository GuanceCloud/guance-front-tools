# Untitled undefined type in BrowserSegmentMetadata Schema

```txt
session-replay/browser/segment-metadata-schema.json#/allOf/2
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [segment-metadata-schema.json\*](../out/session-replay/browser/segment-metadata-schema.json "open original schema") |

## 2 Type

unknown

# 2 Properties

| Property                             | Type     | Required | Nullable       | Defined by                                                                                                                                                      |
| :----------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [source](#source)                    | `string` | Required | cannot be null | [BrowserSegmentMetadata](segment-metadata-schema-allof-2-properties-source.md "session-replay/browser/segment-metadata-schema.json#/allOf/2/properties/source") |
| [creation\_reason](#creation_reason) | `string` | Required | cannot be null | [BrowserSegmentMetadata](creation-reason-schema.md "session-replay/browser/creation-reason-schema.json#/allOf/2/properties/creation_reason")                    |

## source

The source of this record

`source`

* is required

* Type: `string`

* cannot be null

* defined in: [BrowserSegmentMetadata](segment-metadata-schema-allof-2-properties-source.md "session-replay/browser/segment-metadata-schema.json#/allOf/2/properties/source")

### source Type

`string`

### source Constraints

**constant**: the value of this property must be equal to:

```json
"browser"
```

## creation\_reason

The reason this Segment was created. For mobile there is only one possible value for this, which is always the default value.

`creation_reason`

* is required

* Type: `string` ([CreationReason](creation-reason-schema.md))

* cannot be null

* defined in: [BrowserSegmentMetadata](creation-reason-schema.md "session-replay/browser/creation-reason-schema.json#/allOf/2/properties/creation_reason")

### creation\_reason Type

`string` ([CreationReason](creation-reason-schema.md))

### creation\_reason Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"init"`                   |             |
| `"segment_duration_limit"` |             |
| `"segment_bytes_limit"`    |             |
| `"view_change"`            |             |
| `"before_unload"`          |             |
| `"visibility_hidden"`      |             |
| `"page_frozen"`            |             |

### creation\_reason Default Value

The default value is:

```json
"init"
```
