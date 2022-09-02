import BarChart from "./components/BarChart"
import CategoryChart from "./components/CategoryChart"
import PieChart from "./components/PieChart"
import ScatterChart from "./components/ScatterChart"

const components = [
    BarChart,
    CategoryChart,
    PieChart,
    ScatterChart
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