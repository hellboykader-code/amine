import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Pricing from "./Pricing.jsx";

export default function TarifsPage() {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // « Réserver » depuis la grille : mémorise le choix et retourne à l'accueil (section RDV)
  function handleReserver(marque, modele) {
    sessionStorage.setItem("prefill", JSON.stringify({ marque, modele }));
    sessionStorage.setItem("scrollTo", "rdv");
    navigate("/");
  }

  return (
    <>
      <Nav />
      <main>
        <Pricing onReserver={handleReserver} />
      </main>
      <Footer />
    </>
  );
}
