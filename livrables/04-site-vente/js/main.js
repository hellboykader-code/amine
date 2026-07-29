/* =========================================================================
   main.js — Interactions générales du site
   - Menu burger (navigation mobile)
   - Accordéon FAQ (accessible, aria-expanded)
   - Année automatique dans le footer
   - Reveal léger au défilement (IntersectionObserver)
   ========================================================================= */

(function () {
  "use strict";

  /* -------------------------------------------------------------------
     1. MENU BURGER — navigation mobile
     ------------------------------------------------------------------- */
  var burger = document.querySelector(".burger");
  var menu = document.querySelector(".nav__liens");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      var ouvert = menu.classList.toggle("ouvert");
      burger.setAttribute("aria-expanded", ouvert ? "true" : "false");
      burger.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    });

    // Referme le menu au clic sur un lien (navigation mobile fluide)
    menu.querySelectorAll("a").forEach(function (lien) {
      lien.addEventListener("click", function () {
        menu.classList.remove("ouvert");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* -------------------------------------------------------------------
     2. ACCORDÉON FAQ
     Chaque question est un <button aria-expanded> qui ouvre/ferme
     la réponse associée via son max-height.
     ------------------------------------------------------------------- */
  var questions = document.querySelectorAll(".faq-question");

  questions.forEach(function (q) {
    q.addEventListener("click", function () {
      var ouvert = q.getAttribute("aria-expanded") === "true";
      var reponse = document.getElementById(q.getAttribute("aria-controls"));

      // Bascule l'état de la question cliquée
      q.setAttribute("aria-expanded", ouvert ? "false" : "true");

      if (reponse) {
        if (ouvert) {
          reponse.style.maxHeight = null;
          reponse.style.paddingTop = null;
          reponse.style.paddingBottom = null;
        } else {
          reponse.style.maxHeight = reponse.scrollHeight + 40 + "px";
          reponse.style.paddingTop = "4px";
          reponse.style.paddingBottom = "4px";
        }
      }
    });
  });

  /* -------------------------------------------------------------------
     3. ANNÉE AUTOMATIQUE dans le footer
     ------------------------------------------------------------------- */
  var annee = document.querySelectorAll("[data-annee]");
  annee.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* -------------------------------------------------------------------
     4. REVEAL AU DÉFILEMENT
     Ajoute la classe .visible aux éléments .reveal quand ils
     entrent dans le viewport. Se dégrade proprement si l'API
     IntersectionObserver n'est pas disponible.
     ------------------------------------------------------------------- */
  var cibles = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && cibles.length) {
    var obs = new IntersectionObserver(
      function (entrees) {
        entrees.forEach(function (entree) {
          if (entree.isIntersecting) {
            entree.target.classList.add("visible");
            obs.unobserve(entree.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    cibles.forEach(function (el) { obs.observe(el); });
  } else {
    // Fallback : tout afficher
    cibles.forEach(function (el) { el.classList.add("visible"); });
  }

  /* -------------------------------------------------------------------
     5. FORMULAIRES DE DÉMONSTRATION (newsletter / contact)
     Empêche l'envoi réel tant qu'aucun service (Formspree) n'est
     branché — voir README-site.md.
     ------------------------------------------------------------------- */
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Merci ! Ce formulaire est en mode démonstration.\n" +
        "Branchez Formspree (ou votre service d'emailing) pour activer l'envoi réel — voir README-site.md."
      );
      form.reset();
    });
  });
})();
