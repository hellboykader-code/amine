/* global CATALOGUE, TYPES_REPARATION, REMISE */

// ------- Coordonnées de la boutique (à personnaliser) -------
const EMAIL_BOUTIQUE = "aminemekhfi45@gmail.com";

const fmt = (n) => (n == null ? null : `${n} €`);
const marques = [...new Set(CATALOGUE.map((m) => m.marque))];

// ------- Icônes SVG (line icons, look tech épuré) -------
const ICONES = {
  ecran: '<rect x="5" y="2" width="14" height="20" rx="2.5"/><line x1="10" y1="18" x2="14" y2="18"/>',
  batterie: '<rect x="2" y="7" width="16" height="10" rx="2"/><line x1="21" y1="10" x2="21" y2="14"/><line x1="6" y1="10" x2="6" y2="14"/><line x1="10" y1="10" x2="10" y2="14"/>',
  charge: '<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/>',
  camera: '<path d="M3 8a2 2 0 0 1 2-2h1.5l1-2h5l1 2H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><circle cx="12" cy="12.5" r="3.5"/>',
  vitre: '<rect x="4" y="2" width="16" height="20" rx="2.5"/><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="17" x2="20" y2="17"/>',
  desox: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>',
  express: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  garantie: '<path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6Z"/><path d="m9 12 2 2 4-4"/>',
  prix: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5a2.5 2 0 0 1 5 0c0 2.5-5 1.5-5 4a2.5 2 0 0 0 5 0"/>',
  domicile: '<path d="M4 11 12 4l8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>',
  expert: '<path d="M14.7 6.3a4 4 0 0 0-5.6 5.6l-6.1 6.1 1.4 1.4 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.1 2.1-1.9-.5-.5-1.9Z"/>',
  correspondance: '<path d="M3 8 12 3l9 5-9 5Z"/><path d="M3 8v8l9 5 9-5V8"/><line x1="12" y1="13" x2="12" y2="21"/>',
};
const svgIc = (k) => `<span class="ic"><svg viewBox="0 0 24 24">${ICONES[k] || ""}</svg></span>`;

// ============================================================
// 1. SERVICES (cartes)
// ============================================================
function renderServices() {
  const wrap = document.getElementById("servicesCards");
  wrap.innerHTML = TYPES_REPARATION.map((t) => {
    const prixMin = Math.min(
      ...CATALOGUE.map((m) => m[t.cle]).filter((p) => p != null)
    );
    return `
      <article class="service">
        ${svgIc(t.cle)}
        <h3>${t.nom}</h3>
        <p>Remplacement et réparation ${t.nom.toLowerCase()} sur iPhone, Samsung et autres marques.</p>
        <div class="service__from">Dès ${prixMin} €</div>
      </article>`;
  }).join("");
}

// ============================================================
// 1b. POURQUOI NOUS (cartes)
// ============================================================
const FEATURES = [
  { ic: "express", titre: "Express", texte: "La plupart des réparations sont réalisées en 30 minutes, pendant que vous attendez." },
  { ic: "garantie", titre: "Garantie 2 ans", texte: "Pièces vérifiées et testées, garanties jusqu'à 2 ans sur nos prestations." },
  { ic: "prix", titre: "-15 € partout", texte: "Des tarifs parmi les plus compétitifs : 15 € de moins sur chaque réparation." },
  { ic: "domicile", titre: "Partout en Île-de-France", texte: "Déplacement à domicile ou au travail possible dans toute la région." },
  { ic: "expert", titre: "Techniciens experts", texte: "iPhone, Samsung, Xiaomi, Huawei, tablettes et PC : tout est pris en charge." },
  { ic: "correspondance", titre: "Par correspondance", texte: "Envoyez-nous votre appareil, on le répare et on vous le renvoie." },
];
function renderFeatures() {
  const wrap = document.getElementById("featuresCards");
  if (!wrap) return;
  wrap.innerHTML = FEATURES.map(
    (f) => `<article class="feature">${svgIc(f.ic)}<h3>${f.titre}</h3><p>${f.texte}</p></article>`
  ).join("");
}

// ============================================================
// 2. TABLEAU DES TARIFS
// ============================================================
function renderTable(marque = "Toutes", recherche = "") {
  const thead = document.querySelector("#tableTarifs thead");
  const tbody = document.querySelector("#tableTarifs tbody");

  thead.innerHTML =
    "<tr><th>Modèle</th>" +
    TYPES_REPARATION.map((t) => `<th>${t.nom}</th>`).join("") +
    "<th></th></tr>";

  const q = recherche.trim().toLowerCase();
  const lignes = CATALOGUE.filter(
    (m) =>
      (marque === "Toutes" || m.marque === marque) &&
      (q === "" || m.modele.toLowerCase().includes(q))
  );

  if (lignes.length === 0) {
    tbody.innerHTML = `<tr><td colspan="${TYPES_REPARATION.length + 2}" class="na">Aucun modèle trouvé.</td></tr>`;
    return;
  }

  tbody.innerHTML = lignes
    .map((m) => {
      const cells = TYPES_REPARATION.map((t) =>
        m[t.cle] == null
          ? `<td class="na">—</td>`
          : `<td class="prix">${fmt(m[t.cle])}</td>`
      ).join("");
      return `<tr>
        <td>${m.modele}</td>
        ${cells}
        <td><button class="table__reserver" data-marque="${m.marque}" data-modele="${m.modele}">Réserver</button></td>
      </tr>`;
    })
    .join("");
}

// ============================================================
// 3. FORMULAIRE DE RENDEZ-VOUS
// ============================================================
function remplirMarques(select) {
  select.innerHTML =
    `<option value="">—</option>` +
    marques.map((m) => `<option>${m}</option>`).join("");
}

function remplirModeles(marque) {
  const selModele = document.getElementById("modele");
  const modeles = CATALOGUE.filter((m) => m.marque === marque);
  selModele.innerHTML = modeles.length
    ? modeles.map((m) => `<option>${m.modele}</option>`).join("")
    : `<option value="">—</option>`;
  remplirReparations();
}

function remplirReparations() {
  const selRep = document.getElementById("reparation");
  const modele = document.getElementById("modele").value;
  const data = CATALOGUE.find((m) => m.modele === modele);
  selRep.innerHTML = TYPES_REPARATION.map((t) => {
    const prix = data ? data[t.cle] : null;
    const label = prix == null ? `${t.nom} — sur devis` : `${t.nom} — ${prix} €`;
    return `<option value="${t.cle}"${prix == null ? "" : ` data-prix="${prix}"`}>${label}</option>`;
  }).join("");
  majEstimation();
}

function majEstimation() {
  const box = document.getElementById("estimation");
  const opt = document.getElementById("reparation").selectedOptions[0];
  const prix = opt && opt.dataset.prix;
  if (prix) {
    box.hidden = false;
    box.innerHTML = `Estimation : <strong>${prix} €</strong> <span style="color:var(--muted)">(remise de ${REMISE} € déjà appliquée · devis confirmé en atelier)</span>`;
  } else {
    box.hidden = false;
    box.innerHTML = `Cette réparation est établie <strong>sur devis gratuit</strong>.`;
  }
}

// Préremplissage depuis le bouton « Réserver » du tableau
function reserverDepuisTable(marque, modele) {
  document.getElementById("marque").value = marque;
  remplirModeles(marque);
  document.getElementById("modele").value = modele;
  remplirReparations();
  document.getElementById("rdv").scrollIntoView({ behavior: "smooth" });
}

// Soumission
function soumettreRdv(e) {
  e.preventDefault();
  const f = e.target;
  const confirm = document.getElementById("rdvConfirm");

  const requis = ["nom", "tel", "marque", "modele", "reparation", "date", "creneau"];
  const manquant = requis.find((id) => !f[id].value.trim());
  if (manquant) {
    confirm.hidden = false;
    confirm.className = "rdv__confirm error";
    confirm.textContent = "Merci de remplir tous les champs obligatoires (*).";
    f[manquant].focus();
    return;
  }

  const repOpt = document.getElementById("reparation").selectedOptions[0];
  const repNom = repOpt.textContent.split(" — ")[0];
  const prix = repOpt.dataset.prix ? `${repOpt.dataset.prix} €` : "sur devis";

  // Récapitulatif + e-mail pré-rempli pour la boutique
  const sujet = `Demande de RDV — ${f.marque.value} ${f.modele.value}`;
  const corps =
    `Nom: ${f.nom.value}\n` +
    `Téléphone: ${f.tel.value}\n` +
    `E-mail: ${f.email.value || "—"}\n` +
    `Appareil: ${f.marque.value} ${f.modele.value}\n` +
    `Réparation: ${repNom} (${prix})\n` +
    `Date: ${f.date.value} — Créneau: ${f.creneau.value}\n` +
    `Message: ${f.message.value || "—"}`;

  confirm.hidden = false;
  confirm.className = "rdv__confirm";
  confirm.innerHTML =
    `✅ Merci ${f.nom.value.split(" ")[0]} ! Votre demande pour la réparation ` +
    `<strong>${repNom}</strong> de votre <strong>${f.marque.value} ${f.modele.value}</strong> ` +
    `le <strong>${f.date.value}</strong> (${f.creneau.value}) est enregistrée.<br/>` +
    `Nous vous confirmons par téléphone. ` +
    `<a href="mailto:${EMAIL_BOUTIQUE}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}">` +
    `Envoyer aussi par e-mail →</a>`;
  confirm.scrollIntoView({ behavior: "smooth", block: "center" });
  f.reset();
  remplirModeles(marques[0]);
}

// ============================================================
// 4. INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("annee").textContent = new Date().getFullYear();

  renderServices();
  renderFeatures();

  // Filtre marque du tableau
  const filtreMarque = document.getElementById("filtreMarque");
  filtreMarque.innerHTML =
    `<option>Toutes</option>` + marques.map((m) => `<option>${m}</option>`).join("");
  const recherche = document.getElementById("rechercheModele");
  const rerender = () => renderTable(filtreMarque.value, recherche.value);
  filtreMarque.addEventListener("change", rerender);
  recherche.addEventListener("input", rerender);
  renderTable();

  // Délégation : boutons « Réserver »
  document.querySelector("#tableTarifs tbody").addEventListener("click", (e) => {
    const b = e.target.closest(".table__reserver");
    if (b) reserverDepuisTable(b.dataset.marque, b.dataset.modele);
  });

  // Formulaire RDV
  const selMarque = document.getElementById("marque");
  remplirMarques(selMarque);
  selMarque.value = marques[0];
  remplirModeles(marques[0]);
  selMarque.addEventListener("change", (e) => remplirModeles(e.target.value));
  document.getElementById("modele").addEventListener("change", remplirReparations);
  document.getElementById("reparation").addEventListener("change", majEstimation);
  document.getElementById("rdvForm").addEventListener("submit", soumettreRdv);

  // Date minimale = aujourd'hui
  const dateInput = document.getElementById("date");
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;

  // Menu mobile
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
});
