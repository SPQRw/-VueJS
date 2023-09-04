<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <CreatePost>
    <button>Click</button>
  </CreatePost>
</template>

<script>
import CreatePost from './components/CreatePost.vue'
// import MyComp from './components/MyComp.vue'

export default {
  name: 'App',
  components: {
    CreatePost
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
