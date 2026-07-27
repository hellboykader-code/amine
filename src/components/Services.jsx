import { CATALOGUE, TYPES_REPARATION } from "../data.js";
import { SERVICE_IMAGES } from "../serviceImages.js";
import Icon from "../icons.jsx";

export default function Services({ onChoisir }) {
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
            const img = SERVICE_IMAGES[t.cle];
            const choisir = () => onChoisir?.(t.cle);
            return (
              <article
                className={`service service--clic${img ? " service--photo" : ""}`}
                key={t.cle}
                style={img ? { backgroundImage: `url(${img})` } : undefined}
                role="button"
                tabIndex={0}
                aria-label={`Prendre rendez-vous pour une réparation ${t.nom}`}
                onClick={choisir}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choisir(); } }}
              >
                <span className="ic"><Icon name={t.cle} /></span>
                <h3>{t.nom}</h3>
                <p>Remplacement et réparation {t.nom.toLowerCase()} sur iPhone, Samsung et autres marques.</p>
                <div className="service__from">Dès {prixMin} €</div>
                <span className="service__cta">Prendre rendez-vous →</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
