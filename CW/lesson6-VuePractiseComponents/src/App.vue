<template>
<CreatePost></CreatePost>
</template>

<script>
import CreatePost from './components/CreatePost.vue'
// import CreateComments from './components/CreateComments.vue'

export default {
  name: 'App',
  components: {
    CreatePost
  },
  data () {
    return {
      posts: [],
    }
  },
  methods: {
    
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
