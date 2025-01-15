<template>
  <div class="box-page">
    <header class="header">
      <h1>Všetko o Boxe</h1>
      <p class="intro-text">
        Objavte fascinujúci svet boxu, najlepších boxerov a základné pravidlá, ktoré robia tento šport jedinečným.
      </p>
    </header>

    <section class="box-info">
      <div class="section-title">
        <h2>Čo je to box?</h2>
      </div>
      <p class="section-text">
        Box je bojový šport, v ktorom sa dvaja súperi stretnú v ringu a snažia sa zasiahnuť protivníka údermi pomocou pästí, pričom ich chráni boxerské rukavice. Tento šport má hlboké historické korene, keďže jeho počiatky siahajú až do starovekého Grécka, kde bol súčasťou olympijských hier. Moderný box, ako ho poznáme dnes, sa formoval v 19. storočí s pravidlami Marquess of Queensberry.<br><br>

        Box je rozdelený do váhových kategórií, aby bola zabezpečená férovosť súbojov. Zápas prebieha v časovo obmedzených kolách, pričom bojovníci získavajú body za presné údery, techniku a aktivitu, alebo môžu vyhrať knokautom, ak súper nie je schopný pokračovať. Tento šport si vyžaduje kombináciu sily, rýchlosti, vytrvalosti a taktiky.<br><br>

        Box nie je len profesionálny šport, ale aj obľúbená forma rekreačného tréningu, ktorá pomáha zlepšiť kondíciu a mentálnu disciplínu. Vďaka svojej univerzálnosti a tradícii je box považovaný za jeden z najprestížnejších a najrešpektovanejších bojových športov na svete.
      </p>
    </section>

    <section class="fighter-profile">
      <div class="section-title">
        <h2>Najznámejší boxer: "Iron" Mike Tyson</h2>
      </div>
      <div class="fighter-info">
        <div class="fighter-image">
          <img src="@/assets/mike_tyson.jpg" alt="Mike Tyson" />
        </div>
        <div class="fighter-text">
          <p>
            Mike Tyson, bývalý profesionálny boxer, je považovaný za jedného z najdominantnejších v histórii boxu. Svojím agresívnym štýlom a rýchlosťou sa stal legendou.
          </p>
        </div>
      </div>
    </section>

    <section class="box-rules">
      <div class="section-title">
        <h2>Pravidlá boxu</h2>
      </div>
      <ul class="rules-list">
        <li>Box sa skladá z 3-12 kôl, každé kolo trvá 3 minúty.</li>
        <li>Každý zápas má rozhodcu, ktorý hodnotí výkony boxerov.</li>
        <li>Zápas môže skončiť knokautom, technickým knokautom alebo rozhodnutím rozhodcu.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Box",
};
</script>

<style scoped>
.box-page {
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

.box-rules {
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
