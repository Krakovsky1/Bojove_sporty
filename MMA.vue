<template>
  <div class="mma-page">
    <header class="header">
      <h1>Všetko o MMA</h1>
      <p class="intro-text">
        Objavte dynamický svet zmiešaných bojových umení, najlepších bojovníkov a základné pravidlá, ktoré formujú tento moderný šport.
      </p>
    </header>

    <section class="mma-info">
      <div class="section-title">
        <h2>Čo je to MMA?</h2>
      </div>
      <p class="section-text">
        MMA, alebo zmiešané bojové umenia, je komplexný bojový šport, ktorý kombinuje techniky z rôznych bojových štýlov, ako sú box, brazílske jiu-jitsu, wrestling a kickbox. Tento šport vznikol s cieľom nájsť najefektívnejší bojový štýl, pričom moderné MMA sa formovalo v 90. rokoch prostredníctvom organizácií ako UFC.<br><br>

        MMA sa odohráva v oktagone – špeciálne navrhnutom ringu s ôsmimi stranami, ktorý poskytuje bojovníkom bezpečný priestor. Zápasy sú rozdelené do troch alebo piatich kôl, pričom každé kolo trvá 5 minút. Bojovníci môžu vyhrať knokautom, submisiou alebo rozhodnutím rozhodcov.<br><br>

        Zmiešané bojové umenia si vyžadujú všestrannosť, silu, vytrvalosť a taktický prístup, čo z nich robí jeden z najkomplexnejších športov na svete.
      </p>
    </section>

    <section class="fighter-profile">
      <div class="section-title">
        <h2>Najznámejší bojovník: Conor McGregor</h2>
      </div>
      <div class="fighter-info">
        <div class="fighter-image">
          <img src="@/assets/conor_mcgregor.jpg" alt="Conor McGregor" />
        </div>
        <div class="fighter-text">
          <p>
            Conor McGregor je jedným z najznámejších bojovníkov v histórii MMA. So svojou charizmou a tvrdými údermi sa stal ikonou a prvým bojovníkom UFC, ktorý súčasne držal tituly v dvoch váhových kategóriách.
          </p>
        </div>
      </div>
    </section>

    <section class="mma-rules">
      <div class="section-title">
        <h2>Pravidlá MMA</h2>
      </div>
      <ul class="rules-list">
        <li>Zápasy sa skladajú z 3-5 kôl, každé kolo trvá 5 minút.</li>
        <li>Bojovníci môžu používať údery, kopy, chvaty a submisie.</li>
        <li>Zakázané sú údery do zátylku, pod pás alebo do kĺbov.</li>
        <li>Výhra môže byť dosiahnutá knokautom, submisiou alebo rozhodnutím rozhodcov.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "MMA",
};
</script>

<style scoped>
.mma-page {
  width: 80%; /* Nastavenie šírky stránky */
  max-width: 1200px; /* Maximálna šírka */
  margin: 0 auto; /* Stredenie stránky */
  padding: 60px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #282828, #3b3b3b);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.header {
  text-align: center;
  margin-bottom: 60px;
  animation: fadeIn 1s ease-out;
}

h1 {
  font-size: 4em;
  color: #f1c40f;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.intro-text {
  font-size: 1.3em;
  color: #bdc3c7;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.section-title h2 {
  font-size: 2.8em;
  color: #f1c40f;
  text-align: left;
  margin-bottom: 20px;
  border-bottom: 3px solid #f1c40f;
  padding-bottom: 10px;
  text-transform: uppercase;
}

.section-text {
  font-size: 1.1em;
  line-height: 1.8;
  color: #bdc3c7;
  text-align: justify;
  margin-bottom: 40px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.fighter-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  background-color: #333;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  animation: fadeIn 1.5s ease-out;
}

.fighter-image {
  width: 250px;
  height: 250px;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 30px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.fighter-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fighter-text {
  max-width: 650px;
  color: #bdc3c7;
}

.rules-list {
  list-style-type: disc;
  margin-left: 40px;
  font-size: 1.2em;
  color: #bdc3c7;
}

.rules-list li {
  margin-bottom: 15px;
  line-height: 1.8;
}

.mma-rules {
  background-color: #333;
  padding: 30px;
  border-radius: 15px;
  margin-top: 60px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
