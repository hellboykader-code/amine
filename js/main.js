/* =========================================================================
   main.js — interactions du site (nav mobile, accordéon FAQ, révélation
   au défilement, marquee, année du footer). Sans dépendance.
   ========================================================================= */
(function () {
  "use strict";

  /* ---- Menu mobile (burger) ---- */
  var burger = document.querySelector(".burger");
  var menu = document.querySelector(".nav__liens");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var ouvert = menu.classList.toggle("ouvert");
      burger.setAttribute("aria-expanded", ouvert ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (lien) {
      lien.addEventListener("click", function () {
        menu.classList.remove("ouvert");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Accordéon FAQ ---- */
  document.querySelectorAll(".faq-question").forEach(function (q) {
    q.setAttribute("aria-expanded", "false");
    q.addEventListener("click", function () {
      var rep = q.nextElementSibling;
      var ouvert = q.getAttribute("aria-expanded") === "true";
      q.setAttribute("aria-expanded", ouvert ? "false" : "true");
      if (rep) rep.style.maxHeight = ouvert ? null : rep.scrollHeight + "px";
    });
  });

  /* ---- Révélation au défilement ---- */
  var reduits = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var cibles = document.querySelectorAll(".reveal");
  if (reduits || !("IntersectionObserver" in window)) {
    cibles.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    cibles.forEach(function (el) { io.observe(el); });
  }

  /* ---- Marquee : duplication du contenu pour une boucle continue ---- */
  document.querySelectorAll(".marquee__track").forEach(function (track) {
    track.innerHTML += track.innerHTML;
  });

  /* ---- Année du footer ---- */
  document.querySelectorAll("[data-annee]").forEach(function (el) {
    el.textContent = "2026";
  });
})();
