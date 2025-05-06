import React, { useState } from 'react';
import logo from '../premium-2-images/dx-fit.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour gérer l'ouverture/fermeture du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fonction pour effectuer un défilement fluide avec ou sans offset selon la largeur d'écran
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      // Vérification de la largeur de l'écran
      const isWideScreen = window.innerWidth >= 1024;
      const navbarHeight = isWideScreen ? 90 : 0; // Offset de 90px pour les écrans larges, 0 sinon
      const elementPosition = targetSection.getBoundingClientRect().top; // Position de la section
      const offsetPosition = elementPosition - navbarHeight; // Déduction de la hauteur de la navbar si nécessaire

      // Défilement fluide en tenant compte de la hauteur de la navbar (ou non selon la largeur de l'écran)
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    // Fermer le menu après avoir cliqué sur un lien (utile pour le menu hamburger)
    setIsOpen(false);
  };

  return (
    <nav id="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Icône de menu hamburger */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />} {/* Icône hamburger ou X */}
      </div>

      {/* Menu : affiché ou caché en fonction de isOpen */}
      <ul className={`navbar-menu ${isOpen ? 'navbar-menu--open' : ''}`}>
        <li><a href="#header" onClick={(e) => handleScroll(e, '#header')}>Accueil</a></li>
        <li><a href="#sante" onClick={(e) => handleScroll(e, '#sante')}>Présentation</a></li>
        <li><a href="#services" onClick={(e) => handleScroll(e, '#services')}>Services</a></li>
        <li><a href="#reviews" onClick={(e) => handleScroll(e, '#reviews')}>Avis</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
