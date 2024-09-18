# Untitled object in ChartUnitsSettings Schema

```txt
charts/settings/settings-units-schema.json#/properties/units/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [settings-units-schema.json\*](../out/charts/settings/settings-units-schema.json "open original schema") |

## items Type

`object` ([Details](settings-units-schema-properties-units-items.md))

# items Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                 |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)   | `string` | Required | cannot be null | [ChartUnitsSettings](settings-units-schema-properties-units-items-properties-name.md "charts/settings/settings-units-schema.json#/properties/units/items/properties/name") |
| [key](#key)     | `string` | Required | cannot be null | [ChartUnitsSettings](settings-units-schema-properties-units-items-properties-key.md "charts/settings/settings-units-schema.json#/properties/units/items/properties/key")   |
| [unit](#unit)   | `string` | Required | cannot be null | [ChartUnitsSettings](settings-units-schema-properties-units-items-properties-unit.md "charts/settings/settings-units-schema.json#/properties/units/items/properties/unit") |
| [units](#units) | `array`  | Optional | cannot be null | [ChartUnitsSettings](settings-unit-items-schema.md "charts/settings/settings-unit-items-schema.json#/properties/units/items/properties/units")                             |

## name

需要设置的指标名称,冗余字段

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartUnitsSettings](settings-units-schema-properties-units-items-properties-name.md "charts/settings/settings-units-schema.json#/properties/units/items/properties/name")

### name Type

`string`

### name Examples

```json
"avg(load5s)"
```

## key

需要设置的指标名称

`key`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartUnitsSettings](settings-units-schema-properties-units-items-properties-key.md "charts/settings/settings-units-schema.json#/properties/units/items/properties/key")

### key Type

`string`

### key Examples

```json
"avg(load5s)"
```

## unit

自定义类型的单位,填充的单位名称

`unit`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartUnitsSettings](settings-units-schema-properties-units-items-properties-unit.md "charts/settings/settings-units-schema.json#/properties/units/items/properties/unit")

### unit Type

`string`

## units

图表单位数据配置

`units`

* is optional

* Type: an array where each item follows the corresponding schema in the following list:

  1. [Untitled undefined type in ChartUnitItemsSettings](settings-unit-items-schema-items-0.md "check type definition")

  2. [Untitled undefined type in ChartUnitItemsSettings](settings-unit-items-schema-items-1.md "check type definition")

* cannot be null

* defined in: [ChartUnitsSettings](settings-unit-items-schema.md "charts/settings/settings-unit-items-schema.json#/properties/units/items/properties/units")

### units Type

an array where each item follows the corresponding schema in the following list:

1. [Untitled undefined type in ChartUnitItemsSettings](settings-unit-items-schema-items-0.md "check type definition")

2. [Untitled undefined type in ChartUnitItemsSettings](settings-unit-items-schema-items-1.md "check type definition")

### units Constraints

**maximum number of items**: the maximum number of items for this array is: `2`
