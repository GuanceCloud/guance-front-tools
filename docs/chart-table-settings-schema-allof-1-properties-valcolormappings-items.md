# Untitled object in ChartTableSettings Schema

```txt
charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valColorMappings/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-table-settings-schema.json\*](../out/charts/settings/chart-table-settings-schema.json "open original schema") |

## items Type

`object` ([Details](chart-table-settings-schema-allof-1-properties-valcolormappings-items.md))

# items Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                             |
| :---------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [field](#field)         | `string`      | Required | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valcolormappings-items-properties-field.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valColorMappings/items/properties/field")         |
| [value](#value)         | `array`       | Required | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valcolormappings-items-properties-value.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valColorMappings/items/properties/value")         |
| [bgColor](#bgcolor)     | `string`      | Required | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valcolormappings-items-properties-bgcolor.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valColorMappings/items/properties/bgColor")     |
| [fontColor](#fontcolor) | `string`      | Required | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valcolormappings-items-properties-fontcolor.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valColorMappings/items/properties/fontColor") |
| [operation](#operation) | Not specified | Required | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valcolormappings-items-properties-operation.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valColorMappings/items/properties/operation") |

## field

需要映射的指标字段名称

`field`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valcolormappings-items-properties-field.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valColorMappings/items/properties/field")

### field Type

`string`

## value



`value`

* is required

* Type: an array of merged types ([Details](chart-table-settings-schema-allof-1-properties-valcolormappings-items-properties-value-items.md))

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valcolormappings-items-properties-value.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valColorMappings/items/properties/value")

### value Type

an array of merged types ([Details](chart-table-settings-schema-allof-1-properties-valcolormappings-items-properties-value-items.md))

## bgColor

映射对应的背景颜色

`bgColor`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valcolormappings-items-properties-bgcolor.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valColorMappings/items/properties/bgColor")

### bgColor Type

`string`

## fontColor

映射对应的字体颜色

`fontColor`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valcolormappings-items-properties-fontcolor.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valColorMappings/items/properties/fontColor")

### fontColor Type

`string`

## operation

映射指标数据值的计算规则

`operation`

* is required

* Type: unknown

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valcolormappings-items-properties-operation.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valColorMappings/items/properties/operation")

### operation Type

unknown

### operation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `">"`       |             |
| `">="`      |             |
| `"<"`       |             |
| `"<="`      |             |
| `"="`       |             |
| `"!="`      |             |
| `"between"` |             |
| `"=~"`      |             |
| `"!=~"`     |             |
| `"nodata"`  |             |
