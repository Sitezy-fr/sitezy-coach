import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour gérer le défilement vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Fonction pour montrer ou cacher le bouton selon la position du scroll
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'show' : ''}`}>
      <div onClick={scrollToTop} className="scroll-button">
        <i><FontAwesomeIcon icon={faAnglesUp} /></i>
      </div>
    </div>
  );
};

export default ScrollToTop;
