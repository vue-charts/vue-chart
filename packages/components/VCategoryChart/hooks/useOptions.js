import { reactive, computed } from "vue"
export default function (props) {
    let options = reactive({})
    options.xAxis = props.xAxis
    options.yAxis = props.yAxis
    options.legend = props.legend

    if (!props.data || !(props.data instanceof Array) || props.data.length == 0) {
        options.series = null
        return
    }


    if (!(props.data[0] instanceof Array)) {
        options.series = [{
            data: props.data,
            ...formatType(props)
        }]
    } else {
        options.series = props.data.map(site => {
            return {
                data: site,
                ...formatType(props)
            }
        });
    }
    return options
}

const formatType = function (props) {
    return {
        type: 'line',
        smooth: computed(() => props.smooth),
        step: computed(() => props.step ? 'middle' : null),
        areaStyle: computed(() => props.area ? {} : null),
        stack: computed(() => props.stack)
    }
}