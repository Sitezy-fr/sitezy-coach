import React, { useState, useEffect } from 'react';
import logo from '../standard-1-images/m-logo.png';

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Position de défilement actuelle
    const windowHeight = window.innerHeight; // Hauteur de la fenêtre

    // Si le défilement dépasse 80% de la hauteur de la fenêtre, change l'état
    if (scrollPosition > 0.8 * windowHeight) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'écouteur d'événements pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 50; // Hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="navbar"
      className={`navbar ${navbarBackground ? 'navbar--scrolled' : ''}`}
    >
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <button onClick={() => scrollToSection('header')}>Accueil</button>
        </li>
        <li className="navbar__item">
          <button onClick={() => scrollToSection('services')}>Services</button>
        </li>
        <li className="navbar__item">
          <button onClick={() => scrollToSection('testimonials')}>Avis</button>
        </li>
        <li className="navbar__item">
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
