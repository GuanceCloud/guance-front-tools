# Untitled object in SegmentContext Schema

```txt
session-replay/common/segment-context-schema.json#/properties/view
```

View properties

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [segment-context-schema.json\*](../out/session-replay/common/segment-context-schema.json "open original schema") |

## view Type

`object` ([Details](segment-context-schema-properties-view.md))

# view Properties

| Property  | Type     | Required | Nullable       | Defined by                                                                                                                                                   |
| :-------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id) | `string` | Required | cannot be null | [SegmentContext](segment-context-schema-properties-view-properties-id.md "session-replay/common/segment-context-schema.json#/properties/view/properties/id") |

## id

UUID of the view

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [SegmentContext](segment-context-schema-properties-view-properties-id.md "session-replay/common/segment-context-schema.json#/properties/view/properties/id")

### id Type

`string`

### id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-f0-9%5D%7B8%7D-%5Ba-f0-9%5D%7B4%7D-%5Ba-f0-9%5D%7B4%7D-%5Ba-f0-9%5D%7B4%7D-%5Ba-f0-9%5D%7B12%7D%24 "try regular expression with regexr.com")
