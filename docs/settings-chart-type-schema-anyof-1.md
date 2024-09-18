# Untitled undefined type in ChartChartType Schema

```txt
charts/settings/settings-chart-type-schema.json#/anyOf/1
```

饼图不同图表类型

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [settings-chart-type-schema.json\*](../out/charts/settings/settings-chart-type-schema.json "open original schema") |

## 1 Type

unknown

## 1 Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"pie"`        |             |
| `"doughnut"`   |             |
| `"customized"` |             |

## 1 Default Value

The default value is:

```json
"pie"
```
