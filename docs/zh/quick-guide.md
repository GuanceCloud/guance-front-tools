---
title: 'Grafana Dashboard Import'
summary: 'Grafana Dashboard 模版导入观测云工具'
icon: 'icon/xxx/' # 这里是该主题的 icon 目录，该目录下有多个图片文件
---

# Grafana Dashboard 导入工具

观测云目前提供 grafana dashboard json 模版转换为观测云仪表板 json 模版的 node 脚本

## 配置 {#config}

### 前置条件 {#requirement}

需要在系统中安装 `nodejs`、`npm`,版本要求如下：

1. node >= 12.7.0
2. npm >= 6.10.0

### 使用方式

1. 安装脚本

```bash
$ npm install -g @cloudcare/guance-front-tools
```

2. 查看脚本使用帮助

```bash
 $ grafanaCovertToGuance
```

具体脚本执行命令如下：
`-d`: grafana json 文件的目录位置，例如：`./grafana/json/grafana.json`
`-o`: 观测云仪表板 json 文件的输出位置，例如: `./guance/json/guance.json`

3. 执行转换命令

```bash
$ grafanaCovertToGuance -d ./grafana/json/grafana.json -o ./guance/json/guance.json
```

4. 在观测云控制台导入转换后的 json 文件

5. 完成
