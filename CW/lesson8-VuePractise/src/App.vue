<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view :title="items"></router-view>
  <ul>
    <li><router-link to="/first">To Items</router-link></li>
    <!-- <li><router-link to="/second">hello Page 2</router-link></li>
    <li><router-link to="/third">hello Page 3</router-link></li> -->
  </ul>

</template>

<script>


export default {
  name: 'App',
  components: {
 
  }, 
  data (){
    return {
      items:[
        {
          id: 0,
          name: "IPhone13",
          price: 500000
        }
      ]
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.firstCase{
  width: 150px;
  height: 200px;
  border: solid 1px;
  margin-left: 20px;
}
</style>
