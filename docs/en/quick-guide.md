---
title: 'Grafana Dashboard Import'
summary: 'Grafana Dashboard Template Import Tool for Guance Cloud'
icon: 'icon/xxx/'
---

# Grafana Dashboard Import Tool

Guance Cloud provides a Node.js script to convert Grafana dashboard JSON templates into Guance Cloud dashboard JSON templates.

## Configuration {#config}

### Prerequisites {#requirement}

Ensure that `nodejs` and `npm` are installed on the system with the following version requirements:

1. node >= 12.7.0
2. npm >= 6.10.0

### Usage

1. Install the script

```bash
$ npm install -g @cloudcare/guance-front-tools
```

2. View the script usage help

```bash
$ grafanaCovertToGuance
```

The specific script commands are:

- `-d`: Path to the Grafana JSON file, e.g.: `./grafana/json/grafana.json`
- `-o`: Output path for the Guance dashboard JSON file, e.g.: `./guance/json/guance.json`

3. Execute the conversion command

```bash
$ grafanaCovertToGuance -d ./grafana/json/grafana.json -o ./guance/json/guance.json
```

4. Import the converted JSON file in the Guance Cloud console.

5. Done.
