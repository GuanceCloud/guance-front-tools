# CreationReason Schema

```txt
session-replay/browser/creation-reason-schema.json
```

The reason this Segment was created. For mobile there is only one possible value for this, which is always the default value.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                      |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [creation-reason-schema.json](../out/session-replay/browser/creation-reason-schema.json "open original schema") |

## CreationReason Type

`string` ([CreationReason](creation-reason-schema.md))

## CreationReason Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"init"`                   |             |
| `"segment_duration_limit"` |             |
| `"segment_bytes_limit"`    |             |
| `"view_change"`            |             |
| `"before_unload"`          |             |
| `"visibility_hidden"`      |             |
| `"page_frozen"`            |             |

## CreationReason Default Value

The default value is:

```json
"init"
```
