<template>
  <v-chart
    class="chart"
    id="echarts"
    :option="option"
    :auto-resize="true"
    ref="chart"
  />
</template>

<script>
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import VChart, { THEME_KEY } from "vue-echarts";
import axios from "axios";
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

export default {
  name: "HelloWorld",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [],
            type: "line",
          },
        ],
      },
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.$refs.chart.resize();
    });
    initChartsData();
    //載入數據
    function initChartsData() {
      const myChart = echarts.init(document.getElementById("echarts"));
      const API = "/charts/data";
      axios.get(API).then((res) => {
        myChart.setOption({
          series: [
            {
              data: res.data,
            },
          ],
        });
      });
    }
  },
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>

<style>
body {
  margin: 0;
}
</style>