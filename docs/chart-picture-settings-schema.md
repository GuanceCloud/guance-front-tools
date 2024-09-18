# ChartPictureSettings Schema

```txt
charts/settings/chart-picture-settings-schema.json
```

图片图表配置信息

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-picture-settings-schema.json](../out/charts/settings/chart-picture-settings-schema.json "open original schema") |

## ChartPictureSettings Type

`object` ([ChartPictureSettings](chart-picture-settings-schema.md))

# ChartPictureSettings Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                                                                           |
| :---------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [showTitle](#showtitle)             | `boolean` | Optional | cannot be null | [ChartPictureSettings](chart-picture-settings-schema-properties-showtitle.md "charts/settings/chart-picture-settings-schema.json#/properties/showTitle")             |
| [titleDesc](#titledesc)             | `string`  | Optional | cannot be null | [ChartPictureSettings](chart-picture-settings-schema-properties-titledesc.md "charts/settings/chart-picture-settings-schema.json#/properties/titleDesc")             |
| [url](#url)                         | `string`  | Optional | cannot be null | [ChartPictureSettings](chart-picture-settings-schema-properties-url.md "charts/settings/chart-picture-settings-schema.json#/properties/url")                         |
| [backgroundStyle](#backgroundstyle) | `object`  | Optional | cannot be null | [ChartPictureSettings](chart-picture-settings-schema-properties-backgroundstyle.md "charts/settings/chart-picture-settings-schema.json#/properties/backgroundStyle") |
| Additional Properties               | Any       | Optional | can be null    |                                                                                                                                                                      |

## showTitle

是否显示图表标题

`showTitle`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartPictureSettings](chart-picture-settings-schema-properties-showtitle.md "charts/settings/chart-picture-settings-schema.json#/properties/showTitle")

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

* defined in: [ChartPictureSettings](chart-picture-settings-schema-properties-titledesc.md "charts/settings/chart-picture-settings-schema.json#/properties/titleDesc")

### titleDesc Type

`string`

## url

图片访问 URL

`url`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartPictureSettings](chart-picture-settings-schema-properties-url.md "charts/settings/chart-picture-settings-schema.json#/properties/url")

### url Type

`string`

## backgroundStyle



`backgroundStyle`

* is optional

* Type: `object` ([Details](chart-picture-settings-schema-properties-backgroundstyle.md))

* cannot be null

* defined in: [ChartPictureSettings](chart-picture-settings-schema-properties-backgroundstyle.md "charts/settings/chart-picture-settings-schema.json#/properties/backgroundStyle")

### backgroundStyle Type

`object` ([Details](chart-picture-settings-schema-properties-backgroundstyle.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
