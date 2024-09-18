# Untitled object in ChartTableSettings Schema

```txt
charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valMappings/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-table-settings-schema.json\*](../out/charts/settings/chart-table-settings-schema.json "open original schema") |

## items Type

`object` ([Details](chart-table-settings-schema-allof-1-properties-valmappings-items.md))

# items Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                       |
| :-------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [field](#field)             | `string`      | Optional | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-field.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valMappings/items/properties/field")             |
| [originalVal](#originalval) | `array`       | Optional | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-originalval.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valMappings/items/properties/originalVal") |
| [mappingVal](#mappingval)   | Merged        | Optional | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-mappingval.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valMappings/items/properties/mappingVal")   |
| [operation](#operation)     | Not specified | Optional | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-operation.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valMappings/items/properties/operation")     |

## field

需要映射的指标字段名称

`field`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-field.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valMappings/items/properties/field")

### field Type

`string`

## originalVal



`originalVal`

* is optional

* Type: an array of merged types ([Details](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-originalval-items.md))

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-originalval.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valMappings/items/properties/originalVal")

### originalVal Type

an array of merged types ([Details](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-originalval-items.md))

## mappingVal

映射对应的显示文本

`mappingVal`

* is optional

* Type: merged type ([Details](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-mappingval.md))

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-mappingval.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valMappings/items/properties/mappingVal")

### mappingVal Type

merged type ([Details](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-mappingval.md))

any of

* [Untitled string in ChartTableSettings](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-mappingval-anyof-0.md "check type definition")

* [Untitled integer in ChartTableSettings](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-mappingval-anyof-1.md "check type definition")

## operation

映射表达式操作符

`operation`

* is optional

* Type: unknown

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valmappings-items-properties-operation.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valMappings/items/properties/operation")

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
