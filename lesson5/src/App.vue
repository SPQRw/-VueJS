<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <MyComp>
    <template v-slot:header>Заголовок Новости</template>
    <template v-slot:default>Текст новости</template>
    <template v-slot:footer>Конец новостей</template>
  </MyComp>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyComp from './components/MyComp.vue'

export default {
  name: 'App',
  components: {
    MyComp
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
</style>
