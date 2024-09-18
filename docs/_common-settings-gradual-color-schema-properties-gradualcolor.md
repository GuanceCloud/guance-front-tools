# Untitled object in CommonGradualColorSettings Schema

```txt
charts/settings/_common-settings-gradual-color-schema.json#/properties/gradualColor
```

颜色匹配设置

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [\_common-settings-gradual-color-schema.json\*](../out/charts/settings/_common-settings-gradual-color-schema.json "open original schema") |

## gradualColor Type

`object` ([Details](_common-settings-gradual-color-schema-properties-gradualcolor.md))

# gradualColor Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                       |
| :------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)             | `string`  | Required | cannot be null | [CommonGradualColorSettings](_common-settings-gradual-color-schema-properties-gradualcolor-properties-type.md "charts/settings/_common-settings-gradual-color-schema.json#/properties/gradualColor/properties/type")             |
| [colorKey](#colorkey)     | `string`  | Required | cannot be null | [CommonGradualColorSettings](_common-settings-gradual-color-schema-properties-gradualcolor-properties-colorkey.md "charts/settings/_common-settings-gradual-color-schema.json#/properties/gradualColor/properties/colorKey")     |
| [minVal](#minval)         | `integer` | Optional | cannot be null | [CommonGradualColorSettings](_common-settings-gradual-color-schema-properties-gradualcolor-properties-minval.md "charts/settings/_common-settings-gradual-color-schema.json#/properties/gradualColor/properties/minVal")         |
| [maxVal](#maxval)         | `integer` | Optional | cannot be null | [CommonGradualColorSettings](_common-settings-gradual-color-schema-properties-gradualcolor-properties-maxval.md "charts/settings/_common-settings-gradual-color-schema.json#/properties/gradualColor/properties/maxVal")         |
| [levelCount](#levelcount) | `integer` | Required | cannot be null | [CommonGradualColorSettings](_common-settings-gradual-color-schema-properties-gradualcolor-properties-levelcount.md "charts/settings/_common-settings-gradual-color-schema.json#/properties/gradualColor/properties/levelCount") |
| [levels](#levels)         | `array`   | Optional | cannot be null | [CommonGradualColorSettings](_common-settings-gradual-color-schema-properties-gradualcolor-properties-levels.md "charts/settings/_common-settings-gradual-color-schema.json#/properties/gradualColor/properties/levels")         |

## type

颜色匹配设置模式，可以根据颜色色系，自动匹配数值对应色块

`type`

* is required

* Type: `string`

* cannot be null

* defined in: [CommonGradualColorSettings](_common-settings-gradual-color-schema-properties-gradualcolor-properties-type.md "charts/settings/_common-settings-gradual-color-schema.json#/properties/gradualColor/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"auto"`   |             |
| `"custom"` |             |

## colorKey

提供选择的色系

`colorKey`

* is required

* Type: `string`

* cannot be null

* defined in: [CommonGradualColorSettings](_common-settings-gradual-color-schema-properties-gradualcolor-properties-colorkey.md "charts/settings/_common-settings-gradual-color-schema.json#/properties/gradualColor/properties/colorKey")

### colorKey Type

`string`

### colorKey Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                 | Explanation |
| :-------------------- | :---------- |
| `"interpolateYlOrBr"` |             |
| `"interpolateBuPu"`   |             |
| `"interpolatePuBu"`   |             |
| `"interpolateBuGn"`   |             |

## minVal

在自动模式下，可以手动设置区间范围最小值

`minVal`

* is optional

* Type: `integer`

* cannot be null

* defined in: [CommonGradualColorSettings](_common-settings-gradual-color-schema-properties-gradualcolor-properties-minval.md "charts/settings/_common-settings-gradual-color-schema.json#/properties/gradualColor/properties/minVal")

### minVal Type

`integer`

## maxVal

在自动模式下，可以手动设置的区间范围最大值

`maxVal`

* is optional

* Type: `integer`

* cannot be null

* defined in: [CommonGradualColorSettings](_common-settings-gradual-color-schema-properties-gradualcolor-properties-maxval.md "charts/settings/_common-settings-gradual-color-schema.json#/properties/gradualColor/properties/maxVal")

### maxVal Type

`integer`

## levelCount

在渐变区间发范围内，可以手动填写生成的色块数量

`levelCount`

* is required

* Type: `integer`

* cannot be null

* defined in: [CommonGradualColorSettings](_common-settings-gradual-color-schema-properties-gradualcolor-properties-levelcount.md "charts/settings/_common-settings-gradual-color-schema.json#/properties/gradualColor/properties/levelCount")

### levelCount Type

`integer`

## levels

自定义模式下，设置的区间映射列表

`levels`

* is optional

* Type: `object[]` ([Details](_common-settings-gradual-color-schema-properties-gradualcolor-properties-levels-items.md))

* cannot be null

* defined in: [CommonGradualColorSettings](_common-settings-gradual-color-schema-properties-gradualcolor-properties-levels.md "charts/settings/_common-settings-gradual-color-schema.json#/properties/gradualColor/properties/levels")

### levels Type

`object[]` ([Details](_common-settings-gradual-color-schema-properties-gradualcolor-properties-levels-items.md))
