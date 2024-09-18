# DashboardData Schema

```txt
charts/dashboard-schema.json
```

观测云仪表板完整结构

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dashboard-schema.json](../out/charts/dashboard-schema.json "open original schema") |

## DashboardData Type

`object` ([DashboardData](dashboard-schema.md))

# DashboardData Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                             |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------- |
| [title](#title)       | `string` | Optional | cannot be null | [DashboardData](dashboard-schema-properties-title.md "charts/dashboard-schema.json#/properties/title") |
| [main](#main)         | `object` | Optional | cannot be null | [DashboardData](dashboard-schema-properties-main.md "charts/dashboard-schema.json#/properties/main")   |
| Additional Properties | Any      | Optional | can be null    |                                                                                                        |

## title

仪表板标题

`title`

* is optional

* Type: `string`

* cannot be null

* defined in: [DashboardData](dashboard-schema-properties-title.md "charts/dashboard-schema.json#/properties/title")

### title Type

`string`

## main

仪表板图表结构

`main`

* is optional

* Type: `object` ([Details](dashboard-schema-properties-main.md))

* cannot be null

* defined in: [DashboardData](dashboard-schema-properties-main.md "charts/dashboard-schema.json#/properties/main")

### main Type

`object` ([Details](dashboard-schema-properties-main.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
