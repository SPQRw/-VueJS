<template>
  <!-- <router-view :title="items"></router-view> -->
  <ul>
    <li> <router-link to="/second">To trash</router-link></li>
  </ul>
  <!-- <div class="firstCase">
    <img src="" alt="">
    <h3>Iphone 13</h3>
    <span>500,000 KZT</span>
    <button @click="Create('iPhone13',500000)">Купить</button>
  </div> -->
  <div>
    <ul>
      <li v-for="item in title" :key="item">
        {{ item.id }} <br>
        {{ item.name }} <br>
        {{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: Array
  },
  data(){
    return{
      items:[]
      }
    },
  methods:{
     Create(Name, itemPrice){
      this.items.push(
        {
          id: this.items.length ,
          name: Name,
          price: itemPrice,
        }
        ) 
        console.log(this.items)
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
