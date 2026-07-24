import { CATALOGUE, TYPES_REPARATION } from "../data.js";
import Icon from "../icons.jsx";

const GALLERY = [
  ["./img/reparation-ecran.jpg", "Remplacement d'écran"],
  ["./img/reparation-batterie.jpg", "Changement de batterie"],
  ["./img/atelier.jpg", "Notre atelier"],
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <p className="section__eyebrow">Nos services</p>
        <h2 className="section__title">Toutes les réparations, un seul atelier</h2>

        <div className="cards">
          {TYPES_REPARATION.map((t) => {
            const prixMin = Math.min(
              ...CATALOGUE.map((m) => m[t.cle]).filter((p) => p != null)
            );
            return (
              <article className="service" key={t.cle}>
                <span className="ic"><Icon name={t.cle} /></span>
                <h3>{t.nom}</h3>
                <p>Remplacement et réparation {t.nom.toLowerCase()} sur iPhone, Samsung et autres marques.</p>
                <div className="service__from">Dès {prixMin} €</div>
              </article>
            );
          })}
        </div>

        <div className="gallery">
          {GALLERY.map(([src, cap]) => (
            <figure key={src}>
              <img src={src} alt={cap} loading="lazy" />
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
