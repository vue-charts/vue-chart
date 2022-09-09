<template>
  <div>
    <v-category-chart
      width="20rem"
      height="20rem"
      :legend="legend"
      :xAxis="xAxis"
      :yAxis="yAxis"
      :data="data"
      smooth
    ></v-category-chart>
  </div>
  <div>
    <v-bar-chart
      width="20rem"
      height="20rem"
      :legend="legend"
      :xAxis="xAxis"
      :yAxis="yAxis"
      :data="data"
      stack="x"
    ></v-bar-chart>
  </div>
  <div>
    <v-pie-chart
      width="20rem"
      height="20rem"
      :legend="legend"
      :data="pieData"
      roseType
    ></v-pie-chart>
  </div>
  <div>
    <v-scatter-chart
      width="20rem"
      height="20rem"
      :legend="legend"
      :xAxis="xAxis"
      :yAxis="yAxis"
      :data="data"
    ></v-scatter-chart>
  </div>
  <button @click="b">乐，接着乐</button>
</template>

<script>
import VBarChart from "../packages/components/VBarChart/VBarChart.vue";
import VScatterChart from "../packages/components/VScatterChart/VScatterChart.vue";
export default {
  components: { VBarChart, VScatterChart },
  name: "App",
  data() {
    return {
      legend: {
        orient: "vertical",
        right: 10,
        top: "bottom",
      },
      xAxis: {
        type: "category",
        data: ["A", "B", "C"],
      },
      yAxis: {
        type: "value",
      },
      data: [
        [120, 200, 150],
        [200, 150, 120],
      ],
      pieData: [
        { value: 120, name: "1" },
        { value: 150, name: "2" },
        { value: 180, name: "3" },
      ],
    };
  },
  methods: {
    a() {
      this.options.dataset.source[2] = ["Milk Tea", 83.1, 73.4, 55.1];
    },
    b() {
      this.pieData.push({ value: 240, name: "4" });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
