/* =========================================================================
   cart.js — Panier persistant (localStorage)
   ------------------------------------------------------------------------
   Catalogue centralisé + fonctions :
     - addToCart(id)        : ajoute un produit (pas de doublon)
     - removeFromCart(id)   : retire un produit
     - getCart()            : renvoie le tableau des ids en panier
     - cartTotal()          : total en euros
     - renderCart()         : rend le panier sur la page panier.html
     - updateCount()        : met à jour le compteur dans la navigation

   Les boutons "Acheter" de tout le site portent l'attribut
   data-produit="<id>" et sont câblés automatiquement.
   ========================================================================= */

(function () {
  "use strict";

  var CLE_STOCKAGE = "mkphone_panier";

  /* -------------------------------------------------------------------
     CATALOGUE — source de vérité des produits et prix.
     (Les mêmes ids doivent être utilisés côté Stripe/PayPal.)
     ------------------------------------------------------------------- */
  var CATALOGUE = {
    reparation: {
      id: "reparation",
      nom: "Guide Complet de Réparation d'Appareils Électroniques",
      prix: 39,
      couleur: "marine"
    },
    "flash-decodage": {
      id: "flash-decodage",
      nom: "Flash & Décodage : Maîtrise Complète",
      prix: 49,
      couleur: "orange"
    },
    pack: {
      id: "pack",
      nom: "Pack Complet — Les 2 ebooks",
      prix: 69,
      prixReference: 88,
      couleur: "orange"
    }
  };

  // Exposé globalement pour checkout.js et les pages
  window.CATALOGUE = CATALOGUE;

  /* ----------------------------- Stockage ----------------------------- */
  function lire() {
    try {
      var brut = localStorage.getItem(CLE_STOCKAGE);
      return brut ? JSON.parse(brut) : [];
    } catch (e) {
      return [];
    }
  }

  function ecrire(liste) {
    try {
      localStorage.setItem(CLE_STOCKAGE, JSON.stringify(liste));
    } catch (e) {
      /* stockage indisponible : on ignore silencieusement */
    }
    updateCount();
  }

  /* ----------------------------- API panier ----------------------------- */
  function getCart() {
    // On ne garde que les ids présents dans le catalogue
    return lire().filter(function (id) { return CATALOGUE[id]; });
  }

  function addToCart(id) {
    if (!CATALOGUE[id]) { return; }
    var panier = getCart();

    // Règle métier : si on ajoute le PACK, il remplace les ebooks unitaires.
    if (id === "pack") {
      panier = ["pack"];
    } else {
      // Un ebook unitaire ne coexiste pas avec le pack
      panier = panier.filter(function (x) { return x !== "pack"; });
      if (panier.indexOf(id) === -1) { panier.push(id); }
    }

    ecrire(panier);
    animerCompteur();
    return panier;
  }

  function removeFromCart(id) {
    var panier = getCart().filter(function (x) { return x !== id; });
    ecrire(panier);
    renderCart();
    return panier;
  }

  function cartTotal() {
    return getCart().reduce(function (somme, id) {
      return somme + (CATALOGUE[id] ? CATALOGUE[id].prix : 0);
    }, 0);
  }

  /* ----------------------------- Compteur nav ----------------------------- */
  function updateCount() {
    var n = getCart().length;
    document.querySelectorAll(".panier-compteur").forEach(function (el) {
      el.textContent = n;
      el.style.display = n > 0 ? "grid" : "none";
    });
  }

  function animerCompteur() {
    var el = document.querySelector(".panier-compteur");
    if (!el) { return; }
    el.animate(
      [{ transform: "scale(1)" }, { transform: "scale(1.4)" }, { transform: "scale(1)" }],
      { duration: 300 }
    );
  }

  /* ----------------------------- Rendu panier ----------------------------- */
  function renderCart() {
    var conteneur = document.getElementById("panier-articles");
    if (!conteneur) { return; } // pas sur la page panier

    var panier = getCart();
    var totalEl = document.getElementById("panier-total");
    var sousTotalEl = document.getElementById("panier-sous-total");
    var videEl = document.getElementById("panier-vide");
    var contenuEl = document.getElementById("panier-contenu");

    if (panier.length === 0) {
      if (videEl) { videEl.style.display = "block"; }
      if (contenuEl) { contenuEl.style.display = "none"; }
      return;
    }

    if (videEl) { videEl.style.display = "none"; }
    if (contenuEl) { contenuEl.style.display = "grid"; }

    conteneur.innerHTML = "";
    panier.forEach(function (id) {
      var p = CATALOGUE[id];
      var ligne = document.createElement("div");
      ligne.className = "panier-ligne";
      ligne.innerHTML =
        '<div class="panier-ligne__vignette ' +
          (p.couleur === "orange" ? "panier-ligne__vignette--orange" : "") + '">' +
          '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>' +
        '</div>' +
        '<div class="panier-ligne__info">' +
          '<h4>' + p.nom + '</h4>' +
          '<span class="txt-secondaire" style="font-size:.85rem">Ebook numérique (PDF) — téléchargement immédiat</span>' +
        '</div>' +
        '<div class="panier-ligne__prix">' + p.prix + ' €</div>' +
        '<button class="panier-ligne__suppr" data-suppr="' + id + '" aria-label="Retirer ' + p.nom + ' du panier">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg>' +
        '</button>';
      conteneur.appendChild(ligne);
    });

    // Boutons de suppression
    conteneur.querySelectorAll("[data-suppr]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        removeFromCart(btn.getAttribute("data-suppr"));
      });
    });

    var total = cartTotal();
    if (sousTotalEl) { sousTotalEl.textContent = total + " €"; }
    if (totalEl) { totalEl.textContent = total + " €"; }
  }

  /* ----------------------------- Câblage global ----------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    updateCount();
    renderCart();

    // Tous les boutons "Acheter / Ajouter au panier"
    document.querySelectorAll("[data-produit]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var id = btn.getAttribute("data-produit");
        addToCart(id);

        var direct = btn.getAttribute("data-direct") === "true";
        if (direct) {
          // Achat direct : on file au panier
          window.location.href = "panier.html";
        } else {
          // Retour visuel léger
          var ancien = btn.textContent;
          btn.textContent = "✓ Ajouté au panier";
          btn.disabled = true;
          setTimeout(function () {
            btn.textContent = ancien;
            btn.disabled = false;
          }, 1600);
        }
      });
    });
  });

  /* Expose l'API pour checkout.js / usage externe */
  window.Panier = {
    add: addToCart,
    remove: removeFromCart,
    get: getCart,
    total: cartTotal,
    render: renderCart,
    catalogue: CATALOGUE
  };
})();
