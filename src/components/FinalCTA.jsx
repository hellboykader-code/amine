import { CONTACT } from "../data.js";
import { useSectionNav } from "../useSectionNav.js";

export default function FinalCTA() {
  const go = useSectionNav();
  return (
    <section className="section">
      <div className="container">
        <div className="finalcta">
          <p className="finalcta__eyebrow">Prêt à réparer ?</p>
          <h2 className="finalcta__title">Votre téléphone mérite mieux qu'un écran cassé.</h2>
          <p className="finalcta__sub">
            Réservez en ligne ou appelez-nous : diagnostic gratuit et réparation le jour même,
            partout en Île-de-France.
          </p>
          <div className="finalcta__actions">
            <button className="btn btn--white btn--lg" onClick={() => go("rdv")}>Prendre rendez-vous</button>
            <a className="btn btn--outline-white btn--lg" href={`tel:${CONTACT.telLink}`}>{CONTACT.tel}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
