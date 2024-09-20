# 观测云前端工具

## 使用

npm 下载

```js
    npm install  @cloudcare/guance-front-tools
```

## 脚本

观测云目前提供 grafana dashboard json template 转换为 观测云仪表板 json 模版的 node 脚本

### 使用方式

```js
$ npm install -g @cloudcare/guance-front-tools

# show usage information
$ grafanaCovertToGuance

# run task
$ grafanaCovertToGuance -d examples/grafana.json -o examples/guance.json
```

#### 执行方式

```bash
   node grafanaCovertToGuance
```
