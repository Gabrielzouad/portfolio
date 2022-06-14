let prosjekter = [
  {
    tittel: "Ameta",
    dato: "2022",
    bilde: "../img/ameta.png",
    rolle: "Utvikler og Designer",
    kunde: "Ameta ",
    id: "ameta",
    tekst: "",
    webBilde1: "",
    webBilde2: "",
    webBilde3: "",
    webBilde4: "",
    webBilde5: "",
    webBilde6: "",
    referanse: "",
  },
  {
    tittel: "Prezentive",
    dato: "2022",
    bilde: "../img/prezentive.png",
    rolle: "Utvikler og Designer",
    kunde: "Prezentive",
    id: "prezentive",
    tekst: "",
    webBilde1: "",
    webBilde2: "",
    webBilde3: "",
    webBilde4: "",
    webBilde5: "",
    webBilde6: "",
    referanse: "",
  },
  {
    tittel: "Heydude",
    dato: "2022",
    bilde: "../img/heydude.png",
    rolle: "Utvikler og Designer",
    kunde: "Heydudeshoes Norge ",
    id: "heydude",
    tekst: "",
    webBilde1: "",
    webBilde2: "",
    webBilde3: "",
    webBilde4: "",
    webBilde5: "",
    webBilde6: "",
    referanse: "",
  },
  {
    tittel: "Science museeum",
    dato: "2022",
    bilde: "../img/science.png",
    rolle: "Utvikler og Designer",
    kunde: "Community Science Museeum",
    id: "communitymuseeum",
    tekst: "",
    webBilde1: "",
    webBilde2: "",
    webBilde3: "",
    webBilde4: "",
    webBilde5: "",
    webBilde6: "",
    referanse: "",
  },
];

const prosjektContainer = document.querySelector(".prosjekter");

for (let i = 0; i < prosjekter.length; i++) {
  const dato = prosjekter[i].dato;
  const tittel = prosjekter[i].tittel;
  const bilde = prosjekter[i].bilde;
  const id = prosjekter[i].id;

  prosjektContainer.innerHTML += `<div class="prosjekt-item">
                                  <a href="prosjektpage.html?id=${id}" >
                                    <div class="prosjekt-navn">
                                    <h5>${dato}</h5>
                                    <h2>${tittel}</h2>
                                    </div>
                                    <img class="prosjekt-bilde" src="${bilde}"
                                    </a>
                                </div>`;
}
