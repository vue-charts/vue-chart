import { reactive, computed } from "vue"
export default function (props) {
    let options = computed(() => {
        let _options = reactive({})

        _options.xAxis = props.xAxis
        _options.yAxis = props.yAxis
        _options.legend = props.legend

        if (!props.data || !(props.data instanceof Array) || props.data.length == 0) {
            _options.series = null
            return
        }

        if (!(props.data[0] instanceof Array)) {
            _options.series = [{
                data: props.data,
                ...formatType(props)
            }]
        } else {
            _options.series = props.data.map(site => {
                return {
                    data: site,
                    ...formatType(props)
                }
            });
        }
        return _options
    })
    return options
}

const formatType = function (props) {
    return {
        type: 'bar',
        itemStyle: computed(() => props.itemStyle),
        stack: computed(() => props.stack),
        showBackground: computed(() => props.backgroundColor ? true : false),
        backgroundStyle: {
            color: computed(() => props.backgroundColor)
        },
        barWidth: computed(() => props.barOptions.barWidth),
        barMaxWidth: computed(() => props.barOptions.barMaxWidth),
        barMinWidth: computed(() => props.barOptions.barMinWidth),
        barGap: computed(() => props.barOptions.barGap),
        barCategoryGap: computed(() => props.barOptions.barCategoryGap)
    }
}