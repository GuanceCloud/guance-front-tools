# Untitled object in ChartToplistSettings Schema

```txt
charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/bar
```

冗余字段，固定值

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-toplist-settings-schema.json\*](../out/charts/settings/chart-toplist-settings-schema.json "open original schema") |

## bar Type

`object` ([Details](chart-toplist-settings-schema-allof-1-properties-bar.md))

# bar Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                     |
| :------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [direction](#direction)         | `string` | Optional | cannot be null | [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-bar-properties-direction.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/bar/properties/direction")         |
| [xAxisShowType](#xaxisshowtype) | `string` | Optional | cannot be null | [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-bar-properties-xaxisshowtype.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/bar/properties/xAxisShowType") |

## direction



`direction`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-bar-properties-direction.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/bar/properties/direction")

### direction Type

`string`

### direction Constraints

**constant**: the value of this property must be equal to:

```json
"horizontal"
```

## xAxisShowType



`xAxisShowType`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-bar-properties-xaxisshowtype.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/bar/properties/xAxisShowType")

### xAxisShowType Type

`string`

### xAxisShowType Constraints

**constant**: the value of this property must be equal to:

```json
"groupBy"
```
