<template>
  <div>
    <h2>{{ post.title }}</h2>
    <input type="text" v-model="content" />
    <!-- <p>{{ post.content }}</p> -->
    <p>{{ content }}</p>
    <p>Количество комментариев: {{ comments.length }}</p>
    <button @click="addComment">Добавить комментарий</button>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    comments: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addComment() {
      // Отправить событие в родительский компонент
      this.$emit("add-comment");
      console.log(this.content);
      this.$emit(this.content);
    },
  },
};
</script>
