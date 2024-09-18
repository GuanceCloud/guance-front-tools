# Untitled object in ChartPieSettings Schema

```txt
charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/combine
```

饼图合并数据项配置

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-pie-settings-schema.json\*](../out/charts/settings/chart-pie-settings-schema.json "open original schema") |

## combine Type

`object` ([Details](chart-pie-settings-schema-allof-1-properties-combine.md))

# combine Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [percent](#percent)   | `string` | Required | cannot be null | [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-combine-properties-percent.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/combine/properties/percent")   |
| [operator](#operator) | `string` | Required | cannot be null | [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-combine-properties-operator.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/combine/properties/operator") |

## percent

百分比

`percent`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-combine-properties-percent.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/combine/properties/percent")

### percent Type

`string`

## operator

对值的操作项

`operator`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-combine-properties-operator.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/combine/properties/operator")

### operator Type

`string`

### operator Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | :---------- |
| `"lt"`  |             |
| `"lte"` |             |
| `"gt"`  |             |
| `"gte"` |             |
