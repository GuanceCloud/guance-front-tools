# Untitled string in ChartTimeSettings Schema

```txt
charts/settings/settings-time-schema.json#/properties/timeInterval
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [settings-time-schema.json\*](../out/charts/settings/settings-time-schema.json "open original schema") |

## timeInterval Type

`string`

## timeInterval Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"auto"`  |             |
| `"1ms"`   |             |
| `"10ms"`  |             |
| `"50ms"`  |             |
| `"100ms"` |             |
| `"500ms"` |             |
| `"1s"`    |             |
| `"10s"`   |             |
| `"20s"`   |             |
| `"30s"`   |             |
| `"1m"`    |             |
| `"5m"`    |             |
| `"10m"`   |             |
| `"30m"`   |             |
| `"1h"`    |             |
| `"6h"`    |             |
| `"12h"`   |             |
| `"1d"`    |             |
| `"7d"`    |             |
| `"30d"`   |             |

## timeInterval Default Value

The default value is:

```json
"auto"
```
