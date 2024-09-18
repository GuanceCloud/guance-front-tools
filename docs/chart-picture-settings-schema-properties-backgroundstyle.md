# Untitled object in ChartPictureSettings Schema

```txt
charts/settings/chart-picture-settings-schema.json#/properties/backgroundStyle
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-picture-settings-schema.json\*](../out/charts/settings/chart-picture-settings-schema.json "open original schema") |

## backgroundStyle Type

`object` ([Details](chart-picture-settings-schema-properties-backgroundstyle.md))

# backgroundStyle Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                       |
| :---------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [backgroundSize](#backgroundsize)         | `string` | Optional | cannot be null | [ChartPictureSettings](chart-picture-settings-schema-properties-backgroundstyle-properties-backgroundsize.md "charts/settings/chart-picture-settings-schema.json#/properties/backgroundStyle/properties/backgroundSize")         |
| [backgroundPosition](#backgroundposition) | `string` | Optional | cannot be null | [ChartPictureSettings](chart-picture-settings-schema-properties-backgroundstyle-properties-backgroundposition.md "charts/settings/chart-picture-settings-schema.json#/properties/backgroundStyle/properties/backgroundPosition") |
| Additional Properties                     | Any      | Optional | can be null    |                                                                                                                                                                                                                                  |

## backgroundSize

图片的平铺模式

`backgroundSize`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartPictureSettings](chart-picture-settings-schema-properties-backgroundstyle-properties-backgroundsize.md "charts/settings/chart-picture-settings-schema.json#/properties/backgroundStyle/properties/backgroundSize")

### backgroundSize Type

`string`

### backgroundSize Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"fill"`    |             |
| `"contain"` |             |
| `"cover"`   |             |

## backgroundPosition

图片是否居中显示

`backgroundPosition`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartPictureSettings](chart-picture-settings-schema-properties-backgroundstyle-properties-backgroundposition.md "charts/settings/chart-picture-settings-schema.json#/properties/backgroundStyle/properties/backgroundPosition")

### backgroundPosition Type

`string`

### backgroundPosition Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"center"` |             |

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
