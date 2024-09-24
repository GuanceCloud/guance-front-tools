var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fs from 'fs';
import * as path from 'path';
import yargs from 'yargs';
// 1.	Graph (折线图) - 用于展示时间序列数据的线图或柱状图。
// 	2.	Stat (统计) - 用于显示单个数值，如当前值、最小值或最大值。
// 	3.	Gauge (仪表盘) - 用于显示单个数值，并通过仪表盘样式进行可视化。
// 	4.	Bar Gauge (柱状仪表盘) - 类似于仪表盘，但以柱状方式显示。
// 	5.	Table (表格) - 用于以表格形式展示数据，支持多列、多行显示。
// 	6.	Singlestat (单数值) - 适合展示单个重要的数值（现已被 Stat 面板替代）。
// 	7.	Heatmap (热力图) - 用于显示数据密度或强度的热力图。
// 	8.	Alert List (告警列表) - 用于展示触发的告警和状态。
// 	9.	Logs (日志) - 用于展示和查询日志数据，尤其是通过 Loki 数据源。
// 	10.	Pie Chart (饼图) - 用于显示数据的饼图。
// 	11.	Text (文本) - 用于展示静态文本，支持 Markdown、HTML 格式。
// 	12.	Gauge (Gauge 仪表) - 显示环形图表用于单个值的展示。
// 	13.	Bar Chart (柱状图) - 显示条形图或柱状图。
// 	14.	Timeseries (时间序列) - 最新的时间序列图表，提供更多功能和配置选项。
// 	15.	Geomap (地理图) - 基于地图的地理数据可视化。
// 	16.	Histogram (直方图) - 展示数据分布的图表。
// 	17.	Status History (状态历史) - 显示状态随时间变化的历史记录。
// 	18.	Canvas (画布) - 允许自定义绘制的可视化。
// 	19.	Node Graph (节点图) - 可视化连接点之间的网络关系。
// 	20.	XY Chart (XY 图表) - 显示二维数据的 XY 图表。
//   | 'group'
//   | 'sequence'
//   | 'singlestat'
//   | 'pie'
//   | 'bar'
//   | 'histogram'
//   | 'slo'
//   | 'toplist'
//   | 'gauge'
//   | 'scatter'
//   | 'bubble'
//   | 'table'
//   | 'treemap'
//   | 'funnel'
//   | 'chinamap'
//   | 'worldmap'
//   | 'hexgon'
//   | 'heatmap'
//   | 'topology'
//   | 'sankey'
//   | 'log'
//   | 'object'
//   | 'alarm'
//   | 'text'
//   | 'video'
//   | 'picture'
//   | 'command'
//   | 'iframe'
const grafanaPanelTypeToGuanceChartMap = {
    stat: 'singlestat',
    singlestat: 'singlestat',
    barchart: 'bar',
    timeseries: 'sequence',
    graph: 'sequence',
    piechart: 'pie',
    histogram: 'histogram',
    bargauge: 'toplist',
    gauge: 'gauge',
    table: 'table',
    text: 'text',
    heatmap: 'heatmap',
    treemap: 'treemap',
};
const GRAFANA_KEYWORKD = ['__interval'];
function replaceVariableStr(grafanaExpr) {
    return grafanaExpr.replace(/\$([\d_\w]+)/g, (match, $0) => {
        if (GRAFANA_KEYWORKD.includes($0))
            return match;
        return `#{${$0}}`;
    });
}
/**
 * Get layout items sorted from top left to right and down.
 *
 * @return {Array} Array of layout objects.
 * @return {Array}        Layout, sorted static items first.
 */
function sortPanelItemsByRowCol(panels) {
    return panels.slice(0).sort(function (panelA, panelB) {
        // 宽度长的在前面
        const { gridPos: posA } = panelA;
        const { gridPos: posB } = panelB;
        if (!posA || !posB)
            return -1;
        if (posA.y === posB.y && posA.x === posB.x && posA.w > posB.w) {
            return -1;
        }
        if (posA.y === posB.y && posA.x === posB.x) {
            return 0;
        }
        if (posA.y > posB.y || (posA.y === posB.y && posA.x > posB.x)) {
            return 1;
        }
        return -1;
    });
}
function getGridH(h, rowHeight, margin) {
    return Math.round(h * rowHeight + Math.max(0, 2 * (h - 1)) * margin);
}
function getGuanceHByGrafanaH(granfanH) {
    return (getGridH(granfanH, 30, 4) + 10) / 20;
}
function covertPanelToGuanceChart(grafanaPanel, rowPanel) {
    const { gridPos, title, type, targets, options } = grafanaPanel;
    //   const { gridPos: rowGridPos } = rowPanel
    const chartType = grafanaPanelTypeToGuanceChartMap[type];
    let pos = {
        x: gridPos.x,
        w: gridPos.w,
        y: gridPos.y,
        h: gridPos.h,
    };
    if (rowPanel) {
        const { gridPos: rowGridPos } = rowPanel;
        if (rowGridPos && gridPos) {
            pos = {
                x: gridPos.x,
                w: gridPos.w,
                y: gridPos.y - rowGridPos.y,
                h: gridPos.h,
            };
        }
    }
    const queries = [];
    if (targets && targets.length) {
        targets.forEach((_target) => {
            if (!_target.expr)
                return;
            const queryItem = {
                datasource: 'dataflux',
                qtype: 'promql',
                type: chartType,
                query: {
                    q: replaceVariableStr(_target.expr),
                    type: 'promql',
                },
            };
            queries.push(queryItem);
        });
    }
    const settings = {};
    if (options) {
        switch (chartType) {
            case 'text':
                const queryItem = {
                    query: {
                        content: options.content,
                    },
                };
                queries.push(queryItem);
                break;
            default:
                break;
        }
    }
    const guanceChart = {
        extend: {
            settings: settings,
        },
        group: {
            name: rowPanel ? rowPanel.title : 'default',
        },
        pos: {
            x: pos.x,
            y: getGuanceHByGrafanaH(pos.y),
            h: getGuanceHByGrafanaH(pos.h),
            w: pos.w,
        },
        name: title || '',
        queries: queries,
        type: chartType,
    };
    return guanceChart;
}
const covertPanelsToCharts = (grafanaPanelData, rowPanel) => {
    const guanceCharts = [];
    grafanaPanelData.forEach((grafanaPanel) => {
        if (!grafanaPanel.gridPos)
            return;
        guanceCharts.push(covertPanelToGuanceChart(grafanaPanel, rowPanel));
    });
    return guanceCharts;
};
const VARIABLE_MAP = {
    query: 'PROMQL_QUERY',
    custom: 'CUSTOM_LIST',
};
const VARIABLE_DATASOURCE_MAP = {
    query: 'dataflux',
    custom: 'custom',
};
const covert = (grafanaData) => {
    var _a, _b, _c;
    const covertGuanceResult = {};
    // 标题
    covertGuanceResult.title = grafanaData.title;
    // 视图变量
    const guanceVars = [];
    (_b = (_a = grafanaData.templating) === null || _a === void 0 ? void 0 : _a.list) === null || _b === void 0 ? void 0 : _b.forEach((_variable, index) => {
        const { current, type, allValue } = _variable;
        if (!VARIABLE_MAP[type])
            return;
        let defaultVal = {
            label: '',
            value: '',
        };
        if (current) {
            let labels = [];
            let values = [];
            if (Array.isArray(current.text)) {
                labels = current.text;
            }
            else if (typeof current.text === 'string') {
                labels = [current.text];
            }
            if (Array.isArray(current.value)) {
                values = current.value;
            }
            else if (typeof current.value === 'string') {
                values = [current.value];
            }
            labels = labels.map((label) => {
                // all  的情况需要适配观测云
                if (label === 'All') {
                    if (allValue === '.*') {
                        return '*';
                    }
                    else {
                        return 'all values';
                    }
                }
                else {
                    return label;
                }
            });
            values = values.map((value) => {
                // all  的情况需要适配观测云
                if (value === '$__all') {
                    if (allValue === '.*') {
                        return '*';
                    }
                    else {
                        return '__all__';
                    }
                }
                else {
                    return value;
                }
            });
            defaultVal = {
                label: labels.join(','),
                value: values.join(','),
            };
        }
        let value = _variable.query;
        if (value && typeof value === 'object' && value.query) {
            value = replaceVariableStr(value.query);
        }
        else if (value && typeof value === 'string') {
            value = replaceVariableStr(_variable.query);
        }
        else {
            return;
        }
        const guanceVariableItem = {
            type: VARIABLE_MAP[type],
            datasource: VARIABLE_DATASOURCE_MAP[type],
            name: _variable.label,
            seq: index,
            hide: _variable.hide ? 1 : 0,
            multiple: _variable.multi !== undefined ? _variable.multi : true,
            includeStar: _variable.includeAll !== undefined ? _variable.includeAll : true,
            valueSort: 'desc',
            code: _variable.name,
            definition: {
                value: value,
                defaultVal: defaultVal,
            },
        };
        guanceVars.push(guanceVariableItem);
    });
    // 分组
    const guanceGroups = [];
    // 分组展开信息
    const guanceExpand = {};
    // 图表
    const guanceCharts = [];
    // 前一次分组，也就是当前图表的分组
    let lastRowPanel;
    // 当前分组的 panel 列表
    let lastPanels = [];
    let grafanaCharts = ((_c = grafanaData.panels) === null || _c === void 0 ? void 0 : _c.filter((_panel) => _panel.type === 'row' || grafanaPanelTypeToGuanceChartMap[_panel.type])) || [];
    grafanaCharts = sortPanelItemsByRowCol(grafanaCharts);
    grafanaCharts.forEach((_panel) => {
        var _a;
        if (_panel.type === 'row') {
            const _rowPanel = _panel;
            guanceGroups.push({
                name: _rowPanel.title,
            });
            if (_rowPanel.title) {
                // 分组展开收起数据
                guanceExpand[_rowPanel.title] = !_rowPanel.collapsed;
            }
            if (lastPanels.length) {
                // 上一个分组的图表转换，
                guanceCharts.push(...covertPanelsToCharts(lastPanels, lastRowPanel));
                //清空上一个分组列表
                lastPanels = [];
                //清空上一个分组
                lastRowPanel = undefined;
            }
            if (_rowPanel.collapsed) {
                // 收起
                const subPanels = ((_a = _rowPanel.panels) === null || _a === void 0 ? void 0 : _a.filter((_panel) => _panel.type === 'row' || grafanaPanelTypeToGuanceChartMap[_panel.type])) || [];
                guanceCharts.push(...covertPanelsToCharts(subPanels, _rowPanel));
            }
            else {
                lastRowPanel = _rowPanel;
                // 展开
            }
        }
        else {
            lastPanels.push(_panel);
        }
    });
    // 最后一个分组
    if (lastPanels.length) {
        guanceCharts.push(...covertPanelsToCharts(lastPanels, lastRowPanel));
    }
    covertGuanceResult.dashboardExtend = {
        groupUnfoldStatus: guanceExpand,
    };
    covertGuanceResult.main = {
        vars: guanceVars,
        charts: guanceCharts,
        groups: guanceGroups,
    };
    return covertGuanceResult;
};
export function run(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const { argv } = yargs(args)
            .usage('Convert grafana dashboard json template to guance dashboard json template.')
            .demand('d')
            .alias('d', 'input')
            .describe('d', 'path to grafana dashboard json file path')
            .coerce('d', (d) => {
            const resolved = d && path.resolve(d);
            if (fs.existsSync(resolved) && /\.json$/.test(resolved)) {
                return resolved;
            }
            throw new Error(`Input Grafana JSON File "${d}" is not a JSON!`);
        })
            .alias('o', 'out')
            .describe('o', 'path to output json file path')
            .default('o', path.resolve(path.join('.', 'guance-dashboard.json')))
            .coerce('o', (o) => path.resolve(o));
        const grafanaJsonPath = argv.d;
        const outGuanceJsonPath = argv.o;
        try {
            const grafanaJSONData = JSON.parse(fs.readFileSync(grafanaJsonPath, 'utf-8'));
            const covertResult = covert(grafanaJSONData);
            // 确保目录存在
            const dir = path.dirname(outGuanceJsonPath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true }); // recursive: true 确保递归创建目录
            }
            fs.writeFileSync(outGuanceJsonPath, JSON.stringify(covertResult), 'utf-8');
        }
        catch (err) {
            throw new Error(err);
        }
    });
}
