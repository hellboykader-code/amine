export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">Île-de-France · Garantie 2 ans</p>
          <h1 className="hero__title">
            La réparation de votre téléphone,<br />
            <em>simple et rapide.</em>
          </h1>
          <p className="hero__sub">
            MK Phone répare iPhone, Samsung, tablettes et PC partout en Île-de-France.
            Écran, batterie, connecteur de charge : des pièces garanties, un tarif clair.
          </p>
          <div className="hero__actions">
            <a href="#rdv" className="btn btn--primary btn--lg">Prendre rendez-vous</a>
            <a href="#tarifs" className="btn btn--ghost btn--lg">Voir les tarifs</a>
          </div>
          <div className="hero__stats">
            <div><strong>30 min</strong><span>Réparation express</span></div>
            <div><strong>2 ans</strong><span>Garantie pièces</span></div>
            <div><strong>-15 €</strong><span>Sur tous les tarifs</span></div>
          </div>
        </div>
        <div className="hero__media">
          <img src="./img/hero.jpg" alt="Technicien MK Phone réparant un smartphone" />
          <div className="hero__badge"><span className="dot" /> <span>Ouvert · <b>Île-de-France</b></span></div>
        </div>
      </div>
    </section>
  );
}
