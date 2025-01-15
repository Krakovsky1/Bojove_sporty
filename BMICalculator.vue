<template>
  <div class="bmi_bg">
    <div class="bmi-calculator">
      <h2>Výpočet BMI</h2>
      <form @submit.prevent="calculateBMI">
        <div class="form-group">
          <label for="weight">Hmotnosť (kg):</label>
          <input type="number" id="weight" v-model="weight" required />
        </div>
        <div class="form-group">
          <label for="height">Výška (cm):</label>
          <input type="number" id="height" v-model="height" required />
        </div>
        <button type="submit">Vypočítať BMI</button>
      </form>

      <div v-if="bmiResult !== null" class="bmi-result">
        <h3>Vaše BMI: {{ bmiResult }}</h3>
        <p>{{ bmiCategory }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BMICalculator",
  data() {
    return {
      weight: null,
      height: null,
      bmiResult: null,
    };
  },
  computed: {
    bmiCategory() {
      if (this.bmiResult < 18.5) return "Podváha";
      if (this.bmiResult >= 18.5 && this.bmiResult < 24.9) return "Normálna váha";
      if (this.bmiResult >= 25 && this.bmiResult < 29.9) return "Nadváha";
      return "Obezita";
    },
  },
  methods: {
    calculateBMI() {
      const heightInMeters = this.height / 100;
      this.bmiResult = (this.weight / (heightInMeters ** 2)).toFixed(1);
    },
  },
};
</script>

<style scoped>
html, body, #app {
  margin: 0;
  padding: 0;
  min-height: 100%;
  height: 100%;
  width: 100%;
  background-color: #282828;
  box-sizing: border-box;
}

.bmi_bg {
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 0;
}

.bmi-calculator {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  background-color: #3b3b3b;
  padding: 30px;
  border-radius: 10px;
  color: #f1c40f;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.bmi-calculator h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 10px;
  color: #ffffff;
}

input {
  width: 80%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  text-align: center;
}

button {
  width: 100%;
  padding: 15px;
  background-color: #f1c40f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
}

button:hover {
  background-color: #d35400;
}

.bmi-result {
  text-align: center;
  margin-top: 20px;
}

.bmi-result h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}
</style>
