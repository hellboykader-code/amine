import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Pricing from "./Pricing.jsx";
import Aurora from "./Aurora.jsx";
import { useScrollReveal } from "../useScrollReveal.js";

export default function TarifsPage() {
  const navigate = useNavigate();
  useScrollReveal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // « Réserver » depuis la grille : mémorise le choix et retourne à l'accueil (section RDV)
  function handleReserver(marque, modele) {
    sessionStorage.setItem("prefill", JSON.stringify({ marque, modele }));
    sessionStorage.setItem("scrollTo", "rdv");
    navigate("/");
  }

  // « Devis gratuit » : retour à l'accueil, section RDV
  function goDevis() {
    sessionStorage.setItem("scrollTo", "rdv");
    navigate("/");
  }

  return (
    <>
      <Aurora />
      <Nav />
      <main>
        <Pricing onReserver={handleReserver} onDevis={goDevis} />
      </main>
      <Footer />
    </>
  );
}
