import * as echarts from 'echarts';
import { onMounted, watch, computed } from 'vue';
export default function (target, props) {
   let chart;
   console.log(props)
   const setChartSize = () => {
      if (props.width) {
         target.value.style.width = props.width
      }
      if (props.height) {
         target.value.style.height = props.height
      }
   }


   let options = computed(() => {
      let options = Object.assign({}, props.options)
      options.title = { text: props.title } || options.title
      options.series = props.series || options.series
      return options
   })
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
      const theme = props.theme || null
      const opst = props.opst || null

      chart = echarts.init(target.value, theme, opst)
      chart.setOption(options.value);
   }

   onMounted(() => {
      init()
   })

   watch(options, () => {
      chart.setOption(options.value)
   }, { deep: true })

   return chart;
}