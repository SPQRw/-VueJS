<template>
  <div>
    <canvas ref="chartCanvas" width="400" height="400"></canvas>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    chartData: Array,
  },
  watch: {
    chartData: "renderChart",
  },
  mounted() {
    this.renderChart({}, this.chartOptions);
  },
  computed: {
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
        },
      };
    },
  },
  methods: {
    renderChart(data, options) {
      this.$data._chart.destroy();
      this.$data._chart = this.chartData ? this.chartData : data;
      this.$data._options = options;
      this.renderChart(this.chartData, options);
    },
  },
};
</script>
