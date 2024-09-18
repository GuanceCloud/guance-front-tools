# Untitled object in SegmentContext Schema

```txt
session-replay/common/segment-context-schema.json#/properties/application
```

Application properties

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [segment-context-schema.json\*](../out/session-replay/common/segment-context-schema.json "open original schema") |

## application Type

`object` ([Details](segment-context-schema-properties-application.md))

# application Properties

| Property  | Type     | Required | Nullable       | Defined by                                                                                                                                                                 |
| :-------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id) | `string` | Required | cannot be null | [SegmentContext](segment-context-schema-properties-application-properties-id.md "session-replay/common/segment-context-schema.json#/properties/application/properties/id") |

## id

UUID of the application

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [SegmentContext](segment-context-schema-properties-application-properties-id.md "session-replay/common/segment-context-schema.json#/properties/application/properties/id")

### id Type

`string`

### id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-f0-9%5D%7B8%7D-%5Ba-f0-9%5D%7B4%7D-%5Ba-f0-9%5D%7B4%7D-%5Ba-f0-9%5D%7B4%7D-%5Ba-f0-9%5D%7B12%7D%24 "try regular expression with regexr.com")
