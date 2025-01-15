<template>
  <div class="muay-thai-page">
    <header class="header">
      <h1>Všetko o Muay Thai</h1>
      <p class="intro-text">
        Objavte tradičné thajské bojové umenie, známe ako "Umenie ôsmich končatín", ktoré spája silu, techniku a kultúru.
      </p>
    </header>

    <section class="muay-thai-info">
      <div class="section-title">
        <h2>Čo je to Muay Thai?</h2>
      </div>
      <p class="section-text">
        Muay Thai, tiež známe ako thajský box, je tradičné bojové umenie pochádzajúce z Thajska, ktoré využíva údery päsťami, lakťami, kolenami a kopmi. Tento šport má hlboké korene v thajskej kultúre a histórii a je známy svojou efektivitou v boji.<br><br>

        Zápasy Muay Thai sa odohrávajú v ringu a bojovníci sa pripravujú roky na zdokonaľovanie techník, vytrvalosti a mentálnej sily. Tradičné rituály, ako je Wai Kru Ram Muay, sú súčasťou zápasov a symbolizujú rešpekt k učiteľom a tradícii.<br><br>

        Muay Thai je nielen šport, ale aj životný štýl, ktorý rozvíja fyzickú kondíciu, disciplínu a sebavedomie.
      </p>
    </section>

    <section class="fighter-profile">
      <div class="section-title">
        <h2>Ikona Muay Thai: Saenchai</h2>
      </div>
      <div class="fighter-info">
        <div class="fighter-image">
          <img src="@/assets/saenchai.jpg" alt="Saenchai" />
        </div>
        <div class="fighter-text">
          <p>
            Saenchai (vlastným menom Parinya Charoenphol) je thajský Muay Thai bojovník, považovaný za jedného z najlepších a najikonickejších v histórii tohto športu. Narodil sa 30. júla 1980 v Thajsku. Saenchai je známy svojou technickou brilantnosťou, vynikajúcimi reflexmi a schopnosťou prispôsobiť sa rôznym štýlom boja. Je obľúbený pre svoju schopnosť robiť nevídané údery a kombinácie, ako aj pre svoju flexibilitu a kreativitu v ringu. V priebehu svojej kariéry získal množstvo titulov, vrátane majstra sveta v niekoľkých váhových kategóriách. Okrem toho je často považovaný za jeden z najzábavnejších bojovníkov, ktorého zápasy sú naplnené technickou krásou a dynamikou.
          </p>
        </div>
      </div>
    </section>

    <section class="muay-thai-rules">
      <div class="section-title">
        <h2>Pravidlá Muay Thai</h2>
      </div>
      <ul class="rules-list">
        <li>Zápasy sa skladajú z 5 kôl, každé kolo trvá 3 minúty.</li>
        <li>Bojovníci môžu používať údery päsťami, lakťami, kolenami a kopmi.</li>
        <li>Zakázané sú údery hlavou, údery do zátylku alebo pod pás.</li>
        <li>Výhra môže byť dosiahnutá knokautom, technickým knokautom alebo rozhodnutím rozhodcov.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "MuayThai",
};
</script>

<style scoped>
.muay-thai-page {
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

.muay-thai-rules {
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
