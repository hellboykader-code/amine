import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import Process from "./components/Process.jsx";
import About from "./components/About.jsx";
import Reviews from "./components/Reviews.jsx";
import Faq from "./components/Faq.jsx";
import Booking from "./components/Booking.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [prefill, setPrefill] = useState(null);

  function handleReserver(marque, modele) {
    setPrefill({ marque, modele, _t: Date.now() });
    document.getElementById("rdv")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Pricing onReserver={handleReserver} />
        <Process />
        <About />
        <Reviews />
        <Faq />
        <Booking prefill={prefill} />
      </main>
      <Footer />
    </>
  );
}
