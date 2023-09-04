<template>
  <div>
    <h3>Комментарии</h3>
    <ul>
      <li v-for="(comment, index) in comments" :key="index" :content="content">
        {{ comment }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
