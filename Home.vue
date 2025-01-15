<template>
  <div>
    <!-- Úvodný obrázok -->
    <div class="hero-image">
      <div class="hero-text">
        <h1>Bojové športy</h1>
        <p>Objavte silu, techniku a vášeň v bojových športoch</p>
      </div>
    </div>

    <!-- Sekcia História a súčasnosť -->
    <div class="history-section">
      <div class="history-box">
        <h2>História bojových športov</h2>
        <p>
          Bojové športy majú svoje korene v dávnych časoch, keď bojové techniky
          slúžili na prežitie a obranu. Medzi najstaršie bojové štýly patrí
          zápasenie v starovekom Grécku a box v starovekom Egypte. V Ázii sa
          rozvíjali ikonické štýly ako karate, judo, a kung-fu, ktoré kombinovali
          fyzickú zdatnosť, duchovnú harmóniu a bojové umenie.
        </p>
      </div>
      <div class="history-box">
        <h2>Súčasnosť bojových športov</h2>
        <p>
          Dnes bojové športy predstavujú nielen spôsob sebaobrany, ale aj cestu
          k zdraviu, disciplíne a osobnému rozvoju. Moderné disciplíny ako MMA
          (Mixed Martial Arts) získali svetovú popularitu a kombinujú tradičné
          bojové techniky s inovatívnymi prvkami. Či už je to pre športový výkon
          alebo ako hobby, bojové športy oslovujú ľudí všetkých vekových
          kategórií.
        </p>
      </div>
    </div>

    <!-- Sekcia s obrázkom zápasníka -->
    <div class="fighter-profile">
      <div class="fighter-image">
        <img src="@/assets/fighter.jpg" alt="Jiří Procházka" />
      </div>
      <div class="fighter-text">
        <h2>Jiří "BJP" Procházka</h2>
        <p>
          Jiří Procházka je jeden z najväčších šampiónov MMA a bojových športov
          v súčasnosti. Je známý svojím nezastaviteľným štýlom boja a jeho víťazstvá
          v organizácii UFC ho vyniesli medzi najlepších bojovníkov na svete.
          Jeho agresívny a technický prístup k zápasom získal srdcia fanúšikov
          po celom svete. Jiří Procházka je hrdinom českého športu, ktorý
          neustále inšpiruje ďalších bojovníkov a mladých ľudí k tomu, aby sa
          nevzdávali a bojovali za svoje sny.
        </p>
      </div>
    </div>

    <!-- Sekcia Motivácia a výhody bojových športov -->
    <div class="motivation-section">
      <h2 class="motivation-title">Prečo si zvoliť bojové športy?</h2>
      <div class="benefits">
        <div class="benefit-box">
          <h3>Fyzická kondícia</h3>
          <p>
            Bojové športy posilňujú telo, zlepšujú výdrž a podporujú zdravie.
            Tréning zahŕňa kardio, silový tréning a flexibilitu, čo pomáha
            celkovému zdraviu.
          </p>
        </div>
        <div class="benefit-box">
          <h3>Mentálna disciplína</h3>
          <p>
            Naučte sa zvládať stres, zlepšiť sústredenie a budovať sebavedomie.
            Bojové športy vás učia strategickému mysleniu a trpezlivosti.
          </p>
        </div>
        <div class="benefit-box">
          <h3>Sebaobrana</h3>
          <p>
            Rozvíjajte schopnosti, ktoré vám môžu pomôcť v nebezpečných situáciách.
            Sebaobrana je praktická zručnosť, ktorú využijete kedykoľvek.
          </p>
        </div>
      </div>
    </div>

    <!-- Sekcia so štatistikami -->
    <div class="statistics-section">
      <h2 class="statistics-title">Zaujímavé štatistiky o bojových športoch</h2>
      <div class="statistics">
        <div class="statistic-box">
          <h3>Počet ľudí praktizujúcich bojové športy na svete</h3>
          <p class="stat-number">500 miliónov</p>
        </div>
        <div class="statistic-box">
          <h3>Počet organizácií bojových športov na svete</h3>
          <p class="stat-number">120</p>
        </div>
        <div class="statistic-box">
          <h3>Počet krajín, kde sa praktizujú bojové športy</h3>
          <p class="stat-number">190</p>
        </div>
      </div>
    </div>

    <!-- BMI Kalkulačka -->
    <div class="bmi-section">
      <BMICalculator />
    </div>
  </div>
</template>

<script>
import BMICalculator from "@/components/BMICalculator.vue";

export default {
  name: "Home",
  components: {
    BMICalculator,
  },
};
</script>

<style>
body {
  margin: 0;
}


.hero-image {
  position: relative;
  height: 50vh;
  background-image: url('@/assets/1.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
}

.hero-text h1 {
  font-size: 3em;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hero-text p {
  font-size: 1.5em;
  margin-top: 10px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

/* Štýly pre sekciu História a súčasnosť */
.history-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 40px 20px;
  background-color: #282828;
}

.history-box {
  background-color: #3b3b3b;
  padding: 30px;
  margin: 20px;
  width: 45%;
  border: 3px solid #f1c40f;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  line-height: 1.6;
}

.history-box h2 {
  font-size: 2.2em;
  margin-bottom: 15px;
  color: #f1c40f;
}

.history-box p {
  font-size: 1.2em;
  margin-bottom: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.history-box:hover {
  background-color: #444444;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.7);
  transform: scale(1.03);
  transition: all 0.3s ease;
}


/* Štýly pre sekciu s obrázkom zápasníka Jiřího Procházku */
.fighter-profile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #282828;
}

.fighter-image {
  width: 200px;
  height: 200px;
  margin-right: 30px;
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid #f1c40f;
}

.fighter-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fighter-text {
  max-width: 600px;
  color: white;
}

.fighter-text h2 {
  font-size: 2.5em;
  color: #f1c40f;
}

.fighter-text p {
  font-size: 1.2em;
  line-height: 1.6;
}



/* Štýly pre sekciu Motivácia a výhody bojových športov */
.motivation-section {
  padding: 40px 20px;
  background-color: #282828;
  text-align: center;
}

.motivation-title {
  font-size: 2.5em;
  color: #f1c40f;
  margin-bottom: 30px;
}

.benefits {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.benefit-box {
  background-color: #3b3b3b;
  padding: 20px;
  border-radius: 10px;
  border: 3px solid #f1c40f;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  color: white;
  width: 30%;
  text-align: center;
  transition: all 0.3s ease;
}

.benefit-box h3 {
  font-size: 1.5em;
  color: #f1c40f;
  margin-bottom: 10px;
}

.benefit-box p {
  font-size: 1.2em;
  line-height: 1.6;
}

.benefit-box:hover {
  background-color: #444444;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.7);
  transform: scale(1.05);
}



/* Štýly pre sekciu so štatistikami vedľa seba */
.statistics-section {
  padding: 40px 20px;
  background-color: #282828;
  text-align: center;
}

.statistics-title {
  font-size: 2.5em;
  color: #f1c40f;
  margin-bottom: 30px;
}

.statistics {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.statistic-box {
  background-color: #3b3b3b;
  padding: 20px;
  border-radius: 10px;
  border: 3px solid #f1c40f;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  color: white;
  width: 30%;
  text-align: center;
  transition: all 0.3s ease;
}

.statistic-box h3 {
  font-size: 1.5em;
  color: #f1c40f;
  margin-bottom: 10px;
}

.stat-number {
  font-size: 2.5em;
  font-weight: bold;
}

.statistic-box:hover {
  background-color: #444444;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.7);
  transform: scale(1.05);
}


/* BMI Sekcia */
.bmi-section {
  padding: 40px 20px;
  background-color: #282828;
  display: flex;
  justify-content: center;
}
</style>
