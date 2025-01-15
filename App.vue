<template>
  <div id="app">
    <!-- Navigačný panel -->
    <Header />

    <!-- aktuálna stránka -->
    <router-view />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { createRouter, createWebHistory } from "vue-router"; // Importovanie Vue Routera pre správu trás
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Sports from "./views/Sports.vue";
import Blog from "./views/Blog.vue";
import Timer from "./components/Timer.vue";
import BMICalculator from "./components/BMICalculator.vue";

// Definícia trás
const routes = [
  { path: "/", component: Sports }, // Trasa pre hlavnú stránku, komponent Sports
  { path: "/sports", component: Sports }, // Trasa pre stránku Sports
  { path: "/blog", component: Blog }, // Trasa pre stránku Blog
  { path: "/timer", component: Timer }, // Trasa pre komponent Timer
  { path: "/bmi", component: BMICalculator }, // Trasa pre komponent BMICalculator
];

// Vytvorenie routera
const router = createRouter({
  history: createWebHistory(), // Použitie "createWebHistory" pre históriu trás
  routes, // Priradenie trás k routeru
});

export default {
  name: "App",
  components: {
    Footer, // Registrácia komponentu Footer
    Header, // Registrácia komponentu Header
  },
  beforeCreate() {
    // Pridanie routera do inštancie Vue aplikácie
    this.$router = router;
  },
};
</script>


<style>
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
