/* global CATALOGUE, TYPES_REPARATION, REMISE */

// ------- Coordonnées de la boutique (à personnaliser) -------
const EMAIL_BOUTIQUE = "contact@amine-reparation.fr";

const fmt = (n) => (n == null ? null : `${n} €`);
const marques = [...new Set(CATALOGUE.map((m) => m.marque))];

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
        <span class="service__ic">${t.icone}</span>
        <h3>${t.nom}</h3>
        <p>Remplacement et réparation ${t.nom.toLowerCase()} sur iPhone, Samsung et autres marques.</p>
        <div class="service__from">Dès ${prixMin} €</div>
      </article>`;
  }).join("");
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
