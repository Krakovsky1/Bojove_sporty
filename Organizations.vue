<script>
export default {
  name: "Organizations",
};
</script>

<template>
  <div class="organizations-page">
    <!-- Hlavička stránky -->
    <header class="header">
      <h1>Najznámejšie organizácie bojových športov v Česku a na Slovensku</h1>
      <p>Slovensko a Česko sú domovom mnohých prestížnych organizácií, ktoré podporujú rozvoj bojových športov.</p>
    </header>

    <!-- Sekcia organizácií - Slovensko a Česko -->
    <div class="organizations-list">
      <div class="organization-card">
        <img src="@/assets/kickboxzvaz.jpg" alt="Slovenský Zväz Kickboxu" />
        <h3>Slovenský Zväz Kickboxu</h3>
        <p>Slovenský zväz kickboxu je hlavnou organizáciou pre podporu a rozvoj kickboxu na Slovensku.</p>
        <a href="http://www.slovak-kickboxing.sk/" target="_blank">Navštívte stránku</a>
      </div>

      <div class="organization-card">
        <img src="@/assets/mmazvaz.jpg" alt="Česká Asociace MMA" />
        <h3>Česká Asociace MMA</h3>
        <p>Česká asociácia MMA sa zameriava na podporu a organizáciu MMA turnajov v Českej republike.</p>
        <a href="https://www.cubu.info/cesky-svaz-mma/info" target="_blank">Navštívte stránku</a>
      </div>

      <div class="organization-card">
        <img src="@/assets/judo.jpg" alt="Slovenský Zväz Judistov" />
        <h3>Slovenský Zväz Judistov</h3>
        <p>Hlavná organizácia na podporu juda na Slovensku, ktorá organizuje turnaje a školenia.</p>
        <a href="https://www.judo.sk/2023/04/" target="_blank">Navštívte stránku</a>
      </div>

      <div class="organization-card">
        <img src="@/assets/thai.jpg" alt="Český Svaz Thaiboxu" />
        <h3>Český Svaz Thaiboxu</h3>
        <p>Organizácia, ktorá podporuje Muay Thai a thaiboxing v Českej republike.</p>
        <a href="https://www.czechmuaythai.cz/" target="_blank">Navštívte stránku</a>
      </div>
    </div>

    <!-- Oddelenie sekcií -->
    <hr class="section-divider" />

    <!-- Sekcia organizácií - Svetové -->
    <header class="header">
      <h1>Najznámejšie svetové organizácie bojových športov</h1>
      <p>Svetové organizácie bojových športov zastrešujú tisíce profesionálnych bojovníkov a fanúšikov po celom svete.</p>
    </header>

    <div class="organizations-list">
      <div class="organization-card">
        <img src="@/assets/ufc.png" alt="UFC" />
        <h3>UFC (Ultimate Fighting Championship)</h3>
        <p>Najväčšia MMA organizácia na svete, ktorá zastrešuje zápasy medzi najlepšími bojovníkmi z celého sveta.</p>
        <a href="https://www.ufc.com" target="_blank">Navštívte stránku</a>
      </div>

      <div class="organization-card">
        <img src="@/assets/onefc.jpg" alt="ONE Championship" />
        <h3>ONE Championship</h3>
        <p>Ázijská organizácia špecializujúca sa na MMA, Muay Thai a kickbox zápasy na najvyššej úrovni.</p>
        <a href="https://www.onefc.com" target="_blank">Navštívte stránku</a>
      </div>

      <div class="organization-card">
        <img src="@/assets/wbc.jpg" alt="WBC Muay Thai" />
        <h3>WBC Muay Thai</h3>
        <p>Medzinárodná organizácia zameraná na reguláciu a podporu profesionálneho Muay Thai.</p>
        <a href="https://www.wbcmuaythai.com" target="_blank">Navštívte stránku</a>
      </div>

      <div class="organization-card">
        <img src="@/assets/bellator.jpg" alt="Bellator MMA" />
        <h3>Bellator MMA</h3>
        <p>Popredná svetová MMA organizácia, ktorá sa sústreďuje na globálne turnaje a rozvoj bojových športov.</p>
        <a href="https://www.bellator.com" target="_blank">Navštívte stránku</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.organizations-page {
  background: linear-gradient(to right, #282828, #3b3b3b);
  min-height: 100vh;
  padding: 40px 20px;
  color: #fff;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 2.5em;
  color: #f1c40f;
  margin-bottom: 10px;
}

.header p {
  font-size: 1.2em;
  color: #ddd;
}

.section-divider {
  border: none;
  border-top: 2px solid #555;
  margin: 40px 0;
}

.organizations-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.organization-card {
  background-color: #3b3b3b;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.organization-card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.organization-card h3 {
  font-size: 1.5em;
  color: #f1c40f;
  margin-bottom: 10px;
}

.organization-card p {
  font-size: 1em;
  color: #ddd;
  margin-bottom: 15px;
}

.organization-card a {
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  background-color: #f1c40f;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1em;
}

.organization-card a:hover {
  background-color: #d4a407;
}

.organization-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}
</style>
