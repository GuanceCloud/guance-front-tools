# ChartTextSettings Schema

```txt
charts/settings/chart-text-settings-schema.json
```

文本图配置信息

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-text-settings-schema.json](../out/charts/settings/chart-text-settings-schema.json "open original schema") |

## ChartTextSettings Type

`object` ([ChartTextSettings](chart-text-settings-schema.md))

# ChartTextSettings Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                      |
| :---------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| [showTitle](#showtitle) | `boolean` | Optional | cannot be null | [ChartTextSettings](chart-text-settings-schema-properties-showtitle.md "charts/settings/chart-text-settings-schema.json#/properties/showTitle") |
| [titleDesc](#titledesc) | `string`  | Optional | cannot be null | [ChartTextSettings](chart-text-settings-schema-properties-titledesc.md "charts/settings/chart-text-settings-schema.json#/properties/titleDesc") |
| Additional Properties   | Any       | Optional | can be null    |                                                                                                                                                 |

## showTitle

是否显示图表标题

`showTitle`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartTextSettings](chart-text-settings-schema-properties-showtitle.md "charts/settings/chart-text-settings-schema.json#/properties/showTitle")

### showTitle Type

`boolean`

### showTitle Default Value

The default value is:

```json
true
```

## titleDesc

图表的描述信息

`titleDesc`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartTextSettings](chart-text-settings-schema-properties-titledesc.md "charts/settings/chart-text-settings-schema.json#/properties/titleDesc")

### titleDesc Type

`string`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
