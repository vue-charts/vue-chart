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
  <button @click="b">乐，接着乐</button>
</template>

<script>
import VBarChart from "../packages/components/VBarChart/VBarChart.vue";
export default {
  components: { VBarChart },
  name: "App",
  data() {
    return {
      legend: {
        orient: "vertical",
        right: 10,
        top: "center",
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
    };
  },
  methods: {
    a() {
      this.options.dataset.source[2] = ["Milk Tea", 83.1, 73.4, 55.1];
    },
    b() {
      this.data[0]++;
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
