<template>
  <div class="buyItem">
    <h2>Внесение покупок</h2>
    <form @submit="addPurchase">
      <input
        type="number"
        class="input_price"
        v-model="amount"
        placeholder="Сумма"
        required
      />
      <br />
      <input type="date" v-model="date" required /> <br />
      <select v-model="category" id="select" required>
        <option value="еда">Еда</option>
        <option value="одежда">Одежда</option>
        <option value="развлечения">Развлечения</option>
      </select>
      <br />
      <input type="text" v-model="comment" placeholder="Комментарий" /> <br />
      <button type="submit">Добавить покупку</button> <br />
    </form>
  </div>
</template>

<script>
//   import axios from 'axios'
// let a = 0;
export default {
  data() {
    return {
      amount: "",
      amountFood: "",
      amountCLother: "",
      amountParty: "",
      date: "",
      category: "",
      comment: "",
      priceFood: 0,
      priceClother: 0,
      priceParty: 0,
    };
  },
  methods: {
    addPurchase() {
      const select = document
        .querySelector("#select")
        .getElementsByTagName("option");
      for (let i = 0; i < select.length; i++) {
        console.log(select[i]);
        if (select[i].selected == true) {
          if (i == 0) {
            this.priceFood = this.priceFood + this.amount;
          } else if (i == 1) {
            this.priceClother = this.priceClother + this.amount;
          } else if (i == 2) {
            this.priceParty = this.priceParty + this.amount;
          }
        }
        // Или вот на это, если там присутствует html, например:
        // if (select[i].innerHTML === '<p>Терпила</p>') select[i].selected = true;
      }

      const purchase = {
        amountFood: this.priceFood,
        amountCLother: this.priceClother,
        amountParty: this.priceParty,
        date: this.date,
        category: this.category,
        comment: this.comment,
      };

      console.log(purchase);

      const serializedObj = JSON.stringify(purchase);
      localStorage.setItem("obj", serializedObj);

      this.amount = "";
      this.date = "";
      this.category = "";
      this.comment = "";
    },
  },
};
</script>
<style>
.buyItem {
  width: 340px;
  height: 400px;
  border: solid 1px;
  margin-top: 20px;
  margin-left: 50px;
  text-align: center;
  border-radius: 30px;
  border-top: none;
  border-right: none;
}
h2 {
  font-family: sans-serif;
  color: rgb(87, 35, 20);
  font-size: 25px;
}
input {
  width: 230px;
  height: 20px;
  margin-bottom: 40px;
  border-top: none;
  border-right: none;
  font-family: sans-serif;
  margin-top: 10px;
  border-radius: 10px;
}
</style>
