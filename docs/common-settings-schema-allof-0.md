# Untitled undefined type in CommonChartSettings Schema

```txt
charts/settings/common-settings-schema.json#/allOf/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [common-settings-schema.json\*](../out/charts/settings/common-settings-schema.json "open original schema") |

## 0 Type

unknown

# 0 Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                          |
| :------------------------------------------------ | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [showTitle](#showtitle)                           | `boolean` | Optional | cannot be null | [CommonChartSettings](common-settings-schema-allof-0-properties-showtitle.md "charts/settings/common-settings-schema.json#/allOf/0/properties/showTitle")                           |
| [titleDesc](#titledesc)                           | `string`  | Optional | cannot be null | [CommonChartSettings](common-settings-schema-allof-0-properties-titledesc.md "charts/settings/common-settings-schema.json#/allOf/0/properties/titleDesc")                           |
| [isSampling](#issampling)                         | `boolean` | Optional | cannot be null | [CommonChartSettings](common-settings-schema-allof-0-properties-issampling.md "charts/settings/common-settings-schema.json#/allOf/0/properties/isSampling")                         |
| [changeWorkspace](#changeworkspace)               | `boolean` | Optional | cannot be null | [CommonChartSettings](common-settings-schema-allof-0-properties-changeworkspace.md "charts/settings/common-settings-schema.json#/allOf/0/properties/changeWorkspace")               |
| [workspaceUUID](#workspaceuuid)                   | `string`  | Optional | cannot be null | [CommonChartSettings](common-settings-schema-allof-0-properties-workspaceuuid.md "charts/settings/common-settings-schema.json#/allOf/0/properties/workspaceUUID")                   |
| [workspaceName](#workspacename)                   | `array`   | Optional | cannot be null | [CommonChartSettings](common-settings-schema-allof-0-properties-workspacename.md "charts/settings/common-settings-schema.json#/allOf/0/properties/workspaceName")                   |
| [showFieldMapping](#showfieldmapping)             | `boolean` | Optional | cannot be null | [CommonChartSettings](common-settings-schema-allof-0-properties-showfieldmapping.md "charts/settings/common-settings-schema.json#/allOf/0/properties/showFieldMapping")             |
| [openThousandsSeparator](#openthousandsseparator) | `boolean` | Optional | cannot be null | [CommonChartSettings](common-settings-schema-allof-0-properties-openthousandsseparator.md "charts/settings/common-settings-schema.json#/allOf/0/properties/openThousandsSeparator") |
| [precision](#precision)                           | `string`  | Optional | cannot be null | [CommonChartSettings](common-settings-schema-allof-0-properties-precision.md "charts/settings/common-settings-schema.json#/allOf/0/properties/precision")                           |
| [openTimeOffset](#opentimeoffset)                 | `boolean` | Optional | cannot be null | [CommonChartSettings](common-settings-schema-allof-0-properties-opentimeoffset.md "charts/settings/common-settings-schema.json#/allOf/0/properties/openTimeOffset")                 |
| [aliasVersion](#aliasversion)                     | `integer` | Optional | cannot be null | [CommonChartSettings](common-settings-schema-allof-0-properties-aliasversion.md "charts/settings/common-settings-schema.json#/allOf/0/properties/aliasVersion")                     |

## showTitle

是否显示图表标题

`showTitle`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [CommonChartSettings](common-settings-schema-allof-0-properties-showtitle.md "charts/settings/common-settings-schema.json#/allOf/0/properties/showTitle")

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

* defined in: [CommonChartSettings](common-settings-schema-allof-0-properties-titledesc.md "charts/settings/common-settings-schema.json#/allOf/0/properties/titleDesc")

### titleDesc Type

`string`

## isSampling

启用后，当数据量过大时，会对除“指标”外的其他类型数据自动执行采样查询，采样率不固定，会根据数据量大小动态调整

`isSampling`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [CommonChartSettings](common-settings-schema-allof-0-properties-issampling.md "charts/settings/common-settings-schema.json#/allOf/0/properties/isSampling")

### isSampling Type

`boolean`

### isSampling Default Value

The default value is:

```json
true
```

## changeWorkspace

在图表中查询外部工作空间的数据，可选择“跨空间授权”中已添加的工作空间

`changeWorkspace`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [CommonChartSettings](common-settings-schema-allof-0-properties-changeworkspace.md "charts/settings/common-settings-schema.json#/allOf/0/properties/changeWorkspace")

### changeWorkspace Type

`boolean`

## workspaceUUID

开启跨空间后，选择授权空间的空间 id 列表,用 “,” 号分割

`workspaceUUID`

* is optional

* Type: `string`

* cannot be null

* defined in: [CommonChartSettings](common-settings-schema-allof-0-properties-workspaceuuid.md "charts/settings/common-settings-schema.json#/allOf/0/properties/workspaceUUID")

### workspaceUUID Type

`string`

### workspaceUUID Examples

```json
"wksp_xxxx1,wksp_xxxx2"
```

## workspaceName

开启跨空间后，选择授权空间的空间名称

`workspaceName`

* is optional

* Type: an array of merged types ([Details](common-settings-schema-allof-0-properties-workspacename-items.md))

* cannot be null

* defined in: [CommonChartSettings](common-settings-schema-allof-0-properties-workspacename.md "charts/settings/common-settings-schema.json#/allOf/0/properties/workspaceName")

### workspaceName Type

an array of merged types ([Details](common-settings-schema-allof-0-properties-workspacename-items.md))

## showFieldMapping

应用于实际查询字段与前端显示字段不一致时，a→b，即实际查询字段 a，图表中映射显示为字段 b

`showFieldMapping`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [CommonChartSettings](common-settings-schema-allof-0-properties-showfieldmapping.md "charts/settings/common-settings-schema.json#/allOf/0/properties/showFieldMapping")

### showFieldMapping Type

`boolean`

## openThousandsSeparator

是否开启千分位分割符显示

`openThousandsSeparator`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [CommonChartSettings](common-settings-schema-allof-0-properties-openthousandsseparator.md "charts/settings/common-settings-schema.json#/allOf/0/properties/openThousandsSeparator")

### openThousandsSeparator Type

`boolean`

### openThousandsSeparator Default Value

The default value is:

```json
true
```

## precision

图表值精确的小数点位数

`precision`

* is optional

* Type: `string`

* cannot be null

* defined in: [CommonChartSettings](common-settings-schema-allof-0-properties-precision.md "charts/settings/common-settings-schema.json#/allOf/0/properties/precision")

### precision Type

`string`

### precision Default Value

The default value is:

```json
"2"
```

## openTimeOffset

启用时间偏移后，当查询相对时间区间时，实际查询时间范围向前偏移 1 分钟，以防止入库延迟导致数据获取为空。如：当前为12:30，查询最近15分钟的数据，开启时间偏移后，实际查询的时间是：12:14-12:29。

`openTimeOffset`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [CommonChartSettings](common-settings-schema-allof-0-properties-opentimeoffset.md "charts/settings/common-settings-schema.json#/allOf/0/properties/openTimeOffset")

### openTimeOffset Type

`boolean`

## aliasVersion

区分别名版本，固定为 2

`aliasVersion`

* is optional

* Type: `integer`

* cannot be null

* defined in: [CommonChartSettings](common-settings-schema-allof-0-properties-aliasversion.md "charts/settings/common-settings-schema.json#/allOf/0/properties/aliasVersion")

### aliasVersion Type

`integer`

### aliasVersion Constraints

**constant**: the value of this property must be equal to:

```json
2
```
