import React, { useState } from 'react';
import logo from '../premium-1-images/logo.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // État pour ouvrir/fermer le menu en mobile

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Obtenir la position de la section
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            // Déterminer la hauteur de la navbar selon la largeur de l'écran
            const navbarHeight = window.innerWidth < 1024 ? 100 : 0;
            // Défilement vers la section en tenant compte de la hauteur de la navbar
            window.scrollTo({ 
                top: sectionPosition - navbarHeight, // Ajuste la position
                behavior: 'smooth'
            });
        }
        setIsOpen(false); // Ferme le menu après la navigation
    };

    const toggleMenu = () => setIsOpen(!isOpen); // Fonction pour ouvrir/fermer le menu

    return (
        <nav id="navbar">
            <div className="sidebar">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul className={`menu ${isOpen ? 'open' : ''}`}>
                    <li><a onClick={() => scrollToSection('header')}>Accueil</a></li>
                    <li><a onClick={() => scrollToSection('expertise-section')}>Compétences</a></li>
                    <li><a onClick={() => scrollToSection('services-section')}>Services</a></li>
                    <li><a onClick={() => scrollToSection('testimonials-carousel')}>Témoignages</a></li>
                    <li><a onClick={() => scrollToSection('contact-section')}>Contact</a></li>
                </ul>
            </div>
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </nav>
    );
};

export default Navbar;
