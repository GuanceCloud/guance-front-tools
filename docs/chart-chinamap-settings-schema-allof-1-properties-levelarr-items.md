# Untitled object in ChartChinaMapSettings Schema

```txt
charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/levelArr/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-chinamap-settings-schema.json\*](../out/charts/settings/chart-chinamap-settings-schema.json "open original schema") |

## items Type

`object` ([Details](chart-chinamap-settings-schema-allof-1-properties-levelarr-items.md))

# items Properties

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                |
| :---------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [min](#min)       | `integer` | Required | cannot be null | [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-levelarr-items-properties-min.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/levelArr/items/properties/min")       |
| [max](#max)       | `integer` | Required | cannot be null | [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-levelarr-items-properties-max.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/levelArr/items/properties/max")       |
| [color](#color)   | `string`  | Required | cannot be null | [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-levelarr-items-properties-color.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/levelArr/items/properties/color")   |
| [isAuto](#isauto) | `boolean` | Optional | cannot be null | [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-levelarr-items-properties-isauto.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/levelArr/items/properties/isAuto") |

## min

区间左范围值

`min`

* is required

* Type: `integer`

* cannot be null

* defined in: [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-levelarr-items-properties-min.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/levelArr/items/properties/min")

### min Type

`integer`

## max

区间右范围值

`max`

* is required

* Type: `integer`

* cannot be null

* defined in: [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-levelarr-items-properties-max.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/levelArr/items/properties/max")

### max Type

`integer`

## color

区间范围内显示色值

`color`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-levelarr-items-properties-color.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/levelArr/items/properties/color")

### color Type

`string`

## isAuto

是否是自动生成的区间范围

`isAuto`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-levelarr-items-properties-isauto.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/levelArr/items/properties/isAuto")

### isAuto Type

`boolean`
