import React, { useState, useEffect } from "react";
import logo from "../standard-5-images/mb-fit.png"; // Assurez-vous d'ajuster le chemin vers votre logo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Vérifie si 80% de la hauteur de la vue a été scrollé
    if (scrollPosition > viewportHeight * 0.8) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Ajuste la position pour compenser la hauteur de la navbar
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Nettoie l'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <ul className="navbar__list">
        <li className="navbar__item" onClick={() => scrollToSection("header")}>
          Accueil
        </li>
        <li className="navbar__item" onClick={() => scrollToSection("services")}>
          Services
        </li>
        <li className="navbar__item navbar__logo">
          <img src={logo} alt="Logo" />
        </li>
        <li className="navbar__item" onClick={() => scrollToSection("transformation")}>
          Avant/après
        </li>
        <li className="navbar__item" onClick={() => scrollToSection("contact")}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
