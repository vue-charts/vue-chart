<template>
  <div class="chart" ref="target"></div>
</template>
 
 <script>
import { ref } from "@vue/reactivity";
import useProps from "../../hooks/useProps";
import useInit from "../../hooks/useInit";
import usePieProps from "./hooks/usePieProps";
import useOptions from "./hooks/useOptions";
export default {
  name: "v-pie-chart",
};
</script>
 <script setup>
// eslint-disable-next-line
const props = defineProps(Object.assign(usePieProps(), useProps()));
const target = ref(null);
const options = useOptions(props);
// eslint-disable-next-line
let chart = useInit(target, props, options.value);
</script>
 
 <style lang="scss" scoped>
.chart {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>