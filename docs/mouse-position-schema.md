# MousePosition Schema

```txt
session-replay/browser/mouse-position-schema.json
```

Browser-specific. Schema of a MousePosition.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [mouse-position-schema.json](../out/session-replay/browser/mouse-position-schema.json "open original schema") |

## MousePosition Type

`object` ([MousePosition](mouse-position-schema.md))

# MousePosition Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                 |
| :------------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [x](#x)                   | `number`  | Required | cannot be null | [MousePosition](mouse-position-schema-properties-x.md "session-replay/browser/mouse-position-schema.json#/properties/x")                   |
| [y](#y)                   | `number`  | Required | cannot be null | [MousePosition](mouse-position-schema-properties-y.md "session-replay/browser/mouse-position-schema.json#/properties/y")                   |
| [id](#id)                 | `integer` | Required | cannot be null | [MousePosition](mouse-position-schema-properties-id.md "session-replay/browser/mouse-position-schema.json#/properties/id")                 |
| [timeOffset](#timeoffset) | `integer` | Required | cannot be null | [MousePosition](mouse-position-schema-properties-timeoffset.md "session-replay/browser/mouse-position-schema.json#/properties/timeOffset") |

## x

X-axis coordinate for this MousePosition.

`x`

* is required

* Type: `number`

* cannot be null

* defined in: [MousePosition](mouse-position-schema-properties-x.md "session-replay/browser/mouse-position-schema.json#/properties/x")

### x Type

`number`

## y

Y-axis coordinate for this MousePosition.

`y`

* is required

* Type: `number`

* cannot be null

* defined in: [MousePosition](mouse-position-schema-properties-y.md "session-replay/browser/mouse-position-schema.json#/properties/y")

### y Type

`number`

## id

Id for the target node for this MousePosition.

`id`

* is required

* Type: `integer`

* cannot be null

* defined in: [MousePosition](mouse-position-schema-properties-id.md "session-replay/browser/mouse-position-schema.json#/properties/id")

### id Type

`integer`

## timeOffset

Observed time offset for this MousePosition.

`timeOffset`

* is required

* Type: `integer`

* cannot be null

* defined in: [MousePosition](mouse-position-schema-properties-timeoffset.md "session-replay/browser/mouse-position-schema.json#/properties/timeOffset")

### timeOffset Type

`integer`
