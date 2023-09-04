<template>
  <div>
    <chart-data-input @add-data="addData"></chart-data-input>
    <chart-display :chart-data="chartData"></chart-display>
  </div>
</template>

<script>
import ChartDataInput from "./ChartDataInput.vue";
import ChartDisplay from "./ChartDisplay.vue";

export default {
  data() {
    return {
      chartData: [],
    };
  },
  methods: {
    addData(data) {
      this.chartData.push(data);
    },
  },
  components: {
    ChartDataInput,
    ChartDisplay,
  },
};
</script>
