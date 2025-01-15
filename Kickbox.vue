<template>
  <div class="kickbox-page">
    <header class="header">
      <h1>Všetko o Kickboxe</h1>
      <p class="intro-text">
        Ponorte sa do dynamického sveta kickboxu, jedného z najpopulárnejších bojových športov, ktorý kombinuje údery a kopy s precíznou technikou a silou.
      </p>
    </header>

    <section class="kickbox-info">
      <div class="section-title">
        <h2>Čo je to Kickbox?</h2>
      </div>
      <p class="section-text">
        Kickbox je bojový šport, ktorý kombinuje údery rukami z boxu a kopy z bojových umení, ako sú karate a taekwondo. Vznikol v 60. a 70. rokoch minulého storočia ako moderný šport, ktorý sa odvtedy rozšíril po celom svete.<br><br>

        Zápasy v kickboxe sa odohrávajú v ringu a zvyčajne sú rozdelené do 3 až 5 kôl, pričom každé kolo trvá 2 až 3 minúty. Bojovníci môžu získať body za presné a efektívne údery alebo vyhrať knokautom. Kickbox vyžaduje od bojovníkov vynikajúcu fyzickú kondíciu, rýchlosť, koordináciu a disciplínu.<br><br>

        Tento šport sa používa aj ako efektívny spôsob sebaobrany a kondičného tréningu, čo z neho robí atraktívny šport pre amatérov aj profesionálov.
      </p>
    </section>

    <section class="fighter-profile">
      <div class="section-title">
        <h2>Najznámejší bojovník: Rico Verhoeven</h2>
      </div>
      <div class="fighter-info">
        <div class="fighter-image">
          <img src="@/assets/rico_verhoeven.jpg" alt="Rico Verhoeven" />
        </div>
        <div class="fighter-text">
          <p>
            Buakaw Banchamek, legendárny kickboxer z Thajska, je známy svojimi technicky precíznymi kopmi a neuveriteľnou kondíciou. Je dvojnásobným šampiónom K-1 World MAX a symbolom moderného kickboxu.
          </p>
        </div>
      </div>
    </section>

    <section class="kickbox-rules">
      <div class="section-title">
        <h2>Pravidlá Kickboxu</h2>
      </div>
      <ul class="rules-list">
        <li>Zápasy sa skladajú z 3-5 kôl, každé kolo trvá 2-3 minúty.</li>
        <li>Dovolené sú údery rukami, kopy a niektoré kolená.</li>
        <li>Zakázané sú údery do zátylku, pod pás alebo použitie lakťov.</li>
        <li>Výhra môže byť dosiahnutá knokautom, technickým knokautom alebo rozhodnutím rozhodcov.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Kickbox",
};
</script>

<style scoped>
.kickbox-page {
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

.kickbox-rules {
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
