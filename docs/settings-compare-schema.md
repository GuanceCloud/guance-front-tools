# ChartCompare Schema

```txt
charts/settings/settings-compare-schema.json
```

图表同期对比配置完整结构。

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [settings-compare-schema.json](../out/charts/settings/settings-compare-schema.json "open original schema") |

## ChartCompare Type

`object` ([ChartCompare](settings-compare-schema.md))

# ChartCompare Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                               |
| :------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [compareChartType](#comparecharttype) | `string`  | Optional | cannot be null | [ChartCompare](common-chart-types-schema.md "charts/common/common-chart-types-schema.json#/properties/compareChartType")                 |
| [openCompare](#opencompare)           | `boolean` | Optional | cannot be null | [ChartCompare](settings-compare-schema-properties-opencompare.md "charts/settings/settings-compare-schema.json#/properties/openCompare") |
| [compareType](#comparetype)           | `array`   | Optional | cannot be null | [ChartCompare](settings-compare-schema-properties-comparetype.md "charts/settings/settings-compare-schema.json#/properties/compareType") |
| [compares](#compares)                 | `array`   | Optional | cannot be null | [ChartCompare](settings-compare-schema-properties-compares.md "charts/settings/settings-compare-schema.json#/properties/compares")       |

## compareChartType

支持图表类型枚举

`compareChartType`

* is optional

* Type: `string` ([ChartType](common-chart-types-schema.md))

* cannot be null

* defined in: [ChartCompare](common-chart-types-schema.md "charts/common/common-chart-types-schema.json#/properties/compareChartType")

### compareChartType Type

`string` ([ChartType](common-chart-types-schema.md))

### compareChartType Constraints

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

## openCompare

是否开启同环比功能

`openCompare`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartCompare](settings-compare-schema-properties-opencompare.md "charts/settings/settings-compare-schema.json#/properties/openCompare")

### openCompare Type

`boolean`

## compareType

选择的同环比类型

`compareType`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [ChartCompare](settings-compare-schema-properties-comparetype.md "charts/settings/settings-compare-schema.json#/properties/compareType")

### compareType Type

`string[]`

## compares

选择同环比对比的详细映射信息，与 compareType 对应

`compares`

* is optional

* Type: `object[]` ([Details](settings-compare-schema-properties-compares-items.md))

* cannot be null

* defined in: [ChartCompare](settings-compare-schema-properties-compares.md "charts/settings/settings-compare-schema.json#/properties/compares")

### compares Type

`object[]` ([Details](settings-compare-schema-properties-compares-items.md))
