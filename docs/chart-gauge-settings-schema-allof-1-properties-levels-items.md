# Untitled object in ChartGaugeSettings Schema

```txt
charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/levels/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-gauge-settings-schema.json\*](../out/charts/settings/chart-gauge-settings-schema.json "open original schema") |

## items Type

`object` ([Details](chart-gauge-settings-schema-allof-1-properties-levels-items.md))

# items Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :---------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [value](#value)         | `array`  | Optional | cannot be null | [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-levels-items-properties-value.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/levels/items/properties/value")         |
| [lineColor](#linecolor) | `string` | Optional | cannot be null | [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-levels-items-properties-linecolor.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/levels/items/properties/lineColor") |
| [operation](#operation) | `string` | Optional | cannot be null | [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-levels-items-properties-operation.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/levels/items/properties/operation") |

## value



`value`

* is optional

* Type: `integer[]`

* cannot be null

* defined in: [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-levels-items-properties-value.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/levels/items/properties/value")

### value Type

`integer[]`

## lineColor

颜色色值

`lineColor`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-levels-items-properties-linecolor.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/levels/items/properties/lineColor")

### lineColor Type

`string`

## operation

表达式操作符,仪表盘固定值 <=

`operation`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartGaugeSettings](chart-gauge-settings-schema-allof-1-properties-levels-items-properties-operation.md "charts/settings/chart-gauge-settings-schema.json#/allOf/1/properties/levels/items/properties/operation")

### operation Type

`string`

### operation Constraints

**constant**: the value of this property must be equal to:

```json
"<="
```
