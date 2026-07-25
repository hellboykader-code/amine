import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import About from "./components/About.jsx";
import Reviews from "./components/Reviews.jsx";
import Faq from "./components/Faq.jsx";
import Booking from "./components/Booking.jsx";
import BuySell from "./components/BuySell.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import Aurora from "./components/Aurora.jsx";
import ThreeBackground from "./components/ThreeBackground.jsx";
import { useScrollReveal } from "./useScrollReveal.js";

function TarifsCTA() {
  return (
    <section className="section" id="tarifs-cta">
      <div className="container tarifs-cta">
        <div>
          <p className="section__eyebrow">Tarifs</p>
          <h2 className="section__title">Des prix clairs, 30 à 40 € moins chers</h2>
          <p className="section__lead" style={{ marginBottom: 0 }}>
            Choisissez votre marque (Apple, Samsung, Xiaomi, Huawei, Pixel, iPad) et découvrez
            le tarif de chaque modèle, pièce et main-d'œuvre comprises.
          </p>
        </div>
        <Link to="/tarifs" className="btn btn--primary btn--lg">Voir les tarifs →</Link>
      </div>
    </section>
  );
}

export default function App() {
  const [prefill, setPrefill] = useState(null);
  useScrollReveal();

  // Au chargement : appliquer un préremplissage / scroll demandé depuis une autre page
  useEffect(() => {
    const pf = sessionStorage.getItem("prefill");
    if (pf) {
      try { setPrefill({ ...JSON.parse(pf), _t: Date.now() }); } catch { /* ignore */ }
      sessionStorage.removeItem("prefill");
    }
    const target = sessionStorage.getItem("scrollTo");
    if (target) {
      sessionStorage.removeItem("scrollTo");
      setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }), 120);
    }
  }, []);

  return (
    <>
      <Aurora />
      <ThreeBackground />
      <Nav />
      <main>
        <Hero />
        <Services />
        <TarifsCTA />
        <Process />
        <BuySell />
        <About />
        <Reviews />
        <Faq />
        <Booking prefill={prefill} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
