import * as echarts from 'echarts';
import { onMounted, watch } from 'vue';

export default function (target, props) {
    let chart;

    const setChartSize = () => {
        if (props.width) {
            target.value.style.width = props.width
        }
        if (props.height) {
            target.value.style.height = props.height
        }
    }

    const init = () => {
        if (!target.value) {
            console.log("Need to provide a binding target for the chart")
            return
        }
        if (!props.options) {
            console.log("You did not provide any configuration data")
            return
        }
        setChartSize()
        const theme = props.theme ? props.theme : null
        const opst = props.opst ? props.opst : null
        chart = echarts.init(target.value, theme, opst)
        chart.setOption(props.options);
    }

    onMounted(() => {
        init()
    })

    watch(props.options, () => {
        chart.setOption(props.options)
    }, { deep: true })

    return chart;
}