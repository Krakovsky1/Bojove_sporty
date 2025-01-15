<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <router-link to="/" class="footer-link">Domov</router-link>
        <router-link to="/sports" class="footer-link">Bojové športy</router-link>
        <router-link to="/blog" class="footer-link">Blog</router-link>
        <router-link to="/organization" class="footer-link">Organizácie</router-link>
        <router-link to="/bmi" class="footer-link">BMI</router-link>

      </div>
      <p class="footer-text">© 2025 Bojové Športy. Všetky práva vyhradené.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #282828;
  color: #bdc3c7;
  padding: 20px 0;
  text-align: center;
  border-top: 3px solid #f1c40f;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
}

.footer-link {
  color: #f1c40f;
  text-decoration: none;
  font-weight: bold;
  font-size: 1em;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #f39c12;
}

.footer-text {
  font-size: 0.9em;
  color: #bdc3c7;
}
</style>
