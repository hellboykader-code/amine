import { useMemo, useState } from "react";
import { CATALOGUE, TYPES_REPARATION } from "../data.js";
import Icon from "../icons.jsx";

const MARQUES = [...new Set(CATALOGUE.map((m) => m.marque))];

export default function Pricing({ onReserver }) {
  const [marque, setMarque] = useState("Toutes");
  const [recherche, setRecherche] = useState("");

  const lignes = useMemo(() => {
    const q = recherche.trim().toLowerCase();
    return CATALOGUE.filter(
      (m) =>
        (marque === "Toutes" || m.marque === marque) &&
        (q === "" || m.modele.toLowerCase().includes(q))
    );
  }, [marque, recherche]);

  return (
    <section className="section section--alt" id="tarifs">
      <div className="container">
        <p className="section__eyebrow">Tarifs</p>
        <h2 className="section__title">Grille de prix par modèle</h2>
        <p className="section__lead">
          Prix TTC, pièce et main-d'œuvre comprises. <strong>Remise de 15 € déjà déduite</strong> sur
          chaque tarif. Cliquez sur « Réserver » pour préremplir votre rendez-vous.
        </p>

        <div className="tarifs__filtres">
          <label htmlFor="filtreMarque">Marque</label>
          <select id="filtreMarque" value={marque} onChange={(e) => setMarque(e.target.value)}>
            <option>Toutes</option>
            {MARQUES.map((m) => <option key={m}>{m}</option>)}
          </select>
          <span className="tarifs__search">
            <Icon name="search" />
            <input
              type="search"
              placeholder="Rechercher un modèle…"
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
            />
          </span>
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
              {lignes.length === 0 ? (
                <tr><td className="na" colSpan={TYPES_REPARATION.length + 2}>Aucun modèle trouvé.</td></tr>
              ) : (
                lignes.map((m) => (
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
        <p className="tarifs__note">
          Modèle non listé ou réparation spécifique (carte mère, haut-parleur, micro…) ?{" "}
          <a href="#rdv">Demandez un devis gratuit</a>.
        </p>
      </div>
    </section>
  );
}
