<template>
  <div class="container">
    <!-- items -->
    <div v-if="!id" class="row">
      <div v-for="item in items" :key="item.id" class="card p-3 mb-4 col">
        <div class="card-body">
          <h1 class="card-title">{{ item.title }}</h1>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <!-- items/id -->
    <div v-if="id" class="row">
      <div class="card p-3 mb-4 col">
        <img :src="items[id].image" alt="">
        <div class="card-body">
          <h1 class="card-title">{{ items[id].title }}</h1>
          <p>{{ items[id].description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemsComp',
  data() {
    return{
      id: this.$route.params.id,
      items: [
        {
          id: 0,
          title: "TV",
          description: "",
          image: "https://www.intex.in/cdn/shop/products/1_9b8014ad-124e-4742-a628-9a4c4affe617.jpg?v=1648711109",
          price: 5
        },
        {
          id: 1,
          title: "Watch",
          description: "",
          image: "https://media.istockphoto.com/id/916408346/photo/watch.jpg?s=612x612&w=0&k=20&c=cNX0NJxlJ6qMmRmffo5CL64OPgaTI-LilGg3VjRLLh0=",
          price: 5
        }
      ]
    }
  },
  props:{

  },
  watch: {
    $route(to,from){
      if(to.params.id != from.params.id) {
        this.id = to.params.id
      }

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
