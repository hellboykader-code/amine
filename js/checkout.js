/* =========================================================================
   checkout.js — Passage en caisse (paiement)
   ------------------------------------------------------------------------
   Fournit startCheckout(items) avec DEUX chemins d'intégration :

     (A) STRIPE
         A1. Payment Links (le plus simple, SANS serveur) :
             on redirige l'acheteur vers une URL de Payment Link Stripe.
         A2. Stripe Checkout via endpoint serverless /create-checkout-session
             (fonction Netlify/Vercel) — recommandé pour le PACK ou
             plusieurs articles. Voir README-site.md pour le code serveur.

     (B) PAYPAL
         Smart Payment Buttons (SDK PayPal chargé dynamiquement).

   Les clés publiques et liens sont lus depuis window.CONFIG (config.js,
   NON commité — voir config.example.js). Rien de secret ici : la clé
   secrète Stripe et le secret PayPal restent côté serveur (.env).
   ========================================================================= */

(function () {
  "use strict";

  // Configuration par défaut (mode démo) fusionnée avec window.CONFIG
  var CFG = Object.assign(
    {
      MODE: "demo",                 // "demo" | "stripe-link" | "stripe-checkout" | "paypal"
      STRIPE_PUBLIC_KEY: "",        // pk_live_... ou pk_test_...
      // Payment Links Stripe (une URL par produit / pack)
      STRIPE_PAYMENT_LINK_REPARATION: "",
      STRIPE_PAYMENT_LINK_FLASH: "",
      STRIPE_PAYMENT_LINK_PACK: "",
      // Endpoint serverless pour créer une session Stripe Checkout multi-articles
      CHECKOUT_ENDPOINT: "/.netlify/functions/create-checkout-session",
      // PayPal
      PAYPAL_CLIENT_ID: "",
      DEVISE: "EUR",
      URL_SUCCES: "merci.html",
      URL_ANNULATION: "panier.html"
    },
    window.CONFIG || {}
  );

  /* Correspondance produit -> Payment Link Stripe */
  function lienPaiement(id) {
    if (id === "reparation") { return CFG.STRIPE_PAYMENT_LINK_REPARATION; }
    if (id === "flash-decodage") { return CFG.STRIPE_PAYMENT_LINK_FLASH; }
    if (id === "pack") { return CFG.STRIPE_PAYMENT_LINK_PACK; }
    return "";
  }

  /* -------------------------------------------------------------------
     POINT D'ENTRÉE : startCheckout(items)
     items : tableau d'ids (ex. ["reparation", "flash-decodage"])
             ou undefined -> lit le panier courant.
     ------------------------------------------------------------------- */
  function startCheckout(items) {
    var ids = items || (window.Panier ? window.Panier.get() : []);
    if (!ids || ids.length === 0) {
      alert("Votre panier est vide.");
      return;
    }

    switch (CFG.MODE) {
      case "stripe-link":
        return payerViaPaymentLink(ids);
      case "stripe-checkout":
        return payerViaCheckoutSession(ids);
      case "paypal":
        return payerViaPayPal(ids);
      default:
        return modeDemo(ids);
    }
  }

  /* ---------------------- (A1) Stripe Payment Links ---------------------- */
  // Le plus simple : aucune infrastructure. Idéal pour 1 article.
  // Pour plusieurs articles unitaires, on privilégie le pack, sinon
  // on bascule sur Checkout (A2).
  function payerViaPaymentLink(ids) {
    if (ids.length === 1) {
      var url = lienPaiement(ids[0]);
      if (!url) {
        alert("Lien de paiement Stripe non configuré pour ce produit (voir config.js).");
        return;
      }
      window.location.href = url;
    } else {
      // Plusieurs articles : les Payment Links ne gèrent qu'un lien à la fois.
      // On recommande le PACK, sinon on passe par Checkout.
      alert("Pour acheter plusieurs ebooks en une fois, utilisez le Pack, ou activez le mode Stripe Checkout.");
      payerViaCheckoutSession(ids);
    }
  }

  /* ------------------ (A2) Stripe Checkout (serverless) ------------------ */
  // Appelle un endpoint serveur qui crée la session et renvoie son URL.
  // Voir README-site.md pour la fonction Netlify/Vercel correspondante.
  function payerViaCheckoutSession(ids) {
    var email = champEmail();
    fetch(CFG.CHECKOUT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: ids, email: email, devise: CFG.DEVISE })
    })
      .then(function (r) {
        if (!r.ok) { throw new Error("Réponse serveur invalide"); }
        return r.json();
      })
      .then(function (data) {
        if (data.url) {
          window.location.href = data.url; // URL de la session Stripe Checkout
        } else if (data.id && window.Stripe && CFG.STRIPE_PUBLIC_KEY) {
          // Alternative : redirection via l'ID de session
          window.Stripe(CFG.STRIPE_PUBLIC_KEY).redirectToCheckout({ sessionId: data.id });
        } else {
          throw new Error("Session Stripe non reçue");
        }
      })
      .catch(function (err) {
        console.error(err);
        alert("Le paiement n'a pas pu démarrer. Vérifiez la configuration Stripe / l'endpoint serveur.");
      });
  }

  /* --------------------------- (B) PayPal --------------------------- */
  // Charge le SDK PayPal à la volée puis rend les Smart Buttons dans
  // l'élément #paypal-boutons (présent sur panier.html).
  function payerViaPayPal(ids) {
    if (!CFG.PAYPAL_CLIENT_ID) {
      alert("PAYPAL_CLIENT_ID non configuré (voir config.js).");
      return;
    }
    var zone = document.getElementById("paypal-boutons");
    if (!zone) { return; }
    zone.innerHTML = "";
    zone.style.display = "block";

    chargerSdkPayPal(function () {
      if (!window.paypal) {
        alert("SDK PayPal indisponible.");
        return;
      }
      var total = ids.reduce(function (s, id) {
        return s + (window.CATALOGUE[id] ? window.CATALOGUE[id].prix : 0);
      }, 0);

      window.paypal.Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: { value: total.toFixed(2), currency_code: CFG.DEVISE },
              description: "MK Phone — Éditions Techniques (" + ids.join(", ") + ")"
            }]
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function () {
            // Paiement validé : on redirige vers la page de remerciement.
            // (En production, confirmez la commande côté serveur via webhook.)
            window.location.href = CFG.URL_SUCCES;
          });
        },
        onError: function (err) {
          console.error(err);
          alert("Une erreur PayPal est survenue.");
        }
      }).render("#paypal-boutons");
    });
  }

  function chargerSdkPayPal(callback) {
    if (window.paypal) { callback(); return; }
    var s = document.createElement("script");
    s.src = "https://www.paypal.com/sdk/js?client-id=" +
      encodeURIComponent(CFG.PAYPAL_CLIENT_ID) + "&currency=" + CFG.DEVISE;
    s.onload = callback;
    s.onerror = function () { alert("Impossible de charger le SDK PayPal."); };
    document.head.appendChild(s);
  }

  /* --------------------------- Mode démo --------------------------- */
  function modeDemo(ids) {
    var total = ids.reduce(function (s, id) {
      return s + (window.CATALOGUE[id] ? window.CATALOGUE[id].prix : 0);
    }, 0);
    var noms = ids.map(function (id) { return window.CATALOGUE[id].nom; }).join("\n • ");
    var ok = confirm(
      "MODE DÉMONSTRATION — aucun paiement réel.\n\n" +
      "Articles :\n • " + noms + "\n\nTotal : " + total + " €\n\n" +
      "Configurez vos clés Stripe / PayPal dans config.js pour activer le paiement réel.\n\n" +
      "Simuler une commande réussie et voir la page de confirmation ?"
    );
    if (ok) { window.location.href = CFG.URL_SUCCES; }
  }

  /* --------------------------- Utilitaires --------------------------- */
  function champEmail() {
    var el = document.getElementById("email-client");
    return el ? el.value.trim() : "";
  }

  // Expose la configuration active (utile pour l'affichage du bandeau démo)
  window.CHECKOUT_CONFIG = CFG;
  window.startCheckout = startCheckout;
})();
