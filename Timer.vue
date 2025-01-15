<template>
  <div class="timer">
    <div class="timer-display">
      <h3>{{ timeLeftFormatted }}</h3>
    </div>
    <div class="timer-controls">
      <button @click="startTimer" :disabled="isRunning">Štart</button>
      <button @click="stopTimer" :disabled="!isRunning">Zastaviť</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  props: {
    duration: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      timeLeft: this.duration, // Počiatočný čas (v sekundách)
      timerInterval: null,
      isRunning: false, //aby sme vedeli, či časovač ide alebo stojí
    };
  },
  computed: { //prepočet času na čitateľný typ
    timeLeftFormatted() {
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`; //padStart doplní nulu keď je číslo jednociferné
    },
  },
  methods: {
    startTimer() {
      if (this.isRunning) return; //keď časovač beží, nič sa nestane
      this.isRunning = true; //nadstavíme čas na bežiaci
      this.timerInterval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;  //znížime zostávajúci čas o sekundu
        } else {
          this.stopTimer(); //keď bude čas na 0 zastavíme
        }
      }, 1000); // Odpočítava sekundy každú sekundu
    },
    stopTimer() {
      clearInterval(this.timerInterval); //zastavíme
      this.isRunning = false; //nadstavíme na "nebežiaci"
    },
  },
  watch: {
    duration(newValue) {  //sledujeme prop duration,
      this.timeLeft = newValue; //ak sa zmeni cas v duration nadstaví sa nová hodnota do času
      this.stopTimer(); //a zastaví sa časovač
    },
  },
};
</script>

<style scoped>
.timer {
  text-align: center;
}

.timer-display {
  font-size: 3em;
  color: #f1c40f;
}

.timer-controls button {
  padding: 10px 20px;
  font-size: 1.5em;
  margin: 10px;
  background-color: #f1c40f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.timer-controls button:disabled {
  background-color: #777;
  cursor: not-allowed;
}
</style>
