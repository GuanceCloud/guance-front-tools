# MousemoveData Schema

```txt
session-replay/browser/mouse-move-data-schema.json
```

Browser-specific. Schema of a MousemoveData.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [mouse-move-data-schema.json](../out/session-replay/browser/mouse-move-data-schema.json "open original schema") |

## MousemoveData Type

`object` ([MousemoveData](mouse-move-data-schema.md))

# MousemoveData Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                 |
| :---------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [source](#source)       | `integer` | Required | cannot be null | [MousemoveData](mouse-move-data-schema-properties-source.md "session-replay/browser/mouse-move-data-schema.json#/properties/source")       |
| [positions](#positions) | `array`   | Required | cannot be null | [MousemoveData](mouse-move-data-schema-properties-positions.md "session-replay/browser/mouse-move-data-schema.json#/properties/positions") |

## source

The source of this type of incremental data.

`source`

* is required

* Type: `integer`

* cannot be null

* defined in: [MousemoveData](mouse-move-data-schema-properties-source.md "session-replay/browser/mouse-move-data-schema.json#/properties/source")

### source Type

`integer`

### source Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `1`   |             |
| `6`   |             |

### source Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## positions

Positions reported for this MousemoveData.

`positions`

* is required

* Type: `object[]` ([MousePosition](mouse-position-schema.md))

* cannot be null

* defined in: [MousemoveData](mouse-move-data-schema-properties-positions.md "session-replay/browser/mouse-move-data-schema.json#/properties/positions")

### positions Type

`object[]` ([MousePosition](mouse-position-schema.md))
