import { Link } from "react-router-dom";
import { CONTACT } from "../data.js";

export default function MentionsLegales() {
  const annee = new Date().getFullYear();
  return (
    <>
      <header className="nav">
        <div className="container nav__inner">
          <Link to="/" className="brand"><span className="brand__mark">MK</span> Phone</Link>
          <Link to="/" className="btn btn--ghost">← Retour au site</Link>
        </div>
      </header>

      <main className="section">
        <div className="container legal">
          <h1 className="section__title">Mentions légales</h1>
          <p className="legal__note">Modèle à compléter avec vos informations réelles (SIRET, adresse, hébergeur…).</p>

          <h2>Éditeur du site</h2>
          <p>
            MK Phone — Réparation de téléphone<br />
            Téléphone : {CONTACT.tel}<br />
            E-mail : {CONTACT.email}<br />
            Zone d'intervention : Île-de-France<br />
            SIRET : <em>à compléter</em> — Adresse : <em>à compléter</em>
          </p>

          <h2>Responsable de la publication</h2>
          <p>MK Phone.</p>

          <h2>Hébergement</h2>
          <p>Site hébergé par <em>à compléter</em> (ex. Netlify, Vercel, GitHub Pages, OVH).</p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus de ce site (textes, images, mise en page) est la propriété
            de MK Phone, sauf mention contraire. Toute reproduction sans autorisation est interdite.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les informations transmises via le formulaire de rendez-vous (nom, téléphone, e-mail)
            sont utilisées uniquement pour traiter votre demande et ne sont ni vendues ni cédées.
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression
            de vos données en écrivant à {CONTACT.email}.
          </p>

          <h2>Garantie</h2>
          <p>
            Les batteries sont garanties 6 mois. Les écrans sont garantis de 3 mois à 1 an selon
            la gamme choisie (compatible ou premium). La garantie ne couvre pas les dommages
            ultérieurs (chocs, oxydation, casse).
          </p>
        </div>
      </main>

      <footer className="footer">
        <div className="container footer__bottom">
          <span>© {annee} MK Phone. Tous droits réservés.</span>
          <span><Link to="/">Accueil</Link></span>
        </div>
      </footer>
    </>
  );
}
