<template>
  <div style="height: 20rem; width: 20rem">
    <v-chart width="20rem" height="20rem" :options="options"></v-chart>
  </div>
  <button @click="a">乐，接着乐</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      options: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
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
