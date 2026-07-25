import { CONTACT } from "../data.js";
import Icon from "../icons.jsx";

export default function BuySell() {
  return (
    <section className="section" id="vente">
      <div className="container">
        <p className="section__eyebrow">Vente &amp; rachat</p>
        <h2 className="section__title">On rachète et on vend des téléphones</h2>
        <p className="section__lead">
          Envie de changer de téléphone ou de vous séparer de l'ancien ? MK Phone rachète
          votre appareil et vous propose des smartphones reconditionnés, testés et garantis.
        </p>

        <div className="buysell">
          <article className="buysell__card buysell__card--buy">
            <span className="ic"><Icon name="prix" /></span>
            <h3>Nous rachetons votre téléphone</h3>
            <p>Fonctionnel ou en panne, tous modèles. Estimation gratuite et paiement immédiat.</p>
            <ul className="buysell__list">
              <li>Estimation gratuite en quelques minutes</li>
              <li>Paiement immédiat (espèces ou virement)</li>
              <li>Reprise même en cas d'écran cassé</li>
            </ul>
            <a className="btn btn--primary" href={`tel:${CONTACT.telLink}`}>Estimer mon téléphone</a>
          </article>

          <article className="buysell__card buysell__card--sell">
            <span className="ic"><Icon name="phone" /></span>
            <h3>Achetez un téléphone reconditionné</h3>
            <p>Des smartphones vérifiés, testés et garantis, à prix malins. iPhone, Samsung et plus.</p>
            <ul className="buysell__list">
              <li>Appareils testés et nettoyés</li>
              <li>Garantie incluse</li>
              <li>Prix bien plus bas que le neuf</li>
            </ul>
            <a className="btn btn--outline" href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Achat téléphone reconditionné")}`}>Voir les disponibilités</a>
          </article>
        </div>
      </div>
    </section>
  );
}
