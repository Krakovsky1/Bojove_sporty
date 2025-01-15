import { createApp } from "vue"; // Import funkcie na vytvorenie Vue aplikácie
import App from "./App.vue"; // Hlavný komponent aplikácie (root komponent)
import { createPinia } from "pinia";
import router from "./router"; // Import routera pre správu trás

// Vytvorenie hlavnej aplikácie
const app = createApp(App); // Hlavný komponent zostáva použitý ako root komponent

// Použitie Pinia
app.use(createPinia());

// Použitie Vue Router na navigáciu medzi trasami
app.use(router);

// Montovanie aplikácie do elementu s ID "app"
app.mount("#app");
