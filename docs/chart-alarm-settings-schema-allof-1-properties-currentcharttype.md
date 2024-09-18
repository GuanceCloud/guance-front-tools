# Untitled string in ChartAlarmSettings Schema

```txt
charts/settings/chart-alarm-settings-schema.json#/allOf/1/properties/currentChartType
```

冗余字段，在对象列表图中，固定为 alarm

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                           |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | Read only           | [chart-alarm-settings-schema.json\*](../out/charts/settings/chart-alarm-settings-schema.json "open original schema") |

## currentChartType Type

`string`

## currentChartType Constraints

**constant**: the value of this property must be equal to:

```json
"alarm"
```
