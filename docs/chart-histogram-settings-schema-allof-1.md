# Untitled undefined type in ChartHistogramSettings Schema

```txt
charts/settings/chart-histogram-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-histogram-settings-schema.json\*](../out/charts/settings/chart-histogram-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                               |
| :-------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [alias](#alias)                   | `array`   | Optional | cannot be null | [ChartHistogramSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")                                                                |
| [colors](#colors)                 | `array`   | Optional | cannot be null | [ChartHistogramSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")                                                             |
| [levels](#levels)                 | `array`   | Optional | cannot be null | [ChartHistogramSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")                                                             |
| [legendPostion](#legendpostion)   | `string`  | Optional | cannot be null | [ChartHistogramSettings](_common-settings-legend-position-schema.md "charts/settings/_common-settings-legend-position-schema.json#/allOf/1/properties/legendPostion")                    |
| [isTimeInterval](#istimeinterval) | `boolean` | Optional | cannot be null | [ChartHistogramSettings](chart-histogram-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-histogram-settings-schema.json#/allOf/1/properties/isTimeInterval") |
| [chartType](#charttype)           | `string`  | Optional | cannot be null | [ChartHistogramSettings](chart-histogram-settings-schema-allof-1-properties-charttype.md "charts/settings/chart-histogram-settings-schema.json#/allOf/1/properties/chartType")           |
| [direction](#direction)           | `string`  | Optional | cannot be null | [ChartHistogramSettings](chart-histogram-settings-schema-allof-1-properties-direction.md "charts/settings/chart-histogram-settings-schema.json#/allOf/1/properties/direction")           |

## alias

图表别名配置完整结构。

`alias`

* is optional

* Type: `object[]` ([Details](settings-alias-schema-items.md))

* cannot be null

* defined in: [ChartHistogramSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")

### alias Type

`object[]` ([Details](settings-alias-schema-items.md))

## colors

图表颜色配置完整结构。

`colors`

* is optional

* Type: `object[]` ([Details](settings-colors-schema-items.md))

* cannot be null

* defined in: [ChartHistogramSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")

### colors Type

`object[]` ([Details](settings-colors-schema-items.md))

## levels

图表基线配置完整结构。

`levels`

* is optional

* Type: `object[]` ([Details](settings-levels-schema-items.md))

* cannot be null

* defined in: [ChartHistogramSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")

### levels Type

`object[]` ([Details](settings-levels-schema-items.md))

## legendPostion

图表图列位置显示配置信息

`legendPostion`

* is optional

* Type: `string` ([CommonChartLegendPositionSettings](_common-settings-legend-position-schema.md))

* cannot be null

* defined in: [ChartHistogramSettings](_common-settings-legend-position-schema.md "charts/settings/_common-settings-legend-position-schema.json#/allOf/1/properties/legendPostion")

### legendPostion Type

`string` ([CommonChartLegendPositionSettings](_common-settings-legend-position-schema.md))

### legendPostion Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"none"`   |             |
| `"bottom"` |             |
| `"right"`  |             |
| `"circle"` |             |

### legendPostion Default Value

The default value is:

```json
"none"
```

## isTimeInterval

是否开启时间分片

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartHistogramSettings](chart-histogram-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-histogram-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`

## chartType

冗余字段，固定为 histogram

`chartType`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartHistogramSettings](chart-histogram-settings-schema-allof-1-properties-charttype.md "charts/settings/chart-histogram-settings-schema.json#/allOf/1/properties/chartType")

### chartType Type

`string`

### chartType Constraints

**constant**: the value of this property must be equal to:

```json
"histogram"
```

## direction

冗余字段，固定为 vertical

`direction`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartHistogramSettings](chart-histogram-settings-schema-allof-1-properties-direction.md "charts/settings/chart-histogram-settings-schema.json#/allOf/1/properties/direction")

### direction Type

`string`

### direction Constraints

**constant**: the value of this property must be equal to:

```json
"vertical"
```
