import { useLayoutEffect } from "react";

// Anime l'apparition des éléments au défilement (fade + translation).
// Respecte "prefers-reduced-motion" : rien n'est masqué si l'utilisateur
// préfère moins d'animations.
export function useScrollReveal(deps = []) {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.body.classList.add("reveal-on");
    const selector =
      ".service, .feature, .step, .gallery figure, .avis, .faq__item, " +
      ".apropos__media, .finalcta, .tarifs-cta, .section__title, .section__lead";
    const els = Array.from(document.querySelectorAll(selector));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      document.body.classList.remove("reveal-on");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
