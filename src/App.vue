
<template>
  <div class="radarChartWrap">
    <RadarChart></RadarChart>
  </div>
</template>


<script>
import RadarChart from "./components/RadarChart.vue";
export default {
  name: "app",
  components: {
    RadarChart,
  },
  data() {
    return {};
  },
};
</script>
<style>
.radarChartWrap {
  width: 80vw;
  height: 500px;
  margin: 5px auto;
  border: 1px solid #000;
}
</style>
