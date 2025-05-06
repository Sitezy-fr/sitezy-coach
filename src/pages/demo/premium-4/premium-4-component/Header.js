import React, { useEffect, useState } from 'react';
import arm from '../premium-4-images/home-arm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024); // Détecter si on est sur mobile

  useEffect(() => {
    // Définir la hauteur du header et vérifier si l'on est sur mobile une seule fois au chargement
    const initialHeight = window.innerHeight;
    const isMobileDevice = window.innerWidth <= 1024;
    
    setHeaderHeight(initialHeight);
    setIsMobile(isMobileDevice);

    // Pas besoin de listener resize, on ne veut pas que ça change après
  }, []);

  // Fonction pour faire défiler vers la section "Présentation"
  const scrollToPresentation = () => {
    const presentationSection = document.getElementById('presentation'); // Assurez-vous que l'id de la section "Présentation" est bien "about"
    if (presentationSection) {
      window.scrollTo({
        top: presentationSection.offsetTop, // Ajustez pour tenir compte de la hauteur de la navbar si nécessaire
        behavior: 'smooth',
      });
    }
  };

  return (
    <header id='header' className="header" style={{ height: `${headerHeight}px` }}>
      <div className="header__content">
        <div className="header__left" data-aos="fade-right">
          <div className="header__tag">Coach Sportif</div>
          <h1 className="header__title">Débloquer votre plein potentiel</h1>
          <button className="header__cta" onClick={scrollToPresentation}>
            Découvrir &nbsp; <i><FontAwesomeIcon icon={faChevronDown} /></i>
          </button>
        </div>
        <div className="header__right" data-aos="fade-left">
          <img 
            src={arm} 
            alt="Fitness" 
            className="header__image" 
            style={{ height: isMobile ? 'auto' : `${headerHeight}px` }} // Appliquer la hauteur fixe uniquement si ce n'est pas mobile
          />
        </div>
      </div>
      <div className="header__overlay"></div>
    </header>
  );
};

export default Header;
