<template>
  <div class="hello">
    <!-- <router-link to="/second">Second Page</router-link> -->
    <h1>First Page</h1>
    <ul>
      <li v-for="item in title" :key="item">
        {{ item.id }}
        {{ item.name }}
        {{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  props: {
    title: Array,
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
