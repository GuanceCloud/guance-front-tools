/**
 * DO NOT MODIFY IT BY HAND. Run `yarn generate` instead.
 */
/**
 * 图表视图变量列表结构
 */
export type ChartVarsSettings = ChartVarsItem[];
/**
 * 图表设置配置完整结构。
 */
export type ChartSettings = ChartAlarmSettings | ChartBarSettings | ChartChinaMapSettings | ChartFunnelSettings | ChartGaugeSettings | ChartHeatmapSettings | ChartHexgonSettings | ChartHistogramSettings | ChartIframeSettings | ChartLogSettings | ChartObjectSettings | ChartPictureSettings | ChartPieSettings | ChartSankeySettings | ChartScatterBubbleSettings | ChartSequenceSettings | ChartSinglestatSettings | ChartTableSettings | ChartTextSettings | ChartToplistSettings | ChartTopologySettings | ChartTreeMapSettings | ChartWorldMapSettings;
/**
 * 告警统计图配置信息
 */
export type ChartAlarmSettings = CommonChartSettings & {
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    /**
     * 冗余字段，在对象列表图中，固定为 alarm
     */
    currentChartType?: 'alarm';
    /**
     * 告警统计图显示模式，可选配置分别为全部、仅统计图、仅告警列表
     */
    showPart?: 'all' | 'statistic' | 'list';
    /**
     * 列表每页显示的最大日志数量
     */
    pageSize?: 10 | 20 | 50 | 100;
    [k: string]: unknown;
};
/**
 * 所有图表通用的图表配置结构
 */
export type CommonChartSettings = {
    /**
     * 是否显示图表标题
     */
    showTitle?: boolean;
    /**
     * 图表的描述信息
     */
    titleDesc?: string;
    /**
     * 启用后，当数据量过大时，会对除“指标”外的其他类型数据自动执行采样查询，采样率不固定，会根据数据量大小动态调整
     */
    isSampling?: boolean;
    /**
     * 在图表中查询外部工作空间的数据，可选择“跨空间授权”中已添加的工作空间
     */
    changeWorkspace?: boolean;
    /**
     * 开启跨空间后，选择授权空间的空间 id 列表,用 “,” 号分割
     */
    workspaceUUID?: string;
    /**
     * 开启跨空间后，选择授权空间的空间名称
     */
    workspaceName?: (string | null)[];
    /**
     * 应用于实际查询字段与前端显示字段不一致时，a→b，即实际查询字段 a，图表中映射显示为字段 b
     */
    showFieldMapping?: boolean;
    /**
     * 是否开启千分位分割符显示
     */
    openThousandsSeparator?: boolean;
    /**
     * 图表值精确的小数点位数
     */
    precision?: string;
    /**
     * 启用时间偏移后，当查询相对时间区间时，实际查询时间范围向前偏移 1 分钟，以防止入库延迟导致数据获取为空。如：当前为12:30，查询最近15分钟的数据，开启时间偏移后，实际查询的时间是：12:14-12:29。
     */
    openTimeOffset?: boolean;
    /**
     * 区分别名版本，固定为 2
     */
    aliasVersion?: 2;
    [k: string]: unknown;
} & ChartTimeSettings;
/**
 * 固定图表查询的时间范围，无视仪表板和其他页面上的时间选择器
 */
export type ChartsSettingsSettingsFixedTimeSchemaJson = string | {
    key: 'range';
    originKey: 'range';
    /**
     * 开始时间时间戳，单位毫秒
     */
    startTime: number;
    /**
     * 结束时间时间戳，单位毫秒
     */
    endTime: number;
    /**
     * 开始时间与结束时间的显示格式
     */
    text: string;
    [k: string]: unknown;
};
/**
 * 柱状图配置信息
 */
export type ChartBarSettings = CommonChartSettings & {
    /**
     * 柱状图显示类型，横向显示还是纵向显示
     */
    direction?: 'vertical' | 'horizontal';
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    levels?: ChartLevelsSettings;
    stackType?: CommonChartStackTypeSettings;
    stackContent?: CommonChartStackContentSettings;
    /**
     * 是否开启堆叠模式
     */
    openStack?: boolean;
    /**
     * 是否是排行榜类型图表，柱状图固定为 false
     */
    showTopSize?: false;
    /**
     * 区分别名版本，固定为 2
     */
    aliasVersion?: 2;
    /**
     * 是否开启时间分片，时序图固定开启
     */
    isTimeInterval?: boolean;
    /**
     *  横坐标显示类型，柱状图固定显示分组
     */
    xAxisShowType?: 'groupBy';
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 图表别名配置完整结构。
 */
export type ChartAliasSettings = {
    /**
     * 别名，可以是固定字符串，也可以是特殊变量，{{tags}} 表示替换为所有“标签名”和“标签值”，{{host}} 表示替换为 host 的“标签值”
     */
    alias: string;
    /**
     * 需要替换为别名对应的指标名称
     */
    name: string;
    /**
     * 需要替换为别名对应的指标名称,冗余字段
     */
    key: string;
    [k: string]: unknown;
}[];
/**
 * 图表颜色配置完整结构。
 */
export type ChartColorsSettings = {
    /**
     * 颜色色值
     */
    color: string;
    /**
     * 需要设置颜色对应的指标名称
     */
    name: string;
    /**
     * 需要设置颜色的指标名称,冗余字段
     */
    key: string;
    [k: string]: unknown;
}[];
/**
 * 图表基线配置完整结构。
 */
export type ChartLevelsSettings = {
    /**
     * 颜色色值
     */
    bgColor: string;
    /**
     * 需要设置基线对应等级的指标值
     */
    value: number;
    /**
     * 基线显示名称
     */
    title: string;
    [k: string]: unknown;
}[];
/**
 * 柱状图堆叠模式
 */
export type CommonChartStackTypeSettings = 'time' | 'percent';
/**
 * 柱状图堆叠模式下，横坐标显示类型
 */
export type CommonChartStackContentSettings = 'group' | 'index';
/**
 * 图表全局设置单位
 *
 * @maxItems 2
 */
export type ChartUnitItemsSettings = [] | [
    'custom' | 'length' | 'area' | 'mass' | 'volume' | 'each' | 'temperature' | 'time' | 'digital' | 'diitalUnit' | 'partsPer' | 'speed' | 'pace' | 'pressure' | 'current' | 'voltage' | 'power' | 'reactivePower' | 'apparentPower' | 'energy' | 'reactiveEnergy' | 'volumeFlowRate' | 'illuminance' | 'frequency' | 'angle' | 'throughput' | 'percent' | 'rmb' | 'currencySymbol'
] | [
    ('custom' | 'length' | 'area' | 'mass' | 'volume' | 'each' | 'temperature' | 'time' | 'digital' | 'diitalUnit' | 'partsPer' | 'speed' | 'pace' | 'pressure' | 'current' | 'voltage' | 'power' | 'reactivePower' | 'apparentPower' | 'energy' | 'reactiveEnergy' | 'volumeFlowRate' | 'illuminance' | 'frequency' | 'angle' | 'throughput' | 'percent' | 'rmb' | 'currencySymbol'),
    (('mm' | 'cm' | 'm' | 'in' | 'ft-us' | 'ft' | 'mi' | 'mm2' | 'cm2' | 'm2' | 'ha' | 'km2' | 'in2' | 'ft2' | 'ac' | 'mi2' | 'mcg' | 'mg' | 'g' | 'kg' | 'oz' | 'lb' | 'mt' | 't' | 'mm3' | 'cm3' | 'ml' | 'l' | 'kl' | 'm3' | 'km3' | 'tsp' | 'Tbs' | 'in3' | 'fl-oz' | 'cup' | 'pnt' | 'qt' | 'gal' | 'ft3' | 'yd3' | 'mm3/s' | 'cm3/s' | 'ml/s' | 'cl/s' | 'dl/s' | 'l/s' | 'l/min' | 'l/h' | 'kl/s' | 'kl/min' | 'kl/h' | 'm3/s' | 'm3/min' | 'm3/h' | 'km3/s' | 'tsp/s' | 'Tbs/s' | 'in3/s' | 'in3/min' | 'in3/h' | 'fl-oz/s' | 'fl-oz/min' | 'fl-oz/h' | 'cup/s' | 'pnt/s' | 'pnt/min' | 'pnt/h' | 'qt/s' | 'gal/s' | 'gal/min' | 'gal/h' | 'ft3/s' | 'ft3/min' | 'ft3/h' | 'yd3/s' | 'yd3/min' | 'yd3/h' | 'C' | 'F' | 'K' | 'R' | 'ns' | 'μs' | 'ms' | 's' | 'min' | 'h' | 'd' | 'week' | 'month' | 'year' | 'Hz' | 'mHz' | 'kHz' | 'MHz' | 'GHz' | 'THz' | 'rpm' | 'deg/s' | 'rad/s' | 'm/s' | 'km/h' | 'm/h' | 'knot' | 'ft/s' | 's/m' | 'min/km' | 's/ft' | 'Pa' | 'hPa' | 'kPa' | 'MPa' | 'bar' | 'torr' | 'psi' | 'ksi' | 'b' | 'Kb' | 'Mb' | 'Gb' | 'Tb' | 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'lx' | 'ft-cd' | 'ppm' | 'ppb' | 'ppt' | 'ppq' | 'V' | 'mV' | 'kV' | 'A' | 'mA' | 'kA' | 'W' | 'mW' | 'kW' | 'MW' | 'GW' | 'VA' | 'mVA' | 'kVA' | 'MVA' | 'GVA' | 'VAR' | 'mVAR' | 'kVAR' | 'MVAR' | 'GVAR' | 'Wh' | 'mWh' | 'kWh' | 'MWh' | 'GWh' | 'J' | 'kJ' | 'VARh' | 'mVARh' | 'kVARh' | 'MVARh' | 'GVARh' | 'deg' | 'rad' | 'grad' | 'arcmin' | 'arcsec') | string)
];
/**
 * 图表单位数据配置
 *
 * @maxItems 2
 */
export type ChartUnitItemsSettings1 = [] | [
    'custom' | 'length' | 'area' | 'mass' | 'volume' | 'each' | 'temperature' | 'time' | 'digital' | 'diitalUnit' | 'partsPer' | 'speed' | 'pace' | 'pressure' | 'current' | 'voltage' | 'power' | 'reactivePower' | 'apparentPower' | 'energy' | 'reactiveEnergy' | 'volumeFlowRate' | 'illuminance' | 'frequency' | 'angle' | 'throughput' | 'percent' | 'rmb' | 'currencySymbol'
] | [
    ('custom' | 'length' | 'area' | 'mass' | 'volume' | 'each' | 'temperature' | 'time' | 'digital' | 'diitalUnit' | 'partsPer' | 'speed' | 'pace' | 'pressure' | 'current' | 'voltage' | 'power' | 'reactivePower' | 'apparentPower' | 'energy' | 'reactiveEnergy' | 'volumeFlowRate' | 'illuminance' | 'frequency' | 'angle' | 'throughput' | 'percent' | 'rmb' | 'currencySymbol'),
    (('mm' | 'cm' | 'm' | 'in' | 'ft-us' | 'ft' | 'mi' | 'mm2' | 'cm2' | 'm2' | 'ha' | 'km2' | 'in2' | 'ft2' | 'ac' | 'mi2' | 'mcg' | 'mg' | 'g' | 'kg' | 'oz' | 'lb' | 'mt' | 't' | 'mm3' | 'cm3' | 'ml' | 'l' | 'kl' | 'm3' | 'km3' | 'tsp' | 'Tbs' | 'in3' | 'fl-oz' | 'cup' | 'pnt' | 'qt' | 'gal' | 'ft3' | 'yd3' | 'mm3/s' | 'cm3/s' | 'ml/s' | 'cl/s' | 'dl/s' | 'l/s' | 'l/min' | 'l/h' | 'kl/s' | 'kl/min' | 'kl/h' | 'm3/s' | 'm3/min' | 'm3/h' | 'km3/s' | 'tsp/s' | 'Tbs/s' | 'in3/s' | 'in3/min' | 'in3/h' | 'fl-oz/s' | 'fl-oz/min' | 'fl-oz/h' | 'cup/s' | 'pnt/s' | 'pnt/min' | 'pnt/h' | 'qt/s' | 'gal/s' | 'gal/min' | 'gal/h' | 'ft3/s' | 'ft3/min' | 'ft3/h' | 'yd3/s' | 'yd3/min' | 'yd3/h' | 'C' | 'F' | 'K' | 'R' | 'ns' | 'μs' | 'ms' | 's' | 'min' | 'h' | 'd' | 'week' | 'month' | 'year' | 'Hz' | 'mHz' | 'kHz' | 'MHz' | 'GHz' | 'THz' | 'rpm' | 'deg/s' | 'rad/s' | 'm/s' | 'km/h' | 'm/h' | 'knot' | 'ft/s' | 's/m' | 'min/km' | 's/ft' | 'Pa' | 'hPa' | 'kPa' | 'MPa' | 'bar' | 'torr' | 'psi' | 'ksi' | 'b' | 'Kb' | 'Mb' | 'Gb' | 'Tb' | 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'lx' | 'ft-cd' | 'ppm' | 'ppb' | 'ppt' | 'ppq' | 'V' | 'mV' | 'kV' | 'A' | 'mA' | 'kA' | 'W' | 'mW' | 'kW' | 'MW' | 'GW' | 'VA' | 'mVA' | 'kVA' | 'MVA' | 'GVA' | 'VAR' | 'mVAR' | 'kVAR' | 'MVAR' | 'GVAR' | 'Wh' | 'mWh' | 'kWh' | 'MWh' | 'GWh' | 'J' | 'kJ' | 'VARh' | 'mVARh' | 'kVARh' | 'MVARh' | 'GVARh' | 'deg' | 'rad' | 'grad' | 'arcmin' | 'arcsec') | string)
];
/**
 * 中国地图配置信息
 */
export type ChartChinaMapSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    levels?: ChartLevelsSettings;
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    /**
     * 区间颜色选择色系的唯一对应健
     */
    rangeColorKey?: 'light-blue' | 'light-red' | 'dark-red' | 'dark-yellow' | 'dark-green' | 'dark-blue' | 'dark-purple' | 'light-yellow' | 'light-purple' | 'light-green';
    /**
     * 区间颜色配置
     */
    levelArr?: {
        /**
         * 区间左范围值
         */
        min: number;
        /**
         * 区间右范围值
         */
        max: number;
        /**
         * 区间范围内显示色值
         */
        color: string;
        /**
         * 是否是自动生成的区间范围
         */
        isAuto?: boolean;
        [k: string]: unknown;
    }[];
    /**
     * 显示图例的位置信息，可以选择隐藏，以及在底部区域
     */
    showLegend?: 'none' | 'bottom';
    /**
     * 是否显示地区排名列表
     */
    showTopList?: boolean;
    /**
     * 选择指标匹配色块大小，值为对应查询语句 code 名称,根据查询语句顺序以大些字母命名
     */
    mainMeasurementQueryCode?: string;
    /**
     * 选择对应省份的指标名称
     */
    provinceKey?: string;
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 漏斗图配置信息
 */
export type ChartFunnelSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    levels?: ChartLevelsSettings;
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 仪表盘图表配置信息
 */
export type ChartGaugeSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    /**
     * 仪表盘分段阈值最小值
     */
    min?: number;
    /**
     * 仪表盘分段阈值最大值
     */
    max?: number;
    /**
     * 仪表盘分段阈值设置
     */
    levels?: {
        value?: number[];
        /**
         * 颜色色值
         */
        lineColor?: string;
        /**
         * 表达式操作符,仪表盘固定值 <=
         */
        operation?: '<=';
        [k: string]: unknown;
    }[];
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 热力图配置信息
 */
export type ChartHeatmapSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    levels?: ChartLevelsSettings;
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    /**
     * 显示图例的位置信息，可以选择隐藏，以及在底部区域
     */
    showLegend?: 'none' | 'bottom';
    /**
     * 选择指标匹配色块大小，值为对应查询语句 code 名称,根据查询语句顺序以大些字母命名
     */
    mainMeasurementQueryCode?: string;
    [k: string]: unknown;
} & ChartUnitsSettings & CommonGradualColorSettings;
/**
 * 蜂窝图配置信息
 */
export type ChartHexgonSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    /**
     * 区间颜色选择色系的唯一对应健
     */
    rangeColorKey?: 'light-blue' | 'light-red' | 'dark-red' | 'dark-yellow' | 'dark-green' | 'dark-blue' | 'dark-purple' | 'light-yellow' | 'light-purple' | 'light-green';
    /**
     * 区间颜色配置
     */
    levelArr?: {
        /**
         * 区间左范围值
         */
        min: number;
        /**
         * 区间右范围值
         */
        max: number;
        /**
         * 区间范围内显示色值
         */
        color: string;
        /**
         * 是否是自动生成的区间范围
         */
        isAuto?: boolean;
        [k: string]: unknown;
    }[];
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    /**
     * 显示图例的位置信息，可以选择隐藏，以及在底部区域
     */
    showLegend?: 'none' | 'bottom';
    /**
     * 选择指标匹配色块大小，值为对应查询语句 code 名称,根据查询语句顺序以大些字母命名
     */
    mainMeasurementQueryCode?: string;
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 直方图配置信息
 */
export type ChartHistogramSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    levels?: ChartLevelsSettings;
    legendPostion?: CommonChartLegendPositionSettings;
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    /**
     * 冗余字段，固定为 histogram
     */
    chartType?: 'histogram';
    /**
     * 冗余字段，固定为 vertical
     */
    direction?: 'vertical';
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 图表图列位置显示配置信息
 */
export type CommonChartLegendPositionSettings = 'none' | 'bottom' | 'right' | 'circle';
/**
 * 日志流图配置信息
 */
export type ChartLogSettings = CommonChartSettings & {
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    /**
     * 冗余字段，在对象列表图中，固定为 log
     */
    currentChartType?: 'log';
    /**
     * 需要查询日志索引名称的合集，多个索引名称用 “,”号分割
     */
    index?: string;
    /**
     * 默认固定显示的列，不能删除修改，比如时间
     */
    inColumns?: {
        /**
         * 列的字段名称
         */
        field: string;
        /**
         * 显示表头的名称
         */
        headerName: string;
        /**
         * 是否需要隐藏列
         */
        hide?: boolean;
        [k: string]: unknown;
    }[];
    /**
     * 添加显示列
     */
    addColumns?: {
        /**
         * 需要添加列的字段名称
         */
        field?: string;
        /**
         * 显示表头的名称
         */
        headerName?: string;
        /**
         * 是否需要隐藏列
         */
        hide?: boolean;
        [k: string]: unknown;
    }[];
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 对象列表图配置信息
 */
export type ChartObjectSettings = CommonChartSettings & {
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    /**
     * 冗余字段，在对象列表图中，固定为 object
     */
    currentChartType?: 'object';
    /**
     * 添加显示列
     */
    addColumns?: {
        /**
         * 需要添加列的字段名称
         */
        field?: string;
        /**
         * 显示表头的名称
         */
        headerName?: string;
        /**
         * 是否需要隐藏列
         */
        hide?: boolean;
        [k: string]: unknown;
    }[];
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 饼图配置信息
 */
export type ChartPieSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    levels?: ChartLevelsSettings;
    chartType?: ChartChartType;
    legendPostion?: CommonChartLegendPositionSettings;
    /**
     * 是否开启合并数据项配置
     */
    enableCombine?: boolean;
    /**
     * 饼图合并数据项配置
     */
    combine?: {
        /**
         * 百分比
         */
        percent: string;
        /**
         * 对值的操作项
         */
        operator: 'lt' | 'lte' | 'gt' | 'gte';
        [k: string]: unknown;
    };
    /**
     * 主指标对应的code 名称，在饼图中固定为 A
     */
    mainMeasurementQueryCode?: 'A';
    /**
     * 主指标的排序方式
     */
    mainMeasurementSort?: 'top' | 'bottom';
    /**
     * 主指标排序返回数据线的限制条数
     */
    mainMeasurementLimit?: number;
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    /**
     * 饼图没有匹配数据指标，显示的颜色块色值
     */
    otherColor?: string;
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 图表对应显示类型。
 */
export type ChartChartType = (('line' | 'areaLine' | 'bar') | ('pie' | 'doughnut' | 'customized')) & string;
/**
 * 桑基图配置信息
 */
export type ChartSankeySettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    levels?: ChartLevelsSettings;
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 散点图气泡图配置信息
 */
export type ChartScatterBubbleSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 时序图配置信息
 */
export type ChartSequenceSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    levels?: ChartLevelsSettings;
    showLine?: CommonChartShowLineSettings;
    chartType?: ChartChartType;
    showLabel?: CommonChartShowLabelSettings;
    stackType?: CommonChartStackTypeSettings;
    /**
     * 是否开启堆叠模式
     */
    openStack?: boolean;
    connectNulls?: CommonChartConnectNullSettings;
    legendValues?: CommonChartLegendValuesSettings;
    legendPostion?: CommonChartLegendPositionSettings;
    /**
     * 是否开启时间分片，时序图固定开启
     */
    isTimeInterval?: true;
    /**
     *  横坐标显示数据类型，时序图柱状图固定显示时间
     */
    xAxisShowType?: 'time';
    /**
     * 主指标对应的code 名称，在时序图中固定为 A
     */
    mainMeasurementQueryCode?: 'A';
    [k: string]: unknown;
} & CommonChartGroupbySettings & ChartUnitsSettings & ChartCompare;
/**
 * 是否开启混合图模式，柱状图或者概览图可以开启该选项。
 */
export type CommonChartShowLineSettings = boolean;
/**
 * 柱状图是否显示，每个柱对应的 value 值
 */
export type CommonChartShowLabelSettings = boolean;
export type CommonChartConnectNullSettings = boolean;
export type CommonChartLegendValuesSettings = ('first' | 'last' | 'avg' | 'min' | 'max' | 'sum' | 'count')[];
/**
 * 支持图表类型枚举
 */
export type ChartType = 'group' | 'sequence' | 'singlestat' | 'pie' | 'bar' | 'histogram' | 'slo' | 'toplist' | 'gauge' | 'scatter' | 'bubble' | 'table' | 'treemap' | 'funnel' | 'chinamap' | 'worldmap' | 'hexgon' | 'heatmap' | 'topology' | 'sankey' | 'log' | 'object' | 'alarm' | 'text' | 'video' | 'picture' | 'command' | 'iframe';
/**
 * 概览图配置信息
 */
export type ChartSinglestatSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    /**
     * 概览图规则映射对应颜色配置数据
     */
    levels?: {
        value: (string | number)[];
        /**
         * 映射对应的背景颜色
         */
        bgColor: string;
        /**
         * 映射对应的字体颜色
         */
        fontColor: string;
        /**
         * 映射指标数据值的计算规则
         */
        operation: '>' | '>=' | '<' | '<=' | '=' | '!=' | 'between' | '=~' | '!=~' | 'nodata';
        [k: string]: unknown;
    }[];
    /**
     * 概览图规则映射对应显示指标配置
     */
    mappings?: {
        originalVal?: (string | number)[];
        /**
         * 映射指标数据值的计算规则
         */
        operation?: '>' | '>=' | '<' | '<=' | '=' | '!=' | 'between' | '=~' | '!=~' | 'nodata';
        /**
         * 映射对应的显示文本
         */
        mappingVal?: string | number;
        [k: string]: unknown;
    }[];
    showLine?: CommonChartShowLineSettings;
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    /**
     *  横坐标显示数据类型，时序图柱状图固定显示时间
     */
    xAxisShowType?: 'time';
    /**
     * 字体颜色的色值
     */
    fontColor?: string;
    /**
     * 概览图背景颜色色值
     */
    bgColor?: string;
    /**
     * 混合图开启后，显示背景图表类型，可以选择柱状图或者折线图
     */
    sequenceChartType?: 'line' | 'bar';
    /**
     * 混合图开启后，是否显示背景图表的坐标轴
     */
    showLineAxis?: boolean;
    [k: string]: unknown;
} & ChartUnitsSettings & ChartCompare;
/**
 * 表格图配置信息
 */
export type ChartTableSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    levels?: ChartLevelsSettings;
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    /**
     * 表格类型：支持分组模式和时序模式
     */
    queryMode?: 'toGroupColumn' | 'toOneColumn';
    /**
     * 需要显示的列，指标名称列表
     */
    showColumns?: string[];
    /**
     * 表格图规则映射配置
     */
    valMappings?: {
        /**
         * 需要映射的指标字段名称
         */
        field?: string;
        originalVal?: (string | number)[];
        /**
         * 映射对应的显示文本
         */
        mappingVal?: string | number;
        /**
         * 映射表达式操作符
         */
        operation?: '>' | '>=' | '<' | '<=' | '=' | '!=' | 'between' | '=~' | '!=~' | 'nodata';
        [k: string]: unknown;
    }[];
    /**
     * 表格图规则映射对应颜色配置数据
     */
    valColorMappings?: {
        /**
         * 需要映射的指标字段名称
         */
        field: string;
        value: (string | number)[];
        /**
         * 映射对应的背景颜色
         */
        bgColor: string;
        /**
         * 映射对应的字体颜色
         */
        fontColor: string;
        /**
         * 映射指标数据值的计算规则
         */
        operation: '>' | '>=' | '<' | '<=' | '=' | '!=' | 'between' | '=~' | '!=~' | 'nodata';
        [k: string]: unknown;
    }[];
    /**
     * 选择指标对应的code 名称,根据查询语句顺序以大些字母命名
     */
    mainMeasurementQueryCode?: string;
    /**
     * 选择指标的排序方式
     */
    mainMeasurementSort?: 'top' | 'bottom';
    /**
     * 选择指标排序返回数据线的限制条数
     */
    mainMeasurementLimit?: number;
    /**
     * 冗余字段, 时序表格图为true, 分组表格图为false
     */
    disableFuncList?: boolean;
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 排行榜图表配置信息
 */
export type ChartToplistSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    levels?: ChartLevelsSettings;
    /**
     * 冗余字段图表类型，排行榜固定为 bar
     */
    chartType?: 'bar';
    /**
     * 排行榜规则映射对应颜色配置数据
     */
    colorMappings?: {
        value: (string | number)[];
        /**
         * 映射对应的背景颜色
         */
        bgColor: string;
        /**
         * 映射指标数据值的计算规则
         */
        operation: '>' | '>=' | '<' | '<=' | '=' | '!=' | 'between' | '=~' | '!=~' | 'nodata';
        [k: string]: unknown;
    }[];
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    /**
     * 主指标对应的code 名称，在饼图中固定为 A
     */
    mainMeasurementQueryCode?: 'A';
    /**
     * 主指标的排序方式
     */
    mainMeasurementSort?: 'top' | 'bottom';
    /**
     * 主指标排序返回数据线的限制条数
     */
    mainMeasurementLimit?: number;
    /**
     * 冗余字段，固定值
     */
    bar?: {
        direction?: 'horizontal';
        xAxisShowType?: 'groupBy';
        [k: string]: unknown;
    };
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 矩形树图配置信息
 */
export type ChartTreeMapSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    levels?: ChartLevelsSettings;
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    /**
     * 图例是否显示标签
     */
    showLabel?: boolean;
    /**
     * 图例是否显示百分比
     */
    showPercent?: boolean;
    /**
     * 图例是否显示值
     */
    showLabelValue?: boolean;
    /**
     * 选择指标匹配色块大小，值为对应查询语句 code 名称,根据查询语句顺序以大些字母命名
     */
    mainMeasurementQueryCode?: string;
    /**
     * 选择指标的排序方式
     */
    mainMeasurementSort?: 'top' | 'bottom';
    /**
     * 选择指标排序返回数据线的限制条数
     */
    mainMeasurementLimit?: number;
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 中国地图配置信息
 */
export type ChartWorldMapSettings = CommonChartSettings & {
    alias?: ChartAliasSettings;
    colors?: ChartColorsSettings;
    levels?: ChartLevelsSettings;
    /**
     * 是否开启时间分片
     */
    isTimeInterval?: boolean;
    /**
     * 区间颜色选择色系的唯一对应健
     */
    rangeColorKey?: 'light-blue' | 'light-red' | 'dark-red' | 'dark-yellow' | 'dark-green' | 'dark-blue' | 'dark-purple' | 'light-yellow' | 'light-purple' | 'light-green';
    /**
     * 区间颜色配置
     */
    levelArr?: {
        /**
         * 区间左范围值
         */
        min: number;
        /**
         * 区间右范围值
         */
        max: number;
        /**
         * 区间范围内显示色值
         */
        color: string;
        /**
         * 是否是自动生成的区间范围
         */
        isAuto?: boolean;
        [k: string]: unknown;
    }[];
    /**
     * 显示图例的位置信息，可以选择隐藏，以及在底部区域
     */
    showLegend?: 'none' | 'bottom';
    /**
     * 是否显示地区排名列表
     */
    showTopList?: boolean;
    /**
     * 选择指标匹配色块大小，值为对应查询语句 code 名称,根据查询语句顺序以大些字母命名
     */
    mainMeasurementQueryCode?: string;
    /**
     * 选择对应国家的指标名称
     */
    provinceKey?: string;
    [k: string]: unknown;
} & ChartUnitsSettings;
/**
 * 支持图表类型枚举
 */
export type ChartType1 = 'group' | 'sequence' | 'singlestat' | 'pie' | 'bar' | 'histogram' | 'slo' | 'toplist' | 'gauge' | 'scatter' | 'bubble' | 'table' | 'treemap' | 'funnel' | 'chinamap' | 'worldmap' | 'hexgon' | 'heatmap' | 'topology' | 'sankey' | 'log' | 'object' | 'alarm' | 'text' | 'video' | 'picture' | 'command' | 'iframe';
/**
 * 支持图表类型枚举
 */
export type ChartType2 = 'group' | 'sequence' | 'singlestat' | 'pie' | 'bar' | 'histogram' | 'slo' | 'toplist' | 'gauge' | 'scatter' | 'bubble' | 'table' | 'treemap' | 'funnel' | 'chinamap' | 'worldmap' | 'hexgon' | 'heatmap' | 'topology' | 'sankey' | 'log' | 'object' | 'alarm' | 'text' | 'video' | 'picture' | 'command' | 'iframe';
/**
 * 图表查询语句列表结构
 */
export type ChartQueries = ChartQueryItem[];
/**
 * 观测云仪表板完整结构
 */
export interface DashboardData {
    /**
     * 仪表板标题
     */
    title?: string;
    /**
     * 仪表板图表结构
     */
    main?: {
        vars?: ChartVarsSettings;
        /**
         * 图表合集配置
         */
        charts?: ChartData[];
        /**
         * 分组配置
         */
        groups?: {
            /**
             * 图表分组名称
             */
            name?: string;
            /**
             * 分组的额外配置，比如背景颜色
             */
            extend?: {
                /**
                 * 分组块的背景颜色
                 */
                bgColor?: string;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        }[];
        /**
         * 固定字段
         */
        type?: 'template';
        [k: string]: unknown;
    };
    /**
     * 仪表板额外配置信息
     */
    dashboardExtend?: {
        /**
         * 分组是否收起打开配置信息,图表名称为 key， value 为 boolean。 false 为关闭，true 为打开
         */
        groupUnfoldStatus?: {
            /**
             * 图表名称
             */
            [k: string]: boolean;
        };
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/**
 * 图表视图变量完整结构
 */
export interface ChartVarsItem {
    definition?: {
        /**
         * 定义 type 为 metrc 类型对应的指标 tag
         */
        tag?: string;
        /**
         * 定义 type 为 metrc,object,custom_object, logging, tracing,rum,securit 类型对应的 field
         */
        field?: string;
        /**
         * 定义 type 为 dql,promql,custom_object类型对应的 dql、promql,或者以‘,’号分割的自定义字符串数据
         */
        value?: string;
        /**
         * 1.type 为 metric 对应指标集 2. type 为 logging,rum 对应 source。
         */
        metric?: string;
        /**
         * type 为 object, custom_object 对应对象 source
         */
        object?: string;
        /**
         * 视图变量默认填充值
         */
        defaultVal?: {
            /**
             * 默认填充值 label，如果没有则和 value 保持一致
             */
            label?: string;
            /**
             * 默认填充值 value
             */
            value?: string;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    /**
     * 视图变量查询类型，对应关系分别为 QUERY:【DQL】,PROMQL_QUERY:【PROMQL】,TAG:【指标】,FIELD:【基础对象】,FIELD:【自定义对象】,LOGGING:【日志】,TRACING:【应用性能】,RUM:【用户访问】,SECURITY:【安全巡检】,CUSTOM_LIST:【自定义】
     */
    type?: 'QUERY' | 'PROMQL_QUERY' | 'FIELD' | 'TAG' | 'LOGGING' | 'TRACING' | 'RUM' | 'SECURITY' | 'CUSTOM_LIST';
    /**
     * 需要被替换的变量名
     */
    code?: string;
    /**
     * 对应关系分别为 dataflux:【DQL】,dataflux:【PROMQL】,ftinfluxdb:【指标】,object:【基础对象】,custom_object:【自定义对象】,dataflux:【日志】,dataflux:【应用性能】,dataflux:【用户访问】,dataflux:【安全巡检】,custom:【自定义】
     */
    datasource?: 'dataflux' | 'ftinfluxdb' | 'custom' | 'object' | 'custom_object';
    /**
     * 视图变量显示名称
     */
    name?: string;
    /**
     * 当前项视图变量在列表中的顺序
     */
    seq?: number;
    /**
     * 是否隐藏该项视图变量
     */
    hide?: 0 | 1;
    /**
     * 设置视图变量是否能多选
     */
    multiple?: boolean;
    /**
     * 设置视图变量列出值是否包含 *
     */
    includeStar?: boolean;
    /**
     * 列出值排序
     */
    valueSort?: 'asc' | 'desc';
    [k: string]: unknown;
}
/**
 * 图表完整结构
 */
export interface ChartData {
    extend: {
        settings?: ChartSettings;
        [k: string]: unknown;
    };
    group?: {
        /**
         * 分组名称
         */
        name?: string;
        [k: string]: unknown;
    };
    /**
     * 图表名称
     */
    name: string;
    /**
     * 图表位置信息
     */
    pos: {
        /**
         * 图表高度,每行的高度默认为10像素,比如 h 为12, 则实际高度为 12 * 10
         */
        h: number;
        /**
         * 图表宽度,栅格系统的最大列数为 24, 比如 w为12，则显示宽度则为容器宽度的 1/2 倍
         */
        w: number;
        /**
         * 图表距离容器的水平距离,栅格系统的最大列数为 24, 比如 x为12，则图表距离容器左边的水平距离为容器宽度 1/2 倍
         */
        x: number;
        /**
         * 图表距离容器垂直距离,每行的高度默认为10像素,比如 y为12, 则实际高度为 12 * 10
         */
        y: number;
        [k: string]: unknown;
    };
    type: ChartType1;
    queries: ChartQueries;
    [k: string]: unknown;
}
/**
 * 图表时间相关配置完整结构。
 */
export interface ChartTimeSettings {
    timeInterval: 'auto' | '1ms' | '10ms' | '50ms' | '100ms' | '500ms' | '1s' | '10s' | '20s' | '30s' | '1m' | '5m' | '10m' | '30m' | '1h' | '6h' | '12h' | '1d' | '7d' | '30d';
    /**
     * 返回最大数据电枢
     */
    maxPointCount?: number;
    fixedTime: ChartsSettingsSettingsFixedTimeSchemaJson;
    [k: string]: unknown;
}
/**
 * 图表单位配置完整结构。
 */
export interface ChartUnitsSettings {
    /**
     * 单位设置类型，分为全局和自定义两种类型
     */
    unitType: 'global' | 'custom';
    globalUnit?: ChartUnitItemsSettings;
    /**
     * 根据指标自定义单位
     */
    units?: {
        /**
         * 需要设置的指标名称,冗余字段
         */
        name: string;
        /**
         * 需要设置的指标名称
         */
        key: string;
        /**
         * 自定义类型的单位,填充的单位名称
         */
        unit: string;
        units?: ChartUnitItemsSettings1;
        [k: string]: unknown;
    }[];
    [k: string]: unknown;
}
/**
 * 热力图配置信息
 */
export interface CommonGradualColorSettings {
    /**
     * 颜色匹配设置
     */
    gradualColor?: {
        /**
         * 颜色匹配设置模式，可以根据颜色色系，自动匹配数值对应色块
         */
        type: 'auto' | 'custom';
        /**
         * 提供选择的色系
         */
        colorKey: 'interpolateYlOrBr' | 'interpolateBuPu' | 'interpolatePuBu' | 'interpolateBuGn';
        /**
         * 在自动模式下，可以手动设置区间范围最小值
         */
        minVal?: number;
        /**
         * 在自动模式下，可以手动设置的区间范围最大值
         */
        maxVal?: number;
        /**
         * 在渐变区间发范围内，可以手动填写生成的色块数量
         */
        levelCount: number;
        /**
         * 自定义模式下，设置的区间映射列表
         */
        levels?: {
            /**
             * 自定义区间块最小值
             */
            min?: {
                [k: string]: unknown;
            };
            /**
             * 自定义区间块最大值
             */
            max?: {
                [k: string]: unknown;
            };
            /**
             * 自定义区间块颜色色值
             */
            color: {
                [k: string]: unknown;
            };
            [k: string]: unknown;
        }[];
    };
    [k: string]: unknown;
}
/**
 * Iframe 图表配置信息
 */
export interface ChartIframeSettings {
    /**
     * 是否显示图表标题
     */
    showTitle?: boolean;
    /**
     * 图表的描述信息
     */
    titleDesc?: string;
    /**
     * iframe 需要填充的访问 URL
     */
    url?: string;
    [k: string]: unknown;
}
/**
 * 图片图表配置信息
 */
export interface ChartPictureSettings {
    /**
     * 是否显示图表标题
     */
    showTitle?: boolean;
    /**
     * 图表的描述信息
     */
    titleDesc?: string;
    /**
     * 图片访问 URL
     */
    url?: string;
    backgroundStyle?: {
        /**
         * 图片的平铺模式
         */
        backgroundSize?: 'fill' | 'contain' | 'cover';
        /**
         * 图片是否居中显示
         */
        backgroundPosition?: 'center';
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/**
 * 图表分组排序相关配置
 */
export interface CommonChartGroupbySettings {
    /**
     * 当分组存在时，最大显示分组数量
     */
    slimit?: number;
    /**
     * 当分组存在时，分组返回的排序
     */
    sorderByOrder?: 'asc' | 'desc';
    [k: string]: unknown;
}
/**
 * 图表同期对比配置完整结构。
 */
export interface ChartCompare {
    compareChartType?: ChartType;
    /**
     * 是否开启同环比功能
     */
    openCompare?: boolean;
    /**
     * 选择的同环比类型
     */
    compareType?: ('hourCompare' | 'dayCompare' | 'weekCompare' | 'monthCompare' | 'circleCompare')[];
    /**
     * 选择同环比对比的详细映射信息，与 compareType 对应
     */
    compares?: {
        /**
         * 对比名称
         */
        label: string;
        value: 'hourCompare' | 'dayCompare' | 'weekCompare' | 'monthCompare' | 'circleCompare';
        [k: string]: unknown;
    }[];
    [k: string]: unknown;
}
/**
 * 文本图配置信息
 */
export interface ChartTextSettings {
    /**
     * 是否显示图表标题
     */
    showTitle?: boolean;
    /**
     * 图表的描述信息
     */
    titleDesc?: string;
    [k: string]: unknown;
}
/**
 * 拓扑图配置信息
 */
export interface ChartTopologySettings {
    /**
     * 是否显示图表标题
     */
    showTitle?: boolean;
    /**
     * 图表的描述信息
     */
    titleDesc?: string;
    /**
     * 显示图例的位置信息，可以选择隐藏，以及在底部区域
     */
    showLegend?: 'none' | 'bottom';
    fixedTime?: ChartsSettingsSettingsFixedTimeSchemaJson;
    /**
     * 颜色配置
     */
    color?: {
        /**
         * 颜色色系
         */
        key: 'color-first' | 'color-second' | 'color-third';
        min: number | null;
        max: number | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/**
 * 图表查询语句结构
 */
export interface ChartQueryItem {
    type?: ChartType2;
    /**
     * 冗余字段,固定值
     */
    datasource?: 'dataflux';
    /**
     * 查询语句类型，目前支持 dql 以及promql
     */
    qtype?: 'dql' | 'promql';
    /**
     * 查询语句的额外信息
     */
    query?: {
        /**
         * 图表查询语句，可以是 dql语句，也可以是 promql 语句
         */
        q?: string;
        /**
         * 查询语句的唯一标识，由单个大写英文字母构成
         */
        code?: string;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
