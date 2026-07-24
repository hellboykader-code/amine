import { AVIS } from "../data.js";

export default function Reviews() {
  return (
    <section className="section" id="avis">
      <div className="container">
        <p className="section__eyebrow">Avis clients</p>
        <h2 className="section__title">Ils nous ont fait confiance</h2>
        <div className="cards cards--3">
          {AVIS.map((a) => (
            <article className="feature avis" key={a.nom}>
              <div className="avis__stars">{"★★★★★"}</div>
              <p className="avis__texte">« {a.texte} »</p>
              <div className="avis__auteur">
                <strong>{a.nom}</strong>
                <span>{a.ville}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
