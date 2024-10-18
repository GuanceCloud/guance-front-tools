---
title: 'Grafana Guance Datasource'
summary: 'Datasource source provided by Guance Cloud for integration with Grafana.'
icon: 'icon/xxx/'
---

# Grafana Guance Datasource

The purpose of this plugin is to display data from Guance Cloud in Grafana by providing a Datasource plugin.

## Configuration {#config}

1. [Click to download the plugin](https://static.guance.com/grafana-plugins/guance-guance-datasource.zip)

2. Locate the Grafana configuration file. The default path can be found in the [official documentation](https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#configuration-file-location).

3. In the configuration file, find the plugin directory setting:

```
[paths]
plugins = "/path/to/grafana-plugins"
```

4. Extract the downloaded file into the plugin directory:

```
unzip guance-guance-datasource.zip -d YOUR_PLUGIN_DIR/
```

5. Update the configuration file with the following setting:

```
[plugins]
allow_loading_unsigned_plugins = guance-guance-datasource
```

6. Restart Grafana.
