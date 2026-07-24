import { Link } from "react-router-dom";
import { CONTACT } from "../data.js";

export default function Footer() {
  const annee = new Date().getFullYear();
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div>
          <a href="#top" className="brand brand--footer"><span className="brand__mark">MK</span> Phone</a>
          <p className="footer__desc">Réparation de smartphones, tablettes et PC en Île-de-France. Express, garantie 2 ans.</p>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <p><a href={`tel:${CONTACT.telLink}`}>{CONTACT.tel}</a></p>
          <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
        </div>
        <div className="footer__col">
          <h4>Zone & horaires</h4>
          <p>{CONTACT.zone}</p>
          <p>Lun – Sam : 9h00 – 19h00</p>
        </div>
        <div className="footer__col">
          <h4>Liens</h4>
          <p><a href="#tarifs">Tarifs</a></p>
          <p><a href="#faq">FAQ</a></p>
          <p><a href="#rdv">Rendez-vous</a></p>
          <p><Link to="/mentions-legales">Mentions légales</Link></p>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {annee} MK Phone. Tous droits réservés.</span>
        <span>Réparation express · Garantie 2 ans</span>
      </div>
    </footer>
  );
}
