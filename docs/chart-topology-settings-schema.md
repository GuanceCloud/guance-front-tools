# ChartTopologySettings Schema

```txt
charts/settings/chart-topology-settings-schema.json
```

拓扑图配置信息

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-topology-settings-schema.json](../out/charts/settings/chart-topology-settings-schema.json "open original schema") |

## ChartTopologySettings Type

`object` ([ChartTopologySettings](chart-topology-settings-schema.md))

# ChartTopologySettings Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                    |
| :------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [showTitle](#showtitle)   | `boolean` | Optional | cannot be null | [ChartTopologySettings](chart-topology-settings-schema-properties-showtitle.md "charts/settings/chart-topology-settings-schema.json#/properties/showTitle")   |
| [titleDesc](#titledesc)   | `string`  | Optional | cannot be null | [ChartTopologySettings](chart-topology-settings-schema-properties-titledesc.md "charts/settings/chart-topology-settings-schema.json#/properties/titleDesc")   |
| [showLegend](#showlegend) | `string`  | Optional | cannot be null | [ChartTopologySettings](chart-topology-settings-schema-properties-showlegend.md "charts/settings/chart-topology-settings-schema.json#/properties/showLegend") |
| [fixedTime](#fixedtime)   | Merged    | Optional | cannot be null | [ChartTopologySettings](settings-fixed-time-schema.md "charts/settings/settings-fixed-time-schema.json#/properties/fixedTime")                                |
| [color](#color)           | `object`  | Optional | cannot be null | [ChartTopologySettings](chart-topology-settings-schema-properties-color.md "charts/settings/chart-topology-settings-schema.json#/properties/color")           |
| Additional Properties     | Any       | Optional | can be null    |                                                                                                                                                               |

## showTitle

是否显示图表标题

`showTitle`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartTopologySettings](chart-topology-settings-schema-properties-showtitle.md "charts/settings/chart-topology-settings-schema.json#/properties/showTitle")

### showTitle Type

`boolean`

### showTitle Default Value

The default value is:

```json
true
```

## titleDesc

图表的描述信息

`titleDesc`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartTopologySettings](chart-topology-settings-schema-properties-titledesc.md "charts/settings/chart-topology-settings-schema.json#/properties/titleDesc")

### titleDesc Type

`string`

## showLegend

显示图例的位置信息，可以选择隐藏，以及在底部区域

`showLegend`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartTopologySettings](chart-topology-settings-schema-properties-showlegend.md "charts/settings/chart-topology-settings-schema.json#/properties/showLegend")

### showLegend Type

`string`

### showLegend Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"none"`   |             |
| `"bottom"` |             |

## fixedTime

固定图表查询的时间范围，无视仪表板和其他页面上的时间选择器

`fixedTime`

* is optional

* Type: merged type ([Details](settings-fixed-time-schema.md))

* cannot be null

* defined in: [ChartTopologySettings](settings-fixed-time-schema.md "charts/settings/settings-fixed-time-schema.json#/properties/fixedTime")

### fixedTime Type

merged type ([Details](settings-fixed-time-schema.md))

any of

* [Untitled string in undefined](settings-fixed-time-schema-anyof-0.md "check type definition")

* [Untitled object in undefined](settings-fixed-time-schema-anyof-1.md "check type definition")

## color

颜色配置

`color`

* is optional

* Type: `object` ([Details](chart-topology-settings-schema-properties-color.md))

* cannot be null

* defined in: [ChartTopologySettings](chart-topology-settings-schema-properties-color.md "charts/settings/chart-topology-settings-schema.json#/properties/color")

### color Type

`object` ([Details](chart-topology-settings-schema-properties-color.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
