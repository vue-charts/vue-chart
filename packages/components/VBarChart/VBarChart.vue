<template>
  <div class="chart" ref="target"></div>
</template>
 
 <script>
import { ref } from "@vue/reactivity";
import useProps from "../../hooks/useProps";
import BarInit from "./hooks/BarInit";
import BarProps from "./hooks/BarProps";
export default {
  name: "v-bar-chart",
};
</script>
 <script setup>
// eslint-disable-next-line
const props = defineProps(Object.assign(BarProps(), useProps()));

console.log(props);
const target = ref(null);
// eslint-disable-next-line
let chart = BarInit(target, props);
// eslint-disable-next-line
</script>
 
 <style lang="scss" scoped>
.chart {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>