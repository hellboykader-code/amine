import { useState } from "react";
import { Link } from "react-router-dom";
import { useSectionNav } from "../useSectionNav.js";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const go = useSectionNav();
  const click = (id) => { setOpen(false); go(id); };

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="brand"><span className="brand__mark">MK</span> Phone</Link>
        <nav className={`nav__links ${open ? "open" : ""}`}>
          <button className="nav__link" onClick={() => click("services")}>Services</button>
          <Link className="nav__link" to="/tarifs" onClick={() => setOpen(false)}>Tarifs</Link>
          <button className="nav__link" onClick={() => click("vente")}>Vente &amp; rachat</button>
          <button className="nav__link" onClick={() => click("faq")}>FAQ</button>
          <button className="nav__link" onClick={() => click("contact")}>Contact</button>
        </nav>
        <button className="btn btn--primary nav__cta" onClick={() => click("rdv")}>Prendre RDV</button>
        <button className="nav__burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>☰</button>
      </div>
    </header>
  );
}
