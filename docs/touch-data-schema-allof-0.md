# Untitled undefined type in TouchData Schema

```txt
session-replay/mobile/touch-data-schema.json#/allOf/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [touch-data-schema.json\*](../out/session-replay/mobile/touch-data-schema.json "open original schema") |

## 0 Type

unknown

# 0 Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                  |
| :---------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| [source](#source)       | `integer` | Required | cannot be null | [TouchData](touch-data-schema-allof-0-properties-source.md "session-replay/mobile/touch-data-schema.json#/allOf/0/properties/source")       |
| [positions](#positions) | `array`   | Optional | cannot be null | [TouchData](touch-data-schema-allof-0-properties-positions.md "session-replay/mobile/touch-data-schema.json#/allOf/0/properties/positions") |

## source

The source of this type of incremental data.

`source`

* is required

* Type: `integer`

* cannot be null

* defined in: [TouchData](touch-data-schema-allof-0-properties-source.md "session-replay/mobile/touch-data-schema.json#/allOf/0/properties/source")

### source Type

`integer`

### source Constraints

**constant**: the value of this property must be equal to:

```json
2
```

### source Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## positions

Contains the positions of the finger on the screen during the touchDown/touchUp event lifecycle.

`positions`

* is optional

* Type: `object[]` ([Details](touch-data-schema-allof-0-properties-positions-items.md))

* cannot be null

* defined in: [TouchData](touch-data-schema-allof-0-properties-positions.md "session-replay/mobile/touch-data-schema.json#/allOf/0/properties/positions")

### positions Type

`object[]` ([Details](touch-data-schema-allof-0-properties-positions-items.md))

### positions Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
