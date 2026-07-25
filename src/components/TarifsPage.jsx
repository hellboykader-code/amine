import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Pricing from "./Pricing.jsx";
import Aurora from "./Aurora.jsx";
import ThreeBackground from "./ThreeBackground.jsx";
import { useScrollReveal } from "../useScrollReveal.js";

export default function TarifsPage() {
  const navigate = useNavigate();
  const [marque, setMarque] = useState(null);
  // Relance l'apparition quand on change de vue (grille de marques ↔ modèles)
  useScrollReveal([marque]);

  useEffect(() => { window.scrollTo(0, 0); }, [marque]);

  function handleReserver(m, modele) {
    sessionStorage.setItem("prefill", JSON.stringify({ marque: m, modele }));
    sessionStorage.setItem("scrollTo", "rdv");
    navigate("/");
  }
  function goDevis() {
    sessionStorage.setItem("scrollTo", "rdv");
    navigate("/");
  }

  return (
    <>
      <Aurora />
      <ThreeBackground />
      <Nav />
      <main>
        <Pricing marque={marque} setMarque={setMarque} onReserver={handleReserver} onDevis={goDevis} />
      </main>
      <Footer />
    </>
  );
}
