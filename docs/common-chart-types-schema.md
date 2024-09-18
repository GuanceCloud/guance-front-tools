# ChartType Schema

```txt
charts/common/common-chart-types-schema.json
```

支持图表类型枚举

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [common-chart-types-schema.json](../out/charts/common/common-chart-types-schema.json "open original schema") |

## ChartType Type

`string` ([ChartType](common-chart-types-schema.md))

## ChartType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"group"`      |             |
| `"sequence"`   |             |
| `"singlestat"` |             |
| `"pie"`        |             |
| `"bar"`        |             |
| `"histogram"`  |             |
| `"slo"`        |             |
| `"toplist"`    |             |
| `"gauge"`      |             |
| `"scatter"`    |             |
| `"bubble"`     |             |
| `"table"`      |             |
| `"treemap"`    |             |
| `"funnel"`     |             |
| `"chinamap"`   |             |
| `"worldmap"`   |             |
| `"hexgon"`     |             |
| `"heatmap"`    |             |
| `"topology"`   |             |
| `"sankey"`     |             |
| `"log"`        |             |
| `"object"`     |             |
| `"alarm"`      |             |
| `"text"`       |             |
| `"video"`      |             |
| `"picture"`    |             |
| `"command"`    |             |
| `"iframe"`     |             |
