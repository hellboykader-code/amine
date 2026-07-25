import { useEffect, useMemo, useState } from "react";
import { CATALOGUE, CONTACT } from "../data.js";
import { RACHAT_BASE, ETATS, STOCKAGES } from "../rachat.js";

const MARQUES = [...new Set(CATALOGUE.map((m) => m.marque))];
const round5 = (n) => Math.round(n / 5) * 5;

export default function RachatEstimator() {
  const [marque, setMarque] = useState(MARQUES[0]);
  const [modele, setModele] = useState("");
  const [stockage, setStockage] = useState("128 Go");
  const [etat, setEtat] = useState("bon");

  const modeles = useMemo(
    () => CATALOGUE.filter((m) => m.marque === marque && RACHAT_BASE[m.modele] != null),
    [marque]
  );

  useEffect(() => {
    if (!modeles.find((m) => m.modele === modele)) setModele(modeles[0]?.modele || "");
  }, [modeles]); // eslint-disable-line

  const base = RACHAT_BASE[modele];
  const etatObj = ETATS.find((e) => e.cle === etat);
  const stockObj = STOCKAGES.find((s) => s.go === stockage);
  const prix = base != null && etatObj && stockObj ? round5(base * etatObj.coef * stockObj.coef) : null;

  const sujet = `Reprise ${marque} ${modele}`;
  const corps =
    `Bonjour, je souhaite vendre mon appareil :\n` +
    `- Appareil : ${marque} ${modele}\n- Stockage : ${stockage}\n- État : ${etatObj?.nom}\n` +
    `- Estimation en ligne : ${prix ?? "—"} €\n\nMerci de me recontacter.`;
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;

  return (
    <div className="estim">
      <div className="estim__form">
        <div className="estim__field">
          <label>1. Marque</label>
          <select value={marque} onChange={(e) => setMarque(e.target.value)}>
            {MARQUES.map((m) => <option key={m}>{m}</option>)}
          </select>
        </div>
        <div className="estim__field">
          <label>2. Modèle</label>
          <select value={modele} onChange={(e) => setModele(e.target.value)}>
            {modeles.map((m) => <option key={m.modele}>{m.modele}</option>)}
          </select>
        </div>
        <div className="estim__field">
          <label>3. Stockage</label>
          <select value={stockage} onChange={(e) => setStockage(e.target.value)}>
            {STOCKAGES.map((s) => <option key={s.go}>{s.go}</option>)}
          </select>
        </div>
        <div className="estim__field estim__field--full">
          <label>4. État de l'appareil</label>
          <div className="estim__etats">
            {ETATS.map((e) => (
              <button
                key={e.cle}
                type="button"
                className={`estim__etat ${etat === e.cle ? "is-active" : ""}`}
                onClick={() => setEtat(e.cle)}
              >
                <strong>{e.nom}</strong>
                <span>{e.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <aside className="estim__result">
        <p className="estim__result-label">Estimation de reprise</p>
        <p className="estim__price">{prix != null ? `${prix} €` : "—"}</p>
        <p className="estim__note">
          {marque} {modele} · {stockage} · {etatObj?.nom}
        </p>
        <a className="btn btn--primary btn--block" href={mailto}>Vendre mon téléphone</a>
        <a className="btn btn--outline btn--block" href={`tel:${CONTACT.telLink}`}>Ou appelez le {CONTACT.tel}</a>
        <p className="estim__small">
          Prix indicatif, confirmé après vérification en atelier. Paiement immédiat, reprise même
          écran cassé.
        </p>
      </aside>
    </div>
  );
}
