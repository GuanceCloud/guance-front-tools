# Untitled object in ChartData Schema

```txt
charts/chart-schema.json#/properties/pos
```

图表位置信息

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-schema.json\*](../out/charts/chart-schema.json "open original schema") |

## pos Type

`object` ([Details](chart-schema-properties-pos.md))

# pos Properties

| Property | Type      | Required | Nullable       | Defined by                                                                                                       |
| :------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------- |
| [h](#h)  | `integer` | Required | cannot be null | [ChartData](chart-schema-properties-pos-properties-h.md "charts/chart-schema.json#/properties/pos/properties/h") |
| [w](#w)  | `integer` | Required | cannot be null | [ChartData](chart-schema-properties-pos-properties-w.md "charts/chart-schema.json#/properties/pos/properties/w") |
| [x](#x)  | `integer` | Required | cannot be null | [ChartData](chart-schema-properties-pos-properties-x.md "charts/chart-schema.json#/properties/pos/properties/x") |
| [y](#y)  | `integer` | Required | cannot be null | [ChartData](chart-schema-properties-pos-properties-y.md "charts/chart-schema.json#/properties/pos/properties/y") |

## h

图表高度,每行的高度默认为10像素,比如 h 为12, 则实际高度为 12 \* 10

`h`

* is required

* Type: `integer`

* cannot be null

* defined in: [ChartData](chart-schema-properties-pos-properties-h.md "charts/chart-schema.json#/properties/pos/properties/h")

### h Type

`integer`

## w

图表宽度,栅格系统的最大列数为 24, 比如 w为12，则显示宽度则为容器宽度的 1/2 倍

`w`

* is required

* Type: `integer`

* cannot be null

* defined in: [ChartData](chart-schema-properties-pos-properties-w.md "charts/chart-schema.json#/properties/pos/properties/w")

### w Type

`integer`

## x

图表距离容器的水平距离,栅格系统的最大列数为 24, 比如 x为12，则图表距离容器左边的水平距离为容器宽度 1/2 倍

`x`

* is required

* Type: `integer`

* cannot be null

* defined in: [ChartData](chart-schema-properties-pos-properties-x.md "charts/chart-schema.json#/properties/pos/properties/x")

### x Type

`integer`

## y

图表距离容器垂直距离,每行的高度默认为10像素,比如 y为12, 则实际高度为 12 \* 10

`y`

* is required

* Type: `integer`

* cannot be null

* defined in: [ChartData](chart-schema-properties-pos-properties-y.md "charts/chart-schema.json#/properties/pos/properties/y")

### y Type

`integer`
