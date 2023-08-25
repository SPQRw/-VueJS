<template>
  <header><h1><slot name="header"></slot></h1></header>
  <main><p><slot></slot></p></main>
  <footer><slot name="footer"></slot></footer>
</template>
<script>
    export default {
        name: 'MyComp',
        props:{

        }
    }
</script>
<style></style>