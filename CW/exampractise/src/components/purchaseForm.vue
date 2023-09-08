
<template>
    <div>
      <h2>Внесение покупок</h2>
      <form @submit="addPurchase">
        <input type="number" v-model="amount" placeholder="Сумма" required>
        <input type="date" v-model="date" required>
        <select v-model="category" required>
          <option value="еда">Еда</option>
          <option value="одежда">Одежда</option>
          <option value="развлечения">Развлечения</option>
        </select>
        <input type="text" v-model="comment" placeholder="Комментарий">
        <button type="submit">Добавить покупку</button>
      </form>
    </div>
  </template>
  
  <script>
//   import axios from 'axios'
  export default {
    data() {
      return {
        amount: '',
        date: '',
        category: '',
        comment: ''
      }
    },
    methods: {
      addPurchase() {
        const purchase = {
          amount: this.amount,
          date: this.date,
          category: this.category,
          comment: this.comment
        }
  
        console.log(purchase);
        const serializedObj = JSON.stringify(purchase);
        localStorage.setItem('obj', serializedObj);
     

        this.amount = '';
        this.date = '';
        this.category = '';
        this.comment = '';
      }
    }
  }
  </script>