<template>
  <div class="container">
    <div class="row">
      <button @click="toggleAddPost" class="btn btn-primary">
        <i class="fas fa-plus"></i> Добавить запись
      </button>
    </div>
    <PostCreate v-if="addPostView" @createPost="createPost"></PostCreate>
    <PostText :posts="posts"></PostText>
  </div>
</template>

<script>
import PostCreate from './components/PostCreate.vue'
import PostText from './components/PostText.vue'

export default {
  name: 'App',
  components: {
    PostCreate,
    PostText
  },
  data() {
    return {
      posts: [],
      addPostView: false // видимость компонента PostCreate
    }
  },
  methods: {
    createPost(data) {
      this.posts.push({
          id: this.posts.length,
          text: data,
          likes: 0,
          comments: []
        })
      console.log(this.posts)
    },
    // метод-переключатель видимости компонента PostCreate
    toggleAddPost() {
      if (this.addPostView) {
        this.addPostView = false
      } else {
        this.addPostView = true
      }
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
