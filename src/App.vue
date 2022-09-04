<template>
  <div style="height: 20rem; width: 20rem">
    <v-chart width="20rem" height="20rem" :options="options"></v-chart>
  </div>
  <div>
    <v-bar-chart
      width="500px"
      height="500px"
      title="newTitle"
      :options="options"
    >
    </v-bar-chart>
  </div>
  <button @click="a">乐，接着乐</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newTitle: "asdas",
      options: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: { type: "category" },
        yAxis: {},
        dataset: {
          // 提供一份数据。
          source: [
            ["product", "2015", "2016", "2017"],
            ["Matcha Latte", 43.3, 85.8, 93.7],
            ["Milk Tea", 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 86.4, 65.2, 82.5],
            ["Walnut Brownie", 72.4, 53.9, 39.1],
          ],
        },
        series: [
          {
            name: "销量1",
            type: "bar",
          },
          {
            name: "销量2",
            type: "bar",
          },
          {
            name: "销量3",
            type: "bar",
          },
        ],
      },
    };
  },
  methods: {
    a() {
      this.options.series[0].data[0]++;
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
