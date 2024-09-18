# SegmentContext Schema

```txt
session-replay/common/segment-context-schema.json
```

Schema of a Session Replay Segment context.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [segment-context-schema.json](../out/session-replay/common/segment-context-schema.json "open original schema") |

## SegmentContext Type

`object` ([SegmentContext](segment-context-schema.md))

# SegmentContext Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                     |
| :-------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [application](#application) | `object` | Required | cannot be null | [SegmentContext](segment-context-schema-properties-application.md "session-replay/common/segment-context-schema.json#/properties/application") |
| [session](#session)         | `object` | Required | cannot be null | [SegmentContext](segment-context-schema-properties-session.md "session-replay/common/segment-context-schema.json#/properties/session")         |
| [view](#view)               | `object` | Required | cannot be null | [SegmentContext](segment-context-schema-properties-view.md "session-replay/common/segment-context-schema.json#/properties/view")               |

## application

Application properties

`application`

* is required

* Type: `object` ([Details](segment-context-schema-properties-application.md))

* cannot be null

* defined in: [SegmentContext](segment-context-schema-properties-application.md "session-replay/common/segment-context-schema.json#/properties/application")

### application Type

`object` ([Details](segment-context-schema-properties-application.md))

## session

Session properties

`session`

* is required

* Type: `object` ([Details](segment-context-schema-properties-session.md))

* cannot be null

* defined in: [SegmentContext](segment-context-schema-properties-session.md "session-replay/common/segment-context-schema.json#/properties/session")

### session Type

`object` ([Details](segment-context-schema-properties-session.md))

## view

View properties

`view`

* is required

* Type: `object` ([Details](segment-context-schema-properties-view.md))

* cannot be null

* defined in: [SegmentContext](segment-context-schema-properties-view.md "session-replay/common/segment-context-schema.json#/properties/view")

### view Type

`object` ([Details](segment-context-schema-properties-view.md))
