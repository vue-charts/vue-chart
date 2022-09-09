import VChart from "./components/VCahrt/VChart"
import VCategoryChart from './components/VCategoryChart/VCategoryChart'
import VScatterChart from "./components/VScatterChart/VScatterChart"
import VBarChart from './components/VBarChart/VBarChart'
import VPieChart from "./components/VPieChart/VPieChart"
const components = [
   VChart, VCategoryChart, VBarChart, VPieChart, VScatterChart
]

const install = function (Vue) {
   components.forEach(component => {
      Vue.component(component.name, component)
   })
}

if (typeof window !== 'undefined' && window.Vue) {
   install(window.Vue)
}

export default { install }