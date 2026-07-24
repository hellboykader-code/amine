import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import TarifsPage from "./components/TarifsPage.jsx";
import MentionsLegales from "./components/MentionsLegales.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tarifs" element={<TarifsPage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
