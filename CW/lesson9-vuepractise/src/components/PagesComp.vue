<template>
  <h1>Pages</h1>
  <ItemsComp></ItemsComp>
  <div v-for="(list,index) in lists" :key="index">
  {{index}}={{ list }}
  </div>
</template>

<script>    
import ItemsComp from "./ItemsComp.vue"
export default {
    name: 'PagesComp',
    data(){
      return{
        lists: ["apple","orange","cherry","watermelon"]
      }
    },
    components: {
      ItemsComp
    },
    methods:{
      openList(){

      }
    }
  }
  </script>
  
  <style>
  
  </style>