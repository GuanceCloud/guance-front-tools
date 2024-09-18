# Untitled undefined type in ChartGaugeSettings Schema

```txt
charts/settings/chart-gauge-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-gauge-settings-schema.json\*](../out/charts/settings/chart-gauge-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                   |
| :-------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [alias](#alias)                   | `array`   | Optional | cannot be null | [ChartGaugeSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")                                                        |
| [colors](#colors)                 | `array`   | Optional | cannot be null | [ChartGaugeSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")                                                     |
| [min](#min)                       | `integer` | Optional | cannot be null | [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-min.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/min")                       |
| [max](#max)                       | `integer` | Optional | cannot be null | [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-max.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/max")                       |
| [levels](#levels)                 | `array`   | Optional | cannot be null | [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-levels.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/levels")                 |
| [isTimeInterval](#istimeinterval) | `boolean` | Optional | cannot be null | [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/isTimeInterval") |

## alias

图表别名配置完整结构。

`alias`

* is optional

* Type: `object[]` ([Details](settings-alias-schema-items.md))

* cannot be null

* defined in: [ChartGaugeSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")

### alias Type

`object[]` ([Details](settings-alias-schema-items.md))

## colors

图表颜色配置完整结构。

`colors`

* is optional

* Type: `object[]` ([Details](settings-colors-schema-items.md))

* cannot be null

* defined in: [ChartGaugeSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")

### colors Type

`object[]` ([Details](settings-colors-schema-items.md))

## min

仪表盘分段阈值最小值

`min`

* is optional

* Type: `integer`

* cannot be null

* defined in: [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-min.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/min")

### min Type

`integer`

## max

仪表盘分段阈值最大值

`max`

* is optional

* Type: `integer`

* cannot be null

* defined in: [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-max.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/max")

### max Type

`integer`

### max Default Value

The default value is:

```json
100
```

## levels

仪表盘分段阈值设置

`levels`

* is optional

* Type: `object[]` ([Details](chart-gauge-settings-schema-allof-1-properties-levels-items.md))

* cannot be null

* defined in: [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-levels.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/levels")

### levels Type

`object[]` ([Details](chart-gauge-settings-schema-allof-1-properties-levels-items.md))

## isTimeInterval

是否开启时间分片

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`
