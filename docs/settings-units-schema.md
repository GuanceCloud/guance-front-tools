# ChartUnitsSettings Schema

```txt
charts/settings/settings-units-schema.json
```

图表单位配置完整结构。

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [settings-units-schema.json](../out/charts/settings/settings-units-schema.json "open original schema") |

## ChartUnitsSettings Type

`object` ([ChartUnitsSettings](settings-units-schema.md))

# ChartUnitsSettings Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                           |
| :------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [unitType](#unittype)     | `string` | Required | cannot be null | [ChartUnitsSettings](settings-units-schema-properties-unittype.md "charts/settings/settings-units-schema.json#/properties/unitType") |
| [globalUnit](#globalunit) | `array`  | Optional | cannot be null | [ChartUnitsSettings](settings-unit-items-schema.md "charts/settings/settings-unit-items-schema.json#/properties/globalUnit")         |
| [units](#units)           | `array`  | Optional | cannot be null | [ChartUnitsSettings](settings-units-schema-properties-units.md "charts/settings/settings-units-schema.json#/properties/units")       |

## unitType

单位设置类型，分为全局和自定义两种类型

`unitType`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartUnitsSettings](settings-units-schema-properties-unittype.md "charts/settings/settings-units-schema.json#/properties/unitType")

### unitType Type

`string`

### unitType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"global"` |             |
| `"custom"` |             |

## globalUnit

图表单位数据配置

`globalUnit`

* is optional

* Type: an array where each item follows the corresponding schema in the following list:

  1. [Untitled undefined type in ChartUnitItemsSettings](settings-unit-items-schema-items-0.md "check type definition")

  2. [Untitled undefined type in ChartUnitItemsSettings](settings-unit-items-schema-items-1.md "check type definition")

* cannot be null

* defined in: [ChartUnitsSettings](settings-unit-items-schema.md "charts/settings/settings-unit-items-schema.json#/properties/globalUnit")

### globalUnit Type

an array where each item follows the corresponding schema in the following list:

1. [Untitled undefined type in ChartUnitItemsSettings](settings-unit-items-schema-items-0.md "check type definition")

2. [Untitled undefined type in ChartUnitItemsSettings](settings-unit-items-schema-items-1.md "check type definition")

### globalUnit Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

## units

根据指标自定义单位

`units`

* is optional

* Type: `object[]` ([Details](settings-units-schema-properties-units-items.md))

* cannot be null

* defined in: [ChartUnitsSettings](settings-units-schema-properties-units.md "charts/settings/settings-units-schema.json#/properties/units")

### units Type

`object[]` ([Details](settings-units-schema-properties-units-items.md))
