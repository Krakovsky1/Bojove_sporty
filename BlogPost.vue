<template>
  <div class="blog-post">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    title: String,
    content: String,
  },
};
</script>

<style scoped>
.blog-post {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.blog-post:hover {
  transform: translateY(-10px);
}

.blog-post h3 {
  font-size: 1.8em;
  color: #3498db;
  margin-bottom: 10px;
}

.blog-post p {
  font-size: 1.1em;
  color: #7f8c8d;
}
</style>
