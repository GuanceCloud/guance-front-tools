# ChartTimeSettings Schema

```txt
charts/settings/settings-time-schema.json
```

图表时间相关配置完整结构。

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [settings-time-schema.json](../out/charts/settings/settings-time-schema.json "open original schema") |

## ChartTimeSettings Type

`object` ([ChartTimeSettings](settings-time-schema.md))

# ChartTimeSettings Properties

| Property                        | Type      | Required | Nullable       | Defined by                                                                                                                                  |
| :------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| [timeInterval](#timeinterval)   | `string`  | Required | cannot be null | [ChartTimeSettings](settings-time-schema-properties-timeinterval.md "charts/settings/settings-time-schema.json#/properties/timeInterval")   |
| [maxPointCount](#maxpointcount) | `integer` | Optional | cannot be null | [ChartTimeSettings](settings-time-schema-properties-maxpointcount.md "charts/settings/settings-time-schema.json#/properties/maxPointCount") |
| [fixedTime](#fixedtime)         | Merged    | Required | cannot be null | [ChartTimeSettings](settings-fixed-time-schema.md "charts/settings/settings-fixed-time-schema.json#/properties/fixedTime")                  |

## timeInterval



`timeInterval`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartTimeSettings](settings-time-schema-properties-timeinterval.md "charts/settings/settings-time-schema.json#/properties/timeInterval")

### timeInterval Type

`string`

### timeInterval Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"auto"`  |             |
| `"1ms"`   |             |
| `"10ms"`  |             |
| `"50ms"`  |             |
| `"100ms"` |             |
| `"500ms"` |             |
| `"1s"`    |             |
| `"10s"`   |             |
| `"20s"`   |             |
| `"30s"`   |             |
| `"1m"`    |             |
| `"5m"`    |             |
| `"10m"`   |             |
| `"30m"`   |             |
| `"1h"`    |             |
| `"6h"`    |             |
| `"12h"`   |             |
| `"1d"`    |             |
| `"7d"`    |             |
| `"30d"`   |             |

### timeInterval Default Value

The default value is:

```json
"auto"
```

## maxPointCount

返回最大数据电枢

`maxPointCount`

* is optional

* Type: `integer`

* cannot be null

* defined in: [ChartTimeSettings](settings-time-schema-properties-maxpointcount.md "charts/settings/settings-time-schema.json#/properties/maxPointCount")

### maxPointCount Type

`integer`

### maxPointCount Default Value

The default value is:

```json
720
```

## fixedTime

固定图表查询的时间范围，无视仪表板和其他页面上的时间选择器

`fixedTime`

* is required

* Type: merged type ([Details](settings-fixed-time-schema.md))

* cannot be null

* defined in: [ChartTimeSettings](settings-fixed-time-schema.md "charts/settings/settings-fixed-time-schema.json#/properties/fixedTime")

### fixedTime Type

merged type ([Details](settings-fixed-time-schema.md))

any of

* [Untitled string in undefined](settings-fixed-time-schema-anyof-0.md "check type definition")

* [Untitled object in undefined](settings-fixed-time-schema-anyof-1.md "check type definition")
