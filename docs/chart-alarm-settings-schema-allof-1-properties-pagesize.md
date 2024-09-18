# Untitled integer in ChartAlarmSettings Schema

```txt
charts/settings/chart-alarm-settings-schema.json#/allOf/1/properties/pageSize
```

列表每页显示的最大日志数量

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                           |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [chart-alarm-settings-schema.json\*](../out/charts/settings/chart-alarm-settings-schema.json "open original schema") |

## pageSize Type

`integer`

## pageSize Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `10`  |             |
| `20`  |             |
| `50`  |             |
| `100` |             |

## pageSize Default Value

The default value is:

```json
50
```
