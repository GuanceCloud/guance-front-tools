# ChartIframeSettings Schema

```txt
charts/settings/chart-iframe-settings-schema.json
```

Iframe 图表配置信息

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-iframe-settings-schema.json](../out/charts/settings/chart-iframe-settings-schema.json "open original schema") |

## ChartIframeSettings Type

`object` ([ChartIframeSettings](chart-iframe-settings-schema.md))

# ChartIframeSettings Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                            |
| :---------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [showTitle](#showtitle) | `boolean` | Optional | cannot be null | [ChartIframeSettings](chart-iframe-settings-schema-properties-showtitle.md "charts/settings/chart-iframe-settings-schema.json#/properties/showTitle") |
| [titleDesc](#titledesc) | `string`  | Optional | cannot be null | [ChartIframeSettings](chart-iframe-settings-schema-properties-titledesc.md "charts/settings/chart-iframe-settings-schema.json#/properties/titleDesc") |
| [url](#url)             | `string`  | Optional | cannot be null | [ChartIframeSettings](chart-iframe-settings-schema-properties-url.md "charts/settings/chart-iframe-settings-schema.json#/properties/url")             |
| Additional Properties   | Any       | Optional | can be null    |                                                                                                                                                       |

## showTitle

是否显示图表标题

`showTitle`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartIframeSettings](chart-iframe-settings-schema-properties-showtitle.md "charts/settings/chart-iframe-settings-schema.json#/properties/showTitle")

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

* defined in: [ChartIframeSettings](chart-iframe-settings-schema-properties-titledesc.md "charts/settings/chart-iframe-settings-schema.json#/properties/titleDesc")

### titleDesc Type

`string`

## url

iframe 需要填充的访问 URL

`url`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartIframeSettings](chart-iframe-settings-schema-properties-url.md "charts/settings/chart-iframe-settings-schema.json#/properties/url")

### url Type

`string`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
