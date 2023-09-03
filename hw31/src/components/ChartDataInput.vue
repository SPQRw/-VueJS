<template>
  <div>
    <input v-model="chartLabel" placeholder="Название диаграммы" />
    <input v-model="chartValue" placeholder="Значение (%)" />
    <button @click="addChartData">Добавить данные</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartLabel: "",
      chartValue: "",
    };
  },
  methods: {
    addChartData() {
      // Отправьте данные в родительский компонент или хранилище для дальнейшей обработки
      this.$emit("add-data", {
        label: this.chartLabel,
        value: parseFloat(this.chartValue),
      });
      // Очистите поля ввода после добавления данных
      this.chartLabel = "";
      this.chartValue = "";
    },
  },
};
</script>
