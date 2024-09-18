# Untitled object in ChartSinglestatSettings Schema

```txt
charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/mappings/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-singlestat-settings-schema.json\*](../out/charts/settings/chart-singlestat-settings-schema.json "open original schema") |

## items Type

`object` ([Details](chart-singlestat-settings-schema-allof-1-properties-mappings-items.md))

# items Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                |
| :-------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [originalVal](#originalval) | `array`       | Optional | cannot be null | [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-mappings-items-properties-originalval.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/mappings/items/properties/originalVal") |
| [operation](#operation)     | Not specified | Optional | cannot be null | [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-mappings-items-properties-operation.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/mappings/items/properties/operation")     |
| [mappingVal](#mappingval)   | Merged        | Optional | cannot be null | [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-mappings-items-properties-mappingval.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/mappings/items/properties/mappingVal")   |

## originalVal



`originalVal`

* is optional

* Type: an array of merged types ([Details](chart-singlestat-settings-schema-allof-1-properties-mappings-items-properties-originalval-items.md))

* cannot be null

* defined in: [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-mappings-items-properties-originalval.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/mappings/items/properties/originalVal")

### originalVal Type

an array of merged types ([Details](chart-singlestat-settings-schema-allof-1-properties-mappings-items-properties-originalval-items.md))

## operation

映射指标数据值的计算规则

`operation`

* is optional

* Type: unknown

* cannot be null

* defined in: [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-mappings-items-properties-operation.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/mappings/items/properties/operation")

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

## mappingVal

映射对应的显示文本

`mappingVal`

* is optional

* Type: merged type ([Details](chart-singlestat-settings-schema-allof-1-properties-mappings-items-properties-mappingval.md))

* cannot be null

* defined in: [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-mappings-items-properties-mappingval.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/mappings/items/properties/mappingVal")

### mappingVal Type

merged type ([Details](chart-singlestat-settings-schema-allof-1-properties-mappings-items-properties-mappingval.md))

any of

* [Untitled string in ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-mappings-items-properties-mappingval-anyof-0.md "check type definition")

* [Untitled integer in ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-mappings-items-properties-mappingval-anyof-1.md "check type definition")
