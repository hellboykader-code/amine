import { Link } from "react-router-dom";
import { useSectionNav } from "../useSectionNav.js";

export default function Hero() {
  const go = useSectionNav();
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">Déplacements dans toute l'Île-de-France</p>
          <h1 className="hero__title">
            La réparation de votre téléphone,<br />
            <em>simple, rapide et moins chère.</em>
          </h1>
          <p className="hero__sub">
            MK Phone répare iPhone, Samsung, tablettes et PC partout en Île-de-France.
            Des tarifs <strong>30 à 40 € moins chers que la concurrence</strong>, et on se
            déplace chez vous.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary btn--lg" onClick={() => go("rdv")}>Prendre rendez-vous</button>
            <Link to="/tarifs" className="btn btn--ghost btn--lg">Voir les tarifs</Link>
          </div>
          <div className="hero__stats">
            <div><strong>30 min</strong><span>Réparation express</span></div>
            <div><strong>−30 à 40 €</strong><span>vs la concurrence</span></div>
            <div><strong>Île-de-France</strong><span>Déplacement à domicile</span></div>
          </div>
        </div>
        <div className="hero__media">
          <img src="./img/hero.jpg" alt="Technicien MK Phone réparant un smartphone" />
          <div className="hero__badge"><span className="dot" /> <span>On se déplace · <b>toute l'Île-de-France</b></span></div>
        </div>
      </div>
    </section>
  );
}
