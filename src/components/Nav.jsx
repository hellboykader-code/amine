import { useState } from "react";

const LINKS = [
  ["#services", "Services"],
  ["#tarifs", "Tarifs"],
  ["#avis", "Avis"],
  ["#faq", "FAQ"],
  ["#contact", "Contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="brand"><span className="brand__mark">MK</span> Phone</a>
        <nav className={`nav__links ${open ? "open" : ""}`}>
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <a href="#rdv" className="btn btn--primary nav__cta">Prendre RDV</a>
        <button className="nav__burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>☰</button>
      </div>
    </header>
  );
}
