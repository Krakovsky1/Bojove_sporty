<template>
  <header class="navbar">
    <ul>
      <li><router-link to="/">Domov</router-link></li>
      <li><router-link to="/sports">Bojové športy</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <li><router-link to="/timer">Časovač</router-link></li>
      <li><router-link to="/organization">Organizácie</router-link></li>
      <li><router-link to="/bmi">BMI</router-link></li>

    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.navbar {
  background-color: #282828;
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 10;
}

.navbar ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.navbar ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1c40f;
  height: 50px;
  width: 150px;
  border-radius: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.navbar ul li:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
}

.navbar ul li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  width: 100%;
  height: 100%;
  line-height: 50px;
  text-align: center;
  transition: color 0.2s ease;
}

.navbar ul li a:hover {
  color: #282828;
}

.navbar ul li .router-link-active {
  background-color: #d35400;
  color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  border-radius: 28px;
}
</style>
