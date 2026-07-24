import { useNavigate, useLocation } from "react-router-dom";

// Navigue vers une section : scroll direct si on est sur l'accueil,
// sinon retourne à l'accueil puis scrolle (via sessionStorage lu par App).
export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();
  return (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTo", id);
      navigate("/");
    }
  };
}
