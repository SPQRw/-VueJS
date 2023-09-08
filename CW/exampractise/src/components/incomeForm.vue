<template>
  <div class="buyItem">
    <h2>Внесение доходов</h2>
    <form @submit="addIncome">
      <input type="number" v-model="amount" placeholder="Сумма" required />
      <input type="date" v-model="date" required />
      <input type="text" v-model="source" placeholder="Источник" required />
      <button type="submit">Добавить доход</button>
    </form>
  </div>
</template>

<script>
//   import axios from 'axios'
export default {
  data() {
    return {
      amount: "",
      date: "",
      source: "",
    };
  },
  methods: {
    addIncome() {
      const income = {
        amount: this.amount,
        date: this.date,
        source: this.source,
      };

      console.log(income);
      // axios.post('/api/incomes', income);

      this.amount = "";
      this.date = "";
      this.source = "";
    },
  },
};
</script>
