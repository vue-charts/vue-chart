export default function () {
    let props = {
        xAxis: Object,
        yAxis: Object,
        legend: Object,
        itemStyle: Object,
        data: Array,
        stack: String,
        backgroundColor: String,
        barOptions: {
            type: Object,
            default() {
                return {}
            }
        }
    }
    return props
}