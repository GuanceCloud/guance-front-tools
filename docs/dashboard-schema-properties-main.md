# Untitled object in DashboardData Schema

```txt
charts/dashboard-schema.json#/properties/main
```

仪表板图表结构

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dashboard-schema.json\*](../out/charts/dashboard-schema.json "open original schema") |

## main Type

`object` ([Details](dashboard-schema-properties-main.md))

# main Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                               |
| :---------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [vars](#vars)     | `array`  | Optional | cannot be null | [DashboardData](common-vars-schema.md "charts/common/common-vars-schema.json#/properties/main/properties/vars")                          |
| [charts](#charts) | `array`  | Optional | cannot be null | [DashboardData](dashboard-schema-properties-main-properties-charts.md "charts/dashboard-schema.json#/properties/main/properties/charts") |
| [groups](#groups) | `array`  | Optional | cannot be null | [DashboardData](dashboard-schema-properties-main-properties-groups.md "charts/dashboard-schema.json#/properties/main/properties/groups") |
| [type](#type)     | `string` | Optional | cannot be null | [DashboardData](dashboard-schema-properties-main-properties-type.md "charts/dashboard-schema.json#/properties/main/properties/type")     |

## vars

图表视图变量列表结构

`vars`

* is optional

* Type: `object[]` ([Details](common-vars-schema-items.md))

* cannot be null

* defined in: [DashboardData](common-vars-schema.md "charts/common/common-vars-schema.json#/properties/main/properties/vars")

### vars Type

`object[]` ([Details](common-vars-schema-items.md))

## charts

图表合集配置

`charts`

* is optional

* Type: `object[]` ([ChartData](chart-schema.md))

* cannot be null

* defined in: [DashboardData](dashboard-schema-properties-main-properties-charts.md "charts/dashboard-schema.json#/properties/main/properties/charts")

### charts Type

`object[]` ([ChartData](chart-schema.md))

## groups

分组配置

`groups`

* is optional

* Type: `object[]` ([Details](dashboard-schema-properties-main-properties-groups-items.md))

* cannot be null

* defined in: [DashboardData](dashboard-schema-properties-main-properties-groups.md "charts/dashboard-schema.json#/properties/main/properties/groups")

### groups Type

`object[]` ([Details](dashboard-schema-properties-main-properties-groups-items.md))

## type

固定字段

`type`

* is optional

* Type: `string`

* cannot be null

* defined in: [DashboardData](dashboard-schema-properties-main-properties-type.md "charts/dashboard-schema.json#/properties/main/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"template"
```
