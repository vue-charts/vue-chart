export default function () {
    let props = {
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