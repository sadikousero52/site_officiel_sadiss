// =========================================================
// Navigation mobile
// =========================================================
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// =========================================================
// Articles — données provisoires
// À remplacer par du contenu réel (ou une source de données) dès qu'il est prêt.
// =========================================================
const articles = [
  {
    date: "05 Août 2026",
    title: "Table de découpe de savon solide",
    excerpt: "Un système mécanique qui permet de découper les barres de savon solide en de petits morceau avec précision. Sa capacite de découpe est estimée de 80 morceaux.",
    domain: "technologie.html"
  },
  {
    date: "25 Août 2026",
    title: "Tamponneuse de savon",
    excerpt: "Un système mécanique ergonomique qui permet de tamponner les morceaux de savon en leur conférant une forme et une marque avec précision.",
    domain: "technologie.html"
  },
  {
    date: "05 Août 2026",
    title: "Produits:Savon liquide, palmida, shampoing, Balzam, eau de javel, gèle douche hydratant, savon de ménage et savon de toilette",
    excerpt: "Produits cosmétiques pensés et fabriquer pour la peau noire et métissée",
    domain: "cosmétique.html"
  }
];

const articleGrid = document.getElementById('articleGrid');
if (articleGrid) {
  articleGrid.innerHTML = articles.map(a => `
    <article class="article-card">
      <div class="article-thumb"></div>
      <div class="article-body">
        <span class="article-date">${a.date}</span>
        <h3>${a.title}</h3>
        <p>${a.excerpt}</p>
        <a class="read" href="${a.domain}">Lire la suite →</a>
      </div>
    </article>
  `).join('');
}


// =========================================================
// Articles — page Cosmétique & Savonnerie (données provisoires)
// =========================================================
const cosmetiqueArticles = [
    {
    date: "05 Août 2026",
    title: "Table de découpe de savon solide",
    excerpt: "Un système mécanique qui permet de découper les barres de savon solide en de petits morceau avec précision. Sa capacite de découpe est estimée de 80 morceaux.",
    domain: "technologie.html"
  },
  {
    date: "25 Août 2026",
    title: "Tamponneuse de savon",
    excerpt: "Un système mécanique ergonomique qui permet de tamponner les morceaux de savon en leur conférant une forme et une marque avec précision.",
    domain: "technologie.html"
  },
  {
    date: "05 Août 2026",
    title: "Produits:Savon liquide, palmida, shampoing, Balzam, eau de javel, gèle douche hydratant, savon de ménage et savon de toilette",
    excerpt: "Produits cosmétiques pensés et fabriquer pour la peau noire et métissée",
    domain: "cosmetique.html"
  }
];

const cosmetiqueGrid = document.getElementById('cosmetiqueArticles');
if (cosmetiqueGrid) {
  cosmetiqueGrid.innerHTML = cosmetiqueArticles.map(a => `
    <article class="article-card">
      <div class="article-thumb" style="background-image:url('${a.image}');background-size:cover;background-position:center;"></div>
      <div class="article-body">
        <span class="article-date">${a.date}</span>
        <h3>${a.title}</h3>
        <p>${a.excerpt}</p>
      </div>
    </article>
  `).join('');
}

// =========================================================
// Articles — page Technologie (données provisoires)
// =========================================================
const technologieArticles = [
  { date: "À venir", title: "Le robot 4WD bientôt finalisé", excerpt: "Notre premier projet vitrine, un système embarqué autonome, entre dans sa phase finale de tests." },
  { date: "À venir", title: "Deux nouveaux prototypes documentés", excerpt: "Objectif de fin d'année : au moins deux prototypes fonctionnels, présentés au club électronique." },
  { date: "À venir", title: "Prestations de services technologiques ouvertes", excerpt: "SadIss Technologie propose désormais ses services d'installation et de maintenance aux particuliers et entreprises." }
];

const technologieGrid = document.getElementById('technologieArticles');
if (technologieGrid) {
  technologieGrid.innerHTML = technologieArticles.map(a => `
    <article class="article-card">
      <div class="article-thumb"></div>
      <div class="article-body">
        <span class="article-date">${a.date}</span>
        <h3>${a.title}</h3>
        <p>${a.excerpt}</p>
      </div>
    </article>
  `).join('');
}

// =========================================================
// Articles — page Élevage (données provisoires)
// =========================================================
const elevageArticles = [
  { date: "À venir", title: "Premier lot de poussins", excerpt: "Démarrage avec un carton de 52 poussins, pour lancer l'élevage et l'incubation des œufs." },
  { date: "À venir", title: "Identification d'un site et d'un gestionnaire", excerpt: "Recherche d'un terrain adapté et d'une personne de confiance pour la gestion quotidienne de la ferme." },
  { date: "À venir", title: "Sourcing des fournisseurs d'intrants", excerpt: "Comparaison des fournisseurs d'aliments, de vaccins et de médicaments vétérinaires disponibles localement." }
];

const elevageGrid = document.getElementById('elevageArticles');
if (elevageGrid) {
  elevageGrid.innerHTML = elevageArticles.map(a => `
    <article class="article-card">
      <div class="article-thumb"></div>
      <div class="article-body">
        <span class="article-date">${a.date}</span>
        <h3>${a.title}</h3>
        <p>${a.excerpt}</p>
      </div>
    </article>
  `).join('');
}

// =========================================================
// Articles — page Agriculture (données provisoires)
// =========================================================
const agricultureArticles = [
  { date: "À venir", title: "Essais de thermocompression du marc de cajou", excerpt: "Recherches en cours sur la valorisation du marc de pomme de cajou en matériau biodégradable." },
  { date: "À venir", title: "Premiers capteurs de sol en test", excerpt: "Prototypage de capteurs pour mesurer l'humidité et le pH sur le terrain." },
  { date: "À venir", title: "Vers l'automatisation des tâches agricoles", excerpt: "Identification des tâches répétitives à automatiser en priorité." }
];

const agricultureGrid = document.getElementById('agricultureArticles');
if (agricultureGrid) {
  agricultureGrid.innerHTML = agricultureArticles.map(a => `
    <article class="article-card">
      <div class="article-thumb"></div>
      <div class="article-body">
        <span class="article-date">${a.date}</span>
        <h3>${a.title}</h3>
        <p>${a.excerpt}</p>
      </div>
    </article>
  `).join('');
}