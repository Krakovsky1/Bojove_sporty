<template>
  <div class="whole">
    <!-- Hlavný kontajner pre blogový príspevok -->
    <div class="blog-post-page" v-if="postTitle">
      <div class="post-container">
        <!-- Hlavička príspevku -->
        <header class="post-header">
          <!-- Dynamický názov príspevku -->
          <h1 class="post-title">{{ postTitle }}</h1>
          <!-- Dátum zverejnenia -->
          <p class="post-date">Zverejnené: {{ postDate }}</p>
        </header>
        <!-- Obsah príspevku -->
        <div class="post-content" v-html="postContent"></div>
        <!-- Päta príspevku -->
        <footer class="post-footer">
          <p class="post-author">
            Autor: <span>{{ postAuthor }}</span>
          </p>
        </footer>
      </div>
    </div>
    <!-- Zobrazenie správy pri načítavaní -->
    <div v-else>
      <p class="loading-message">Načítavam obsah...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPostPage", // Názov komponentu
  props: {
    id: {
      type: String, // ID príspevku ktorý prichádza ako reťazec napr. ID="1"
      required: true, // hovorí, že ID je povinné vyplniť
    },
  },
  data() {
    return {
      postTitle: "", // Reaktívne premenné ktoré načítavajú z loadData
      postContent: "",
      postDate: "",
      postAuthor: "John Doe",
    };
  },
  created() {
    // dáva do aktivity reaktívne premenné ihneď po vytvorení komponentu aby boli pripravené reagovať na zmeny
    this.loadPostData();
  },
  methods: {
    loadPostData() {
      // Na základe ID načíta údaje o príspevku
      if (this.id === "1") {
        this.postTitle = "Začíname s bojovými športami"; // Nastavenie názvu príspevku
        this.postDate = "2. december 2024"; // Nastavenie dátumu
        this.postContent = `
          <p><b>Prečo si vybrať bojové športy?</b></p>
          <ul>
            <li><b>Fyzická kondícia:</b> Tréning zlepší vašu silu, vytrvalosť a ohybnosť.</li>
            <li><b>Sebavedomie:</b> Naučíte sa sebaobranu a zlepšíte svoje zručnosti.</li>
            <li><b>Disciplinovanosť:</b> Pravidelné tréningy a rešpekt k pravidlám vás naučia sebaovládaniu.</li>
            <li><b>Mentálna sila:</b> Zvládanie náročných situácií počas tréningu posilní vašu odolnosť.</li>
          </ul>
        `;
      } else if (this.id === "2") {
        this.postTitle = "Organizácie bojových športov";
        this.postDate = "15. november 2024";
        this.postContent = `
          <h1>Začiatky s bojovými športmi</h1>
          <p><strong>Bojové športy sú nielen fascinujúce na pohľad, ale aj skvelým spôsobom, ako zlepšiť fyzickú kondíciu,
          mentálnu silu a celkovú disciplínu. Ak zvažujete začať, tento článok vás prevedie prvými krokmi.</strong></p>
          <h2>Prečo si vybrať bojové športy?</h2>
          <ul>
            <li><strong>Fyzická kondícia:</strong> Tréning zlepší vašu silu, vytrvalosť a ohybnosť.</li>
            <li><strong>Sebavedomie:</strong> Naučíte sa sebaobranu a zlepšíte svoje zručnosti.</li>
            <li><strong>Disciplinovanosť:</strong> Pravidelné tréningy a rešpekt k pravidlám vás naučia sebaovládaniu.</li>
            <li><strong>Mentálna sila:</strong> Zvládanie náročných situácií počas tréningu posilní vašu odolnosť.</li>
          </ul>
        `;
      }
    },
  },
};
</script>

<style scoped>
.whole {
  background-color: #282828; /* Nastavenie pozadia */
}

.blog-post-page {
  display: flex;
  justify-content: center;
  padding: 20px; /* Priestor okolo obsahu */
}

.post-container {
  max-width: 800px; /* Maximálna šírka kontajnera */
  width: 100%; /* Automatické prispôsobenie šírke */
  background-color: #ffffff; /* Farba pozadia príspevku */
  padding: 20px;
  border-radius: 8px; /* Zaoblenie rohov */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Jemný tieň */
}

.post-header {
  text-align: center; /* Zarovnanie textu na stred */
  margin-bottom: 20px;
}

.post-title {
  font-size: 2.5rem; /* Veľký text pre názov */
  color: #333333;
}

.post-date {
  color: #777777; /* Tmavšia sivá farba pre dátum */
  font-size: 1.1rem;
}

.post-content {
  font-size: 1.1rem; /* Štandardná veľkosť písma pre obsah */
  line-height: 1.6; /* Výška riadkov pre lepšiu čitateľnosť */
  color: #555555;
}

.post-footer {
  margin-top: 20px; /* Priestor nad pätou */
  text-align: center;
}

.post-author {
  font-size: 1.2rem; /* Zvýraznenie mena autora */
  color: #333333;
}
</style>
