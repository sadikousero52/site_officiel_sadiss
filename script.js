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
    date: "À venir",
    title: "Robot 4WD : notre premier prototype vitrine",
    excerpt: "Un système embarqué autonome en cours de finalisation, pensé pour les usages agricoles et l'élevage.",
    domain: "technologie.html"
  },
  {
    date: "À venir",
    title: "Nos premiers savons : Kogui, Pamida, Santex",
    excerpt: "Le premier lancement de SadIss en savonnerie, formulé pour la peau noire et métissée.",
    domain: "cosmetique.html"
  },
  {
    date: "À venir",
    title: "Vers une ferme avicole locale",
    excerpt: "Identification de site, de gestionnaire et de fournisseurs : les coulisses de notre préparation en élevage.",
    domain: "elevage.html"
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
  { date: "À venir", title: "Lancement des savons Kogui, Pamida, Santex", excerpt: "Notre première gamme de savons artisanaux, formulée pour la peau noire et métissée." },
  { date: "À venir", title: "Ouverture des formations en savonnerie", excerpt: "Des sessions pratiques pour apprendre la saponification et les bonnes pratiques de fabrication." },
  { date: "À venir", title: "Offre de lancement sur nos premiers produits", excerpt: "Une offre réservée aux premiers clients lors du lancement officiel." }
];

const cosmetiqueGrid = document.getElementById('cosmetiqueArticles');
if (cosmetiqueGrid) {
  cosmetiqueGrid.innerHTML = cosmetiqueArticles.map(a => `
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
// Modale de paiement — documents payants
// TODO: remplacer les numéros "À communiquer" par les vrais numéros Moov/MTN/Celtiis,
// et brancher un vrai lien de téléchargement une fois le paiement automatisé
// (ex: via une passerelle comme Kkiapay ou FedaPay, à décider).
// =========================================================
const payModal = document.getElementById('payModal');
const payClose = document.getElementById('payClose');
const payDocTitle = document.getElementById('payDocTitle');
const payDocPrice = document.getElementById('payDocPrice');

document.querySelectorAll('.doc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!payModal) return;
    payDocTitle.textContent = btn.dataset.doc;
    payDocPrice.textContent = btn.dataset.price;
    payModal.hidden = false;
  });
});

payClose?.addEventListener('click', () => { payModal.hidden = true; });
payModal?.addEventListener('click', (e) => {
  if (e.target === payModal) payModal.hidden = true;
});
