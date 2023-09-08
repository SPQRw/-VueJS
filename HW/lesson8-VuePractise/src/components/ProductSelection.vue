<template>
  <div>
    <h1>Select a Product</h1>
    <div class="main-item">
      <img src="" alt="">
      <h2>Iphone13</h2>
      <p>150 000</p>
      <button @click = "addItem">Add</button>
    </div>
    <div class="second-item">
      <img src="" alt="">
      <h2>Iphone14</h2>
      <p>350 000</p>
      <button @click = "addItemSecond">Add</button>
    </div>
    <router-link to="/cart">Перейти в корзину</router-link>
  </div>
</template>

<script>
export default {
  name: "ProductSelection",
  data(){
    return {
      firstItem:{
        id: 0,
        title: "Iphone13",
        price: 150000,
      },
      secondItem:{
        id: 1,
        title: "Iphone14",
        price: 350000,
      }
    }
  },
  methods:{
    addItem (){
      const addValue = {
        id: this.firstItem.id,
        title: this.firstItem.title,
        price: this.firstItem.price,
      }
      console.log(addValue)
    },
    addItemSecond (){
      const addValue = {
        id: this.secondItem.id,
        title: this.secondItem.title,
        price: this.secondItem.price,
      }
      console.log(addValue)
    },
  }
}
</script>