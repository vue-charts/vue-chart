import { reactive, computed } from "vue"
export default function (props) {
    let options = computed(() => {
        let _options = reactive({})
        _options.legend = props.legend

        if (!props.data || !(props.data instanceof Array) || props.data.length == 0) {
            _options.series = null
            return _options
        }

        _options.series = [{
            data: props.data,
            ...formatType(props)
        }]

        return _options
    })
    return options
}

const formatType = function (props) {
    return {
        type: 'pie',
        stillShowZeroSum: computed(() => !props.hiddenZeroPie),
        label: {
            show: computed(() => !props.hiddenLabel && !props.hiddenZeroPie && !props.centerLabel),
            position: computed(() => {
                if (props.centerLabel) return 'center'
                return null
            }),
            emphasis: computed(() => {
                if (props.centerLabel) return {
                    show: true
                }
                return null
            })
        },
        labelLine: computed(() => {
            if (props.centerLabel) return {
                show: false
            }
            return null
        }),
        emphasis: computed(() => {
            if (props.centerLabel) return {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
            return null
        }),
        radius: computed(() => {
            if (props.radius) return props.radius
            return '80%'
        }),
        roseType: computed(() => props.roseType ? 'area' : null)
    }
}