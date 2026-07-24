const ETAPES = [
  { n: "01", titre: "Vous réservez", texte: "Choisissez l'appareil, la réparation et un créneau en ligne, ou appelez-nous." },
  { n: "02", titre: "Diagnostic gratuit", texte: "On identifie la panne et on vous donne un devis clair, sans engagement." },
  { n: "03", titre: "Réparation express", texte: "La plupart des réparations sont faites en 30 minutes, avec pièces garanties." },
  { n: "04", titre: "Garantie 2 ans", texte: "Vous repartez avec un appareil comme neuf et une garantie jusqu'à 2 ans." },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <p className="section__eyebrow">Comment ça marche</p>
        <h2 className="section__title">Réparé en 4 étapes</h2>
        <div className="steps">
          {ETAPES.map((e) => (
            <div className="step" key={e.n}>
              <span className="step__n">{e.n}</span>
              <h3>{e.titre}</h3>
              <p>{e.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
