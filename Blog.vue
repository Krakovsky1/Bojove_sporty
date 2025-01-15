<template>
  <div class="blog">
    <div class="content-wrapper">
      <h2>Blog</h2>
      <div class="blog-posts">
        <router-link to="/blog/1">
          <BlogPost
            title="Začíname s bojovými športmi"
            content="Bojové športy sú skvelý spôsob, ako zlepšiť svoju fyzickú kondíciu a disciplínu."
          />
        </router-link>
        <router-link to="/blog/2">
          <BlogPost
            title="Organizácie bojových športov"
            content="Trénujte pravidelne, správne sa stravujte a nikdy nepreceňujte svoje možnosti."
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import { RouterLink } from 'vue-router';

export default {
  name: "Blog",
  components: {
    BlogPost,
    RouterLink,
  },
};
</script>

<style scoped>
.blog {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #282828, #3b3b3b);
  color: #fff;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.content-wrapper {
  width: 100%;
  max-width: 1200px;
  padding: 60px 40px;

}

.blog h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #f1c40f;
  text-transform: uppercase;
  text-align: left;
  padding-bottom: 10px;
  display: inline-block;

  border-bottom: none !important;
}



.blog-posts {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #3b3b3b;

}

.blog-posts > div {
  background-color: #3b3b3b;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s, box-shadow 0.2s;
}

.blog-posts > div:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
}
</style>
