# Untitled string in ChartAlarmSettings Schema

```txt
charts/settings/chart-alarm-settings-schema.json#/allOf/1/properties/showPart
```

告警统计图显示模式，可选配置分别为全部、仅统计图、仅告警列表

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                           |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [chart-alarm-settings-schema.json\*](../out/charts/settings/chart-alarm-settings-schema.json "open original schema") |

## showPart Type

`string`

## showPart Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"all"`       |             |
| `"statistic"` |             |
| `"list"`      |             |
