import { useLayoutEffect } from "react";

// Anime l'apparition des éléments au défilement (fade + translation).
// Robuste : ce qui est déjà visible apparaît immédiatement, et une sécurité
// révèle tout après un court délai — le contenu ne reste jamais masqué.
// Respecte "prefers-reduced-motion".
export function useScrollReveal(deps = []) {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.body.classList.add("reveal-on");
    const selector =
      ".service, .feature, .step, .gallery figure, .avis, .faq__item, " +
      ".apropos__media, .finalcta, .tarifs-cta, .section__title, .section__lead, " +
      ".brand-card, .buysell__card";
    const els = Array.from(document.querySelectorAll(selector));
    const reveal = (el) => el.classList.add("in");
    const inView = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight - 20 && r.bottom > 0;
    };

    // Révèle tout de suite ce qui est déjà à l'écran
    els.forEach((el) => { if (inView(el)) reveal(el); });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => { if (!el.classList.contains("in")) io.observe(el); });

    // Sécurité : rien ne reste caché même si l'observer échoue
    const fallback = setTimeout(() => els.forEach(reveal), 1500);

    return () => {
      clearTimeout(fallback);
      io.disconnect();
      document.body.classList.remove("reveal-on");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
