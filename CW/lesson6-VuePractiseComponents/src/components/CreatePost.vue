<template>
  <textarea v-model="textarea"></textarea>
  <button @click="addPost(textarea)">Click</button>
</template>

<script>

export default {
  name: 'CreatePost',
  data () {
    return {
      textarea: ""
    }
  },
  props: {},
  methods:{
    addPost :  (data) => {
      console.log(data)
    }
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
