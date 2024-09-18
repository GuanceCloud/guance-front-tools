# Untitled object in DashboardData Schema

```txt
charts/dashboard-schema.json#/properties/main/properties/groups/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dashboard-schema.json\*](../out/charts/dashboard-schema.json "open original schema") |

## items Type

`object` ([Details](dashboard-schema-properties-main-properties-groups-items.md))

# items Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                               |
| :---------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)     | `string` | Optional | cannot be null | [DashboardData](dashboard-schema-properties-main-properties-groups-items-properties-name.md "charts/dashboard-schema.json#/properties/main/properties/groups/items/properties/name")     |
| [extend](#extend) | `object` | Optional | cannot be null | [DashboardData](dashboard-schema-properties-main-properties-groups-items-properties-extend.md "charts/dashboard-schema.json#/properties/main/properties/groups/items/properties/extend") |

## name

图表分组名称

`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [DashboardData](dashboard-schema-properties-main-properties-groups-items-properties-name.md "charts/dashboard-schema.json#/properties/main/properties/groups/items/properties/name")

### name Type

`string`

## extend

分组的额外配置，比如背景颜色

`extend`

* is optional

* Type: `object` ([Details](dashboard-schema-properties-main-properties-groups-items-properties-extend.md))

* cannot be null

* defined in: [DashboardData](dashboard-schema-properties-main-properties-groups-items-properties-extend.md "charts/dashboard-schema.json#/properties/main/properties/groups/items/properties/extend")

### extend Type

`object` ([Details](dashboard-schema-properties-main-properties-groups-items-properties-extend.md))
