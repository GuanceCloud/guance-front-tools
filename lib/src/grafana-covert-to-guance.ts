import { DashboardData as GuanceDashboardType, ChartVarsSettings } from './dashboard-charts'
import type { DashboardData as GrafanaDashboardType, VariableModel } from './grafana-dashbord'
import GuanceDashboardJSon from '../example/guance-dashboard.json'
import GrafanaDashboardJSon from '../example/grafana-dashboard.json'

const GuanceDashboarData: GuanceDashboardType = GuanceDashboardJSon as GuanceDashboardType
const GrafanaDashboardData: GrafanaDashboardType = GrafanaDashboardJSon as GrafanaDashboardType

const covert = (grafanaData: GrafanaDashboardType, guanceData: GuanceDashboardType) => {
  const covertGuanceResult: GuanceDashboardType = {}
  // 标题
  covertGuanceResult.title = grafanaData.title
  // 视图变量
  const guanceVars: ChartVarsSettings = []
  grafanaData.templating?.list?.forEach((_variable: VariableModel) => {
    const guanceVariableItem = {}
  })
}

const rum = () => {
  covert(GrafanaDashboardData, GuanceDashboarData)
}
