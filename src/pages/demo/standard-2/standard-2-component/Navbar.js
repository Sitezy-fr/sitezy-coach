import React, { useState, useEffect } from 'react';
import logo from '../standard-2-images/chloe-fit.png'; // Assurez-vous que le logo soit dans le bon dossier

const Navbar = () => {
    const [scrolled, setScrolled] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu

    const handleScroll = () => {
        const scrollY = window.scrollY; // Position actuelle de défilement
        const windowHeight = window.innerHeight; // Hauteur de la fenêtre

        // Vérifiez si 80% de la hauteur de la fenêtre a été défilée
        if (scrollY > windowHeight * 0.0) {
            setScrolled(true);
        } else {
            setScrolled(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'événement lors de la désinscription du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Fonction pour faire défiler vers la section correspondante
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        const navbarHeight = 75; // Hauteur de la navbar en pixels

        if (section) {
            const topPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight; // Ajuster la position
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
        setMenuOpen(false); // Fermer le menu après avoir cliqué sur un élément
    };

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className={`navbar-hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className={`line ${menuOpen ? 'line1' : ''}`}></div>
                <div className={`line ${menuOpen ? 'line2' : ''}`}></div>
                <div className={`line ${menuOpen ? 'line3' : ''}`}></div>
            </div>
            <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                <li onClick={() => scrollToSection('header')}>Accueil</li>
                <li onClick={() => scrollToSection('about')}>À propos</li>
                <li onClick={() => scrollToSection('services')}>Services</li>
                <li onClick={() => scrollToSection('testimonials')}>Témoignages</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
