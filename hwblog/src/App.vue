<template>
  <div>
    <post-app
      :content="content"
      :comments="comments"
      @add-comment="addComment"
    ></post-app>
    <comments-app :comments="comments"></comments-app>
  </div>
</template>

<script>
import PostApp from "./components/PostApp.vue";
import CommentsApp from "./components/CommentsApp.vue";

export default {
  components: {
    PostApp,
    CommentsApp,
  },
  data() {
    return {
      post: {
        title: "Заголовок записи",
        content: "",
      },
      comments: [],
    };
  },
  methods: {
    addComment(content) {
      console.log(this.content);
      // Добавить новый комментарий в массив комментариев
      this.comments.push("comment" + " " + content);
      console.log(this.comments);

      // Обновить количество комментариев в записи
      this.post.commentsCount = this.comments.length;
    },
  },
};
</script>
