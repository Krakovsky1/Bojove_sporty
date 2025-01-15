<template>
  <div class="krav-maga-page">
    <header class="header">
      <h1>Všetko o Krav Mage</h1>
      <p class="intro-text">
        Objavte efektívny sebaobranný systém Krav Maga, ktorý kombinuje jednoduché techniky a realistické scenáre na zvládanie nebezpečných situácií.
      </p>
    </header>

    <section class="krav-maga-info">
      <div class="section-title">
        <h2>Čo je to Krav Maga?</h2>
      </div>
      <p class="section-text">
        Krav Maga je bojový systém, ktorý vznikol v 30. rokoch 20. storočia v Izraeli. Je navrhnutý na efektívnu a praktickú sebaobranu v reálnych situáciách. Techniky Krav Maga sú jednoduché, priame a zahŕňajú údery, kopy, bloky a úniky z nebezpečných polôh.<br><br>

        Tento systém bol pôvodne vytvorený pre izraelské obranné sily (IDF) a neskôr sa rozšíril aj medzi civilistov. Základnou filozofiou Krav Maga je predchádzanie konfliktom, rýchla neutralizácia hrozby a ochrana jednotlivca za každých okolností.<br><br>

        Tréning Krav Maga zahŕňa simulácie reálnych situácií, zameranie na psychickú odolnosť a zlepšenie reakčných schopností. Je to ideálny systém pre každého, kto hľadá praktický spôsob, ako zvýšiť svoju bezpečnosť.
      </p>
    </section>

    <section class="fighter-profile">
      <div class="section-title">
        <h2>Najznámejší inštruktor: Imi Lichtenfeld</h2>
      </div>
      <div class="fighter-info">
        <div class="fighter-image">
          <img src="@/assets/imi_lichtenfeld.jpeg" alt="Imi Lichtenfeld" />
        </div>
        <div class="fighter-text">
          <p>
            Imi Lichtenfeld, zakladateľ Krav Maga, bol bývalý zápasník a boxer, ktorý vytvoril tento systém na základe svojich skúseností v boji. Jeho metódy sú základom moderného tréningu a dodnes inšpirujú bojovníkov a inštruktorov po celom svete.
          </p>
        </div>
      </div>
    </section>

    <section class="krav-maga-rules">
      <div class="section-title">
        <h2>Základné princípy Krav Maga</h2>
      </div>
      <ul class="rules-list">
        <li>Vyhnite sa konfliktu, ak je to možné.</li>
        <li>Útočte na zraniteľné miesta, ako sú oči, krk a slabiny.</li>
        <li>Jednoduchosť a efektívnosť majú prednosť pred komplexnými technikami.</li>
        <li>Buďte vždy pripravení reagovať na viacero útočníkov.</li>
        <li>Chráňte sa za každých okolností a zabezpečte bezpečný únik.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "KravMaga",
};
</script>

<style scoped>
.krav-maga-page {
  width: 80%; /* Nastavenie šírky stránky */
  max-width: 1200px; /* Maximálna šírka */
  margin: 0 auto; /* Centrovanie stránky */
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
  border-radius: 50%;
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

.krav-maga-rules {
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
