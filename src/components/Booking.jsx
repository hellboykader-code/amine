import { useEffect, useMemo, useRef, useState } from "react";
import { CATALOGUE, TYPES_REPARATION, REMISE, CONTACT, FORMSPREE_URL } from "../data.js";

const MARQUES = [...new Set(CATALOGUE.map((m) => m.marque))];
const CRENEAUX = [
  "09:00 – 10:00", "10:00 – 11:00", "11:00 – 12:00",
  "14:00 – 15:00", "15:00 – 16:00", "16:00 – 17:00", "17:00 – 18:00",
];

export default function Booking({ prefill }) {
  const [marque, setMarque] = useState(MARQUES[0]);
  const [modele, setModele] = useState("");
  const [reparation, setReparation] = useState("ecran");
  const [envoi, setEnvoi] = useState(false);
  const [confirm, setConfirm] = useState(null); // { type: "ok"|"error", html }
  const formRef = useRef(null);
  const today = new Date().toISOString().split("T")[0];

  const modeles = useMemo(() => CATALOGUE.filter((m) => m.marque === marque), [marque]);
  const modeleData = useMemo(() => CATALOGUE.find((m) => m.modele === modele), [modele]);

  // Garder un modèle valide quand la marque change
  useEffect(() => {
    if (!modeles.find((m) => m.modele === modele)) {
      setModele(modeles[0]?.modele || "");
    }
  }, [modeles]); // eslint-disable-line

  // Préremplissage depuis le bouton « Réserver »
  useEffect(() => {
    if (prefill?.marque) {
      setMarque(prefill.marque);
      setModele(prefill.modele);
    }
  }, [prefill]);

  const prixRep = modeleData ? modeleData[reparation] : null;
  const repNom = TYPES_REPARATION.find((t) => t.cle === reparation)?.nom || "";

  const estimation = prixRep != null
    ? <>Estimation : <strong>{prixRep} €</strong> <span className="muted">(remise de {REMISE} € déjà appliquée · devis confirmé en atelier)</span></>
    : <>Cette réparation est établie <strong>sur devis gratuit</strong>.</>;

  async function submit(e) {
    e.preventDefault();
    const f = e.target;
    const data = Object.fromEntries(new FormData(f));
    if (!data.nom || !data.tel || !modele || !data.date || !data.creneau) {
      setConfirm({ type: "error", html: "Merci de remplir tous les champs obligatoires (*)." });
      return;
    }
    const prenom = data.nom.split(" ")[0];
    const prix = prixRep != null ? `${prixRep} €` : "sur devis";
    const sujet = `Demande de RDV — ${marque} ${modele}`;
    const corps =
      `Nom: ${data.nom}\nTéléphone: ${data.tel}\nE-mail: ${data.email || "—"}\n` +
      `Appareil: ${marque} ${modele}\nRéparation: ${repNom} (${prix})\n` +
      `Date: ${data.date} — Créneau: ${data.creneau}\nMessage: ${data.message || "—"}`;
    const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;

    const succes = () => {
      setConfirm({
        type: "ok",
        html: `✅ Merci ${prenom} ! Votre demande pour la réparation « ${repNom} » de votre ${marque} ${modele} le ${data.date} (${data.creneau}) est bien enregistrée. Nous vous confirmons rapidement par téléphone.`,
      });
      f.reset();
    };

    if (FORMSPREE_URL) {
      setEnvoi(true);
      try {
        const rep = await fetch(FORMSPREE_URL, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(f),
        });
        if (!rep.ok) throw new Error("échec");
        succes();
      } catch {
        setConfirm({ type: "error", mailto, html: `Une erreur est survenue lors de l'envoi. Joignez-nous au ${CONTACT.tel} ou par e-mail.` });
      } finally {
        setEnvoi(false);
      }
      return;
    }
    setConfirm({
      type: "ok", mailto,
      html: `✅ Merci ${prenom} ! Votre demande pour « ${repNom} » (${marque} ${modele}, le ${data.date} — ${data.creneau}) est enregistrée. Nous vous confirmons par téléphone.`,
    });
    f.reset();
  }

  return (
    <section className="section" id="rdv">
      <div className="container rdv">
        <div className="rdv__intro">
          <p className="section__eyebrow">Rendez-vous</p>
          <h2 className="section__title">Réservez votre créneau</h2>
          <p className="section__lead">
            Choisissez votre appareil, la réparation et un créneau. Nous vous confirmons par
            téléphone. C'est gratuit et sans engagement, partout en Île-de-France.
          </p>
          <ul className="rdv__points">
            <li>Confirmation rapide par téléphone</li>
            <li>Devis clair avant toute intervention</li>
            <li>Aucun frais si vous ne réparez pas</li>
          </ul>
        </div>

        <form className="rdv__form" ref={formRef} onSubmit={submit} noValidate>
          <div className="field">
            <label htmlFor="nom">Nom complet *</label>
            <input id="nom" name="nom" type="text" required />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="tel">Téléphone *</label>
              <input id="tel" name="tel" type="tel" placeholder="06 12 34 56 78" required />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" placeholder="vous@exemple.fr" />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="marque">Marque *</label>
              <select id="marque" name="marque" value={marque} onChange={(e) => setMarque(e.target.value)}>
                {MARQUES.map((m) => <option key={m}>{m}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="modele">Modèle *</label>
              <select id="modele" name="modele" value={modele} onChange={(e) => setModele(e.target.value)}>
                {modeles.map((m) => <option key={m.modele}>{m.modele}</option>)}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="reparation">Réparation *</label>
            <select id="reparation" name="reparation" value={reparation} onChange={(e) => setReparation(e.target.value)}>
              {TYPES_REPARATION.map((t) => {
                const p = modeleData ? modeleData[t.cle] : null;
                return <option key={t.cle} value={t.cle}>{t.nom}{p == null ? " — sur devis" : ` — ${p} €`}</option>;
              })}
            </select>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="date">Date souhaitée *</label>
              <input id="date" name="date" type="date" min={today} required />
            </div>
            <div className="field">
              <label htmlFor="creneau">Créneau *</label>
              <select id="creneau" name="creneau" required defaultValue="">
                <option value="">—</option>
                {CRENEAUX.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Message (facultatif)</label>
            <textarea id="message" name="message" rows="3" placeholder="Décrivez la panne, votre ville…" />
          </div>

          <div className="rdv__estimation">{estimation}</div>

          <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={envoi}>
            {envoi ? "Envoi en cours…" : "Confirmer le rendez-vous"}
          </button>

          {confirm && (
            <p className={`rdv__confirm ${confirm.type === "error" ? "error" : ""}`}>
              {confirm.html}{" "}
              {confirm.mailto && <a href={confirm.mailto}>Envoyer aussi par e-mail →</a>}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
