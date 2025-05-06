import React, { useState } from 'react';
import logo from '../images/sitezy-logo-shadow.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'ouverture du menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Fonction pour faire défiler jusqu'à une section en tenant compte de la hauteur de la navbar
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId); // Trouver la section par ID
        if (section) {
            const navbarHeight = 20; // Hauteur de la navbar
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Position de la section par rapport à la page
            const offsetPosition = sectionPosition - navbarHeight; // Position ajustée pour inclure le décalage

            // Défilement de façon douce
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
        setIsOpen(false); // Fermer le menu après le clic
    };

    return (
        <nav className={`navbar ${isOpen ? 'navbar--open' : ''}`}>
            <div className="navbar__container">
                <div className="navbar__logo">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        onClick={() => scrollToSection('header')} // Ajout de l'événement de clic
                        style={{ cursor: 'pointer' }} // Optionnel : Ajout d'un pointeur pour indiquer que c'est cliquable
                    />
                </div>
                <button className={`navbar__toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="navbar__dots">
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                    </div>
                </button>
                <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
                    <li><button onClick={() => scrollToSection('header')}>Accueil</button></li>
                    <li><button onClick={() => scrollToSection('design')}>Designs</button></li>
                    <li><button onClick={() => scrollToSection('pricing')}>Tarifs</button></li>
                    <li><button onClick={() => scrollToSection('testimonials')}>Avis</button></li>
                    <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                    <div className="navbar__cta">
                        <button onClick={() => scrollToSection('design')} className="cta-button">
                            Réserver&nbsp;votre&nbsp;site
                        </button>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
