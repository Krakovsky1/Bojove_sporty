// stores/sportsStore.js
import { defineStore } from "pinia";

export const useSportsStore = defineStore("sports", {
  state: () => ({
    fighters: [
      {
        id: 1,
        name: '"Iron" Mike Tyson',
        image: new URL("@/assets/mike_tyson.jpg", import.meta.url).href,
        description: [
          "Mike Tyson, celým menom Michael Gerard Tyson, je bývalý americký profesionálny boxer.",
          "Považuje sa za jedného z najdominantnejších a najkontroverznejších športovcov v histórii boxu.",
          "Tyson bol známy svojou agresívnou bojovou technikou, neuveriteľnou silou a schopnosťou knokautovať súperov už v prvých kolách.",
        ],
      },
      {
        id: 2,
        name: "Conor McGregor",
        image: new URL("@/assets/conor_mcgregor.jpg", import.meta.url).href,
        description: [
          "Conor McGregor je írsky MMA bojovník a bývalý šampión UFC v perovej a ľahkej váhe.",
          "Stal sa prvým bojovníkom UFC, ktorý držal tituly v dvoch váhových kategóriách naraz.",
        ],
      },
      {
        id: 3,
        name: "Rico Verhoeven",
        image: new URL("@/assets/rico_verhoeven.jpg", import.meta.url).href,
        description: [
          "Rico Verhoeven je holandský kickboxer, známy svojou dominanciou v ťažkej váhe organizácie Glory.",
          "Počas svojej kariéry získal množstvo prestížnych titulov a je považovaný za jedného z najlepších kickboxerov všetkých čias.",
        ],
      },
      {
        id: 4,
        name: "Saenchai",
        image: new URL("@/assets/saenchai.jpg", import.meta.url).href,
        description: [
          "Saenchai (vlastným menom Parinya Charoenphol) je thajský Muay Thai bojovník, považovaný za jedného z najlepších a najikonickejších v histórii tohto športu.",
          "Je známy svojou technickou brilantnosťou, flexibilitou a schopnosťou prispôsobiť sa rôznym štýlom boja.",
        ],
      },
      {
        id: 5,
        name: "Imi Lichtenfeld",
        image: new URL("@/assets/imi_lichtenfeld.jpeg", import.meta.url).href,
        description: [
          "Imi Lichtenfeld bol slovenský židovského pôvodu ktorý bol zakladateľ systému sebaobrany známeho ako Krav Maga.",
          "Tento systém sa vyznačuje jednoduchosťou, rýchlosťou a účinnosťou, a dnes je používaný v armádach a policajných jednotkách po celom svete.",
        ],
      },
    ],
  }),
});
