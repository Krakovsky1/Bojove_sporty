<template>
  <div class="timer-page">
    <div class="timer-container">
      <h2 class="timer-title">Časovač kôl</h2>

      <!-- Round Timer -->
      <div class="timer-box">
        <h3>Round Timer</h3>

        <!-- Výber dĺžky kola -->
        <label for="round-duration">Dĺžka kola (minúty):</label>
        <select v-model="roundDuration" id="round-duration"> <!-- reaktívna premenná -->
          <!-- Dynamické priraďovanie hodnôt cez v-model -->
          <option value="3">3 minúty</option>
          <option value="5">5 minút</option>
        </select>

        <!-- Komponent Timer, ktorému odovzdávame props -->
        <Timer
          type="round"
          :duration="roundDuration * 60"
          :break="1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Timer from "../components/Timer.vue"; // Import Timer komponentu

export default {
  name: "TimerPage",
  components: {
    Timer, // Registrácia Timer komponentu
  },
  data() {
    return {
      roundDuration: 3, // Predvolená dĺžka kola v minútach
    };
  },
};
</script>

<style scoped>
.timer-page {
  background: linear-gradient(to right, #282828, #3b3b3b);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
}

.timer-container {
  background-color: #3b3b3b;
  padding: 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.timer-title {
  font-size: 2.5em;
  color: #f1c40f;
  margin-bottom: 30px;
  text-transform: uppercase;
  border-bottom: 3px solid #f1c40f;
  padding-bottom: 10px;
}

.timer-box {
  background-color: #282828;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.timer-box h3 {
  font-size: 2em;
  color: #f1c40f;
  margin-bottom: 10px;
}

.timer-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
}

label {
  font-size: 1.2em;
  color: #fff;
  margin-right: 10px;
}

select {
  padding: 5px;
  font-size: 1.2em;
  border-radius: 6px;
  border: 1px solid #fff;
  background-color: #333;
  color: #fff;
  margin-bottom: 20px;
}
</style>
