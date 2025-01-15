<template>
  <div class="sports">
    <h2 class="sports-title">Odvetvia bojových športov</h2>
    <div class="sports-list">
      <!-- Iterácia cez zoznam športov -->
      <div v-for="sport in sports" :key="sport.id" class="sport-item">
        <!-- Názov športu s funkciou na prepínanie detailov -->
        <h3 @click="toggleDetails(sport.id)">{{ sport.name }}</h3>
        <p>{{ sport.description }}</p>

        <!-- Zobrazenie detailov iba pre aktuálne rozkliknutý šport -->
        <div v-if="activeSportId === sport.id" class="sport-details">
          <p><strong>História:</strong> {{ sport.history }}</p>
          <p><strong>Technika:</strong> {{ sport.techniques }}</p>
        </div>
      </div>
    </div>

    <!-- Navigačné linky na podstránky jednotlivých športov -->
    <div class="links-wrapper">
      <router-link to="/box" class="link-button">Viac o Boxe</router-link>
      <router-link to="/mma" class="link-button">Viac o MMA</router-link>
      <router-link to="/kickbox" class="link-button">Viac o Kickboxe</router-link>
      <router-link to="/muaythai" class="link-button">Viac o Muay Thai</router-link>
      <router-link to="/kravmaga" class="link-button">Viac o Krav Mage</router-link>
    </div>

    <!-- Sekcia s profilmi bojovníkov -->
    <div class="fighter-profile" v-for="fighter in fighters" :key="fighter.id">
      <div class="fighter-image">
        <!-- Obrázok bojovníka -->
        <img :src="fighter.image" :alt="fighter.name" />
      </div>
      <div class="fighter-text">
        <h2>{{ fighter.name }}</h2>
        <!-- Popis bojovníka (iterácia cez zoznam popisov) -->
        <p v-for="(desc, index) in fighter.description" :key="index">{{ desc }}</p>
      </div>
    </div>

    <!-- Modálne okno na zobrazenie zhrnutia -->
    <div class="modal-trigger">
      <button @click="showSummary = true" class="info-button">Zhrnutie</button>
      <InfoModal
        title="Základy bojových športov"
        icon="/images/info-icon.png"
        :isVisible="showSummary"
        buttonText="Zatvoriť"
        @close="handleCloseSummary"
      >
        <!-- Obsah modálneho okna -->
        <p>Bojové športy sú vynikajúcim spôsobom, ako zlepšiť fyzickú kondíciu, naučiť sa disciplíne a získať sebavedomie.</p>
        <p>Každý šport má svoje špecifiká:</p>
        <ul>
          <li><strong>Box:</strong> Tradičný šport so zameraním na úderové techniky.</li>
          <li><strong>MMA:</strong> Kombinácia úderov, kopov a grapplingu pre komplexný tréning.</li>
          <li><strong>Kickbox:</strong> Zameranie na údery a kopy s dôrazom na rýchlosť a techniku.</li>
          <li><strong>Muay Thai:</strong> Tradičný thajský šport so silnými kopmi, lakťami a kolenami.</li>
          <li><strong>Krav Maga:</strong> Efektívny systém sebaobrany, ktorý sa sústreďuje na rýchlosť a účinnosť.</li>
        </ul>
        <p>Každý bojový šport poskytuje nielen fyzické, ale aj mentálne benefity, vrátane zlepšenia disciplíny, vytrvalosti a zvládania stresu.</p>
      </InfoModal>
    </div>
  </div>
</template>

<script>
import InfoModal from "@/components/InfoModal.vue";
import { useSportsStore } from "../stores/sports"; // Import Pinia úložiska

export default {
  name: "Sports",
  components: {
    InfoModal, // Registrácia komponentu InfoModal
  },
  data() {
    return {
      activeSportId: null, // ID aktuálne zobrazeného športu
      showSummary: false, // Stav viditeľnosti modálneho okna
    };
  },
  computed: {
    sports() {
      // Načítanie zoznamu športov z Pinia úložiska
      return useSportsStore().sports;
    },
    fighters() {
      // Načítanie zoznamu bojovníkov z Pinia úložiska
      return useSportsStore().fighters;
    },
  },
  methods: {
    toggleDetails(id) {
      // Prepína zobrazenie detailov konkrétneho športu
      this.activeSportId = this.activeSportId === id ? null : id;
    },
    handleCloseSummary() {
      // Zatvorenie modálneho okna
      this.showSummary = false;
    },
  },
};
</script>


<style scoped>
.links-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #282828;
  padding: 20px;
}

.link-button {
  padding: 10px 20px;
  background-color: #f1c40f;
  color: #282828;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2em;
}

.sports {
  padding: 40px 20px;
  background-color: #282828;
  text-align: center;
  color: white;
}

.sports-title {
  font-size: 2.5em;
  color: #f1c40f;
  margin-bottom: 30px;
}

.sports-list {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.sport-item {
  background-color: #3b3b3b;
  padding: 25px;
  width: 250px;
  border-radius: 10px;
  border: 3px solid #f1c40f;
  margin-bottom: 20px;
}

.sport-item h3 {
  font-size: 1.8em;
  color: #f1c40f;
  cursor: pointer;
}

.sport-item p {
  color: #bdc3c7;
}

.fighter-profile {
  display: flex;
  gap: 20px;
  background-color: #3b3b3b;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  align-items: center;
}

.fighter-image {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #f1c40f;
}

.fighter-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fighter-text h2 {
  color: #f1c40f;
  margin-bottom: 10px;
}

.fighter-text p {
  line-height: 1.6;
  color: #bdc3c7;
}

.modal-trigger {
  margin-top: 30px;
  text-align: center;
}

.info-button {
  background-color: #f1c40f;
  color: #282828;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
}
</style>
