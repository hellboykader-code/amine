export default function About() {
  return (
    <section className="section section--alt" id="apropos">
      <div className="container apropos">
        <div className="apropos__media">
          <img src="./img/atelier.jpg" alt="Atelier MK Phone" loading="lazy" />
        </div>
        <div>
          <p className="section__eyebrow">À propos</p>
          <h2 className="section__title">MK Phone, votre expert de proximité</h2>
          <p className="section__lead">
            Chez MK Phone, on répare votre téléphone avec soin, rapidement et à prix juste.
            Passionnés de tech, nous intervenons dans toute l'Île-de-France : en atelier,
            à domicile ou par correspondance. Chaque réparation est testée et garantie 2 ans.
          </p>
          <div className="apropos__stats">
            <div><strong>+5 000</strong><span>Appareils réparés</span></div>
            <div><strong>4,9/5</strong><span>Avis clients</span></div>
            <div><strong>6j/7</strong><span>Disponibles</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
