import React, { useState } from 'react';
import logo from '../premium-4-images/logo-fusion.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fonction pour faire défiler jusqu'à la section souhaitée
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop, // Ajustez cette valeur si nécessaire pour tenir compte de la hauteur de la navbar
        behavior: 'smooth',
      });
    }

    // Fermer le menu mobile si ouvert
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  // Fonction pour faire défiler jusqu'à la section Contact
  const scrollToContact = () => {
    scrollToSection('contact');
  };

  return (
    <nav id="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger button */}
      <div className={`navbar__hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>

      {/* Navbar links */}
      <ul className={`navbar__links ${menuOpen ? 'navbar__links--active' : ''}`}>
        <li><button onClick={() => scrollToSection('header')}>Accueil</button></li>
        <li><button onClick={() => scrollToSection('presentation')}>Présentation</button></li>
        <li><button onClick={() => scrollToSection('transformation')}>Transformation</button></li>
        <li><button onClick={() => scrollToSection('services')}>Services</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        <div className="menu__button">
        <button onClick={scrollToContact}>
          Prendre RDV &nbsp;<i><FontAwesomeIcon icon={faPaperPlane} bounce /></i>
        </button>
      </div>
      </ul>

      {/* RDV Button */}
      <div className="navbar__button">
        <button onClick={scrollToContact}>
          Prendre RDV &nbsp;<i><FontAwesomeIcon icon={faPaperPlane} bounce /></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
