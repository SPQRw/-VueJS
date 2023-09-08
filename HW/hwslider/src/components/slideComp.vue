<template>
  <div>
    <img src="src" alt="" />
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    src: String,
  },
};
</script>
