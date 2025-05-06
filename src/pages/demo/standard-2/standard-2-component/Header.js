import React from 'react';
import coachImage from '../standard-2-images/happy.jpg';

const Header = () => {
    // Fonction pour faire défiler vers la section correspondante
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        const navbarHeight = 75; // Hauteur de la navbar en pixels (à ajuster si nécessaire)

        if (section) {
            const topPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight; // Ajuster la position
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    };

    return (
        <header id='header' className="header">
            <div className="header-content">
                <div className='img__container'>
                    <div className="image-container">
                        <img src={coachImage} alt="Coach" className="header-image" />
                    </div>
                </div> 
                <div className="header-text">
                    <h1 className="header-title">Bienvenue&nbsp;!&nbsp;<span>👋🏻</span></h1>
                    <p className="header-subtitle">Je suis Chloé, je suis coach sportive et je vous aide à vous sentir mieux dans votre corps ✨</p>
                    <button className="header-btn" onClick={() => scrollToSection('about')}>En savoir plus</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
