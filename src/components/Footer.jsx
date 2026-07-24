import { Link } from "react-router-dom";
import { CONTACT } from "../data.js";
import { useSectionNav } from "../useSectionNav.js";

export default function Footer() {
  const annee = new Date().getFullYear();
  const go = useSectionNav();
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div>
          <Link to="/" className="brand brand--footer"><span className="brand__mark">MK</span> Phone</Link>
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
          <p><Link to="/tarifs">Tarifs</Link></p>
          <p><button className="linklike" onClick={() => go("faq")}>FAQ</button></p>
          <p><button className="linklike" onClick={() => go("rdv")}>Rendez-vous</button></p>
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
