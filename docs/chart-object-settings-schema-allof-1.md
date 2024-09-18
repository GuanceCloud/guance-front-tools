# Untitled undefined type in ChartObjectSettings Schema

```txt
charts/settings/chart-object-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-object-settings-schema.json\*](../out/charts/settings/chart-object-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                          |
| :------------------------------------ | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [isTimeInterval](#istimeinterval)     | `boolean` | Optional | cannot be null | [ChartObjectSettings](chart-object-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-object-settings-schema.json#/allOf/1/properties/isTimeInterval")     |
| [currentChartType](#currentcharttype) | `string`  | Optional | cannot be null | [ChartObjectSettings](chart-object-settings-schema-allof-1-properties-currentcharttype.md "charts/settings/chart-object-settings-schema.json#/allOf/1/properties/currentChartType") |
| [addColumns](#addcolumns)             | `array`   | Optional | cannot be null | [ChartObjectSettings](chart-object-settings-schema-allof-1-properties-addcolumns.md "charts/settings/chart-object-settings-schema.json#/allOf/1/properties/addColumns")             |

## isTimeInterval

是否开启时间分片

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartObjectSettings](chart-object-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-object-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`

## currentChartType

冗余字段，在对象列表图中，固定为 object

`currentChartType`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartObjectSettings](chart-object-settings-schema-allof-1-properties-currentcharttype.md "charts/settings/chart-object-settings-schema.json#/allOf/1/properties/currentChartType")

### currentChartType Type

`string`

### currentChartType Constraints

**constant**: the value of this property must be equal to:

```json
"object"
```

### currentChartType Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## addColumns

添加显示列

`addColumns`

* is optional

* Type: `object[]` ([Details](chart-object-settings-schema-allof-1-properties-addcolumns-items.md))

* cannot be null

* defined in: [ChartObjectSettings](chart-object-settings-schema-allof-1-properties-addcolumns.md "charts/settings/chart-object-settings-schema.json#/allOf/1/properties/addColumns")

### addColumns Type

`object[]` ([Details](chart-object-settings-schema-allof-1-properties-addcolumns-items.md))
