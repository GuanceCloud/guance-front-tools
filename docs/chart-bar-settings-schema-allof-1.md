# Untitled undefined type in ChartBarSettings Schema

```txt
charts/settings/chart-bar-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-bar-settings-schema.json\*](../out/charts/settings/chart-bar-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                             |
| :-------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [direction](#direction)           | `string`  | Optional | cannot be null | [ChartBarSettings](chart-bar-settings-schema-allof-1-properties-direction.md "charts/settings/chart-bar-settings-schema.json#/allOf/1/properties/direction")           |
| [alias](#alias)                   | `array`   | Optional | cannot be null | [ChartBarSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")                                                    |
| [colors](#colors)                 | `array`   | Optional | cannot be null | [ChartBarSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")                                                 |
| [levels](#levels)                 | `array`   | Optional | cannot be null | [ChartBarSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")                                                 |
| [stackType](#stacktype)           | `string`  | Optional | cannot be null | [ChartBarSettings](_common-settings-stack-type-schema.md "charts/settings/_common-settings-stack-type-schema.json#/allOf/1/properties/stackType")                      |
| [stackContent](#stackcontent)     | `string`  | Optional | cannot be null | [ChartBarSettings](_common-settings-stack-content-schema.md "charts/settings/_common-settings-stack-content-schema.json#/allOf/1/properties/stackContent")             |
| [openStack](#openstack)           | `boolean` | Optional | cannot be null | [ChartBarSettings](chart-bar-settings-schema-allof-1-properties-openstack.md "charts/settings/chart-bar-settings-schema.json#/allOf/1/properties/openStack")           |
| [showTopSize](#showtopsize)       | `boolean` | Optional | cannot be null | [ChartBarSettings](chart-bar-settings-schema-allof-1-properties-showtopsize.md "charts/settings/chart-bar-settings-schema.json#/allOf/1/properties/showTopSize")       |
| [aliasVersion](#aliasversion)     | `integer` | Optional | cannot be null | [ChartBarSettings](chart-bar-settings-schema-allof-1-properties-aliasversion.md "charts/settings/chart-bar-settings-schema.json#/allOf/1/properties/aliasVersion")     |
| [isTimeInterval](#istimeinterval) | `boolean` | Optional | cannot be null | [ChartBarSettings](chart-bar-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-bar-settings-schema.json#/allOf/1/properties/isTimeInterval") |
| [xAxisShowType](#xaxisshowtype)   | `string`  | Optional | cannot be null | [ChartBarSettings](chart-bar-settings-schema-allof-1-properties-xaxisshowtype.md "charts/settings/chart-bar-settings-schema.json#/allOf/1/properties/xAxisShowType")   |

## direction

柱状图显示类型，横向显示还是纵向显示

`direction`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartBarSettings](chart-bar-settings-schema-allof-1-properties-direction.md "charts/settings/chart-bar-settings-schema.json#/allOf/1/properties/direction")

### direction Type

`string`

### direction Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"vertical"`   |             |
| `"horizontal"` |             |

### direction Default Value

The default value is:

```json
"vertical"
```

## alias

图表别名配置完整结构。

`alias`

* is optional

* Type: `object[]` ([Details](settings-alias-schema-items.md))

* cannot be null

* defined in: [ChartBarSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")

### alias Type

`object[]` ([Details](settings-alias-schema-items.md))

## colors

图表颜色配置完整结构。

`colors`

* is optional

* Type: `object[]` ([Details](settings-colors-schema-items.md))

* cannot be null

* defined in: [ChartBarSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")

### colors Type

`object[]` ([Details](settings-colors-schema-items.md))

## levels

图表基线配置完整结构。

`levels`

* is optional

* Type: `object[]` ([Details](settings-levels-schema-items.md))

* cannot be null

* defined in: [ChartBarSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")

### levels Type

`object[]` ([Details](settings-levels-schema-items.md))

## stackType

柱状图堆叠模式

`stackType`

* is optional

* Type: `string` ([CommonChartStackTypeSettings](_common-settings-stack-type-schema.md))

* cannot be null

* defined in: [ChartBarSettings](_common-settings-stack-type-schema.md "charts/settings/_common-settings-stack-type-schema.json#/allOf/1/properties/stackType")

### stackType Type

`string` ([CommonChartStackTypeSettings](_common-settings-stack-type-schema.md))

### stackType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"time"`    |             |
| `"percent"` |             |

## stackContent

柱状图堆叠模式下，横坐标显示类型

`stackContent`

* is optional

* Type: `string` ([CommonChartStackContentSettings](_common-settings-stack-content-schema.md))

* cannot be null

* defined in: [ChartBarSettings](_common-settings-stack-content-schema.md "charts/settings/_common-settings-stack-content-schema.json#/allOf/1/properties/stackContent")

### stackContent Type

`string` ([CommonChartStackContentSettings](_common-settings-stack-content-schema.md))

### stackContent Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"group"` |             |
| `"index"` |             |

### stackContent Default Value

The default value is:

```json
"group"
```

## openStack

是否开启堆叠模式

`openStack`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartBarSettings](chart-bar-settings-schema-allof-1-properties-openstack.md "charts/settings/chart-bar-settings-schema.json#/allOf/1/properties/openStack")

### openStack Type

`boolean`

## showTopSize

是否是排行榜类型图表，柱状图固定为 false

`showTopSize`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartBarSettings](chart-bar-settings-schema-allof-1-properties-showtopsize.md "charts/settings/chart-bar-settings-schema.json#/allOf/1/properties/showTopSize")

### showTopSize Type

`boolean`

### showTopSize Constraints

**constant**: the value of this property must be equal to:

```json
false
```

## aliasVersion

区分别名版本，固定为 2

`aliasVersion`

* is optional

* Type: `integer`

* cannot be null

* defined in: [ChartBarSettings](chart-bar-settings-schema-allof-1-properties-aliasversion.md "charts/settings/chart-bar-settings-schema.json#/allOf/1/properties/aliasVersion")

### aliasVersion Type

`integer`

### aliasVersion Constraints

**constant**: the value of this property must be equal to:

```json
2
```

## isTimeInterval

是否开启时间分片，时序图固定开启

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartBarSettings](chart-bar-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-bar-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`

## xAxisShowType

横坐标显示类型，柱状图固定显示分组

`xAxisShowType`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartBarSettings](chart-bar-settings-schema-allof-1-properties-xaxisshowtype.md "charts/settings/chart-bar-settings-schema.json#/allOf/1/properties/xAxisShowType")

### xAxisShowType Type

`string`

### xAxisShowType Constraints

**constant**: the value of this property must be equal to:

```json
"groupBy"
```
