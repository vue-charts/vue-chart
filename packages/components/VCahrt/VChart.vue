<template>
  <div class="chart" ref="target"></div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useInit from "../../hooks/useInit";
import useProps from "../../hooks/useProps";

export default {
  name: "v-chart",
};
</script>
<script setup>
// eslint-disable-next-line
const props = defineProps(useProps());
const target = ref(null);
// eslint-disable-next-line
let chart = useInit(target, props);
</script>

<style lang="scss" scoped>
.chart {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>