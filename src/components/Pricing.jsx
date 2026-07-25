import { useMemo, useState } from "react";
import { CATALOGUE, TYPES_REPARATION, GARANTIE } from "../data.js";

const MARQUES = [...new Set(CATALOGUE.map((m) => m.marque))];

// Visuel par marque (couleur du badge)
const MARQUE_STYLE = {
  Apple: { c: "#1d1d1f", abbr: "🍎" },
  Samsung: { c: "#1428a0", abbr: "SA" },
  Xiaomi: { c: "#ff6900", abbr: "MI" },
  Huawei: { c: "#cf0a2c", abbr: "HW" },
  Google: { c: "#4285f4", abbr: "G" },
  iPad: { c: "#555555", abbr: "iP" },
};
const abbr = (m) => MARQUE_STYLE[m]?.abbr ?? m.slice(0, 2).toUpperCase();
const countModeles = (m) => CATALOGUE.filter((x) => x.marque === m).length;

export default function Pricing({ onReserver, onDevis }) {
  const [marque, setMarque] = useState(null);
  const [recherche, setRecherche] = useState("");

  const modeles = useMemo(() => {
    if (!marque) return [];
    const q = recherche.trim().toLowerCase();
    return CATALOGUE.filter(
      (m) => m.marque === marque && (q === "" || m.modele.toLowerCase().includes(q))
    );
  }, [marque, recherche]);

  return (
    <section className="section section--alt" id="tarifs">
      <div className="container">
        <p className="section__eyebrow">Tarifs</p>
        <h2 className="section__title">
          {marque ? `Réparations ${marque}` : "Choisissez votre marque"}
        </h2>

        {!marque && (
          <>
            <p className="section__lead">
              Sélectionnez la marque de votre appareil pour voir le tarif de chaque modèle.
              Des prix <strong>30 à 40 € moins chers que la concurrence</strong>.
            </p>
            <div className="brands">
              {MARQUES.map((m) => (
                <button
                  key={m}
                  className="brand-card"
                  onClick={() => { setRecherche(""); setMarque(m); }}
                  style={{ "--bc": MARQUE_STYLE[m]?.c || "#2563eb" }}
                >
                  <span className="brand-card__logo">{abbr(m)}</span>
                  <span className="brand-card__name">{m}</span>
                  <span className="brand-card__count">{countModeles(m)} modèles</span>
                  <span className="brand-card__go">Voir les modèles →</span>
                </button>
              ))}
            </div>
          </>
        )}

        {marque && (
          <>
            <div className="tarifs__bar">
              <button className="btn btn--ghost" onClick={() => setMarque(null)}>← Toutes les marques</button>
              <input
                type="search"
                placeholder={`Rechercher un modèle ${marque}…`}
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
              />
            </div>

            <div className="table__wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Modèle</th>
                    {TYPES_REPARATION.map((t) => <th key={t.cle}>{t.nom}</th>)}
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {modeles.length === 0 ? (
                    <tr><td className="na" colSpan={TYPES_REPARATION.length + 2}>Aucun modèle trouvé.</td></tr>
                  ) : (
                    modeles.map((m) => (
                      <tr key={m.modele}>
                        <td>{m.modele}</td>
                        {TYPES_REPARATION.map((t) => (
                          <td key={t.cle} className={m[t.cle] == null ? "na" : "prix"}>
                            {m[t.cle] == null ? "—" : `${m[t.cle]} €`}
                          </td>
                        ))}
                        <td>
                          <button className="table__reserver" onClick={() => onReserver(m.marque, m.modele)}>
                            Réserver
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <p className="tarifs__note">🛡️ {GARANTIE}.</p>
            <p className="tarifs__note">
              Modèle non listé ou réparation spécifique (carte mère, haut-parleur, micro…) ?{" "}
              <button className="linklike linklike--accent" onClick={onDevis}>Demandez un devis gratuit</button>.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
