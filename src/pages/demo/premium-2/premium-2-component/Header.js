import React, { useState, useEffect } from 'react';
import img1 from '../premium-2-images/dx-new2.png';

const Header = () => {
  const [ctaVisible, setCtaVisible] = useState(false);

  // Fonction pour faire défiler jusqu'à la section "sante" avec condition pour le décalage
  const scrollToSante = () => {
    const santeSection = document.getElementById('sante');
    if (santeSection) {
      const offset = window.innerWidth > 1024 ? -90 : 0;
      window.scrollTo({
        top: santeSection.offsetTop + offset,
        behavior: 'smooth',
      });
    }
  };

  // Utiliser useEffect pour déclencher l'apparition du bouton CTA avec transition d'opacité
  useEffect(() => {
    const timer = setTimeout(() => {
      setCtaVisible(true);
    }, 1000); // 1000ms = 1s

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  return (
    <section id="header" data-aos="fade-up">
      <div className="header__content">
        <h2 className="header__title" data-aos="fade-right" data-aos-delay="500">
          Coaching <br />
          <span>Personnalisé</span>
        </h2>
        <p className="header__paragraph" data-aos="fade-right" data-aos-delay="500">
          Laissez moi vous aider à atteindre vos objectifs en vous accompagnant avec professionnalisme, enthousiasme et esprit d'équipe !
        </p>
        <button
          className={`header__cta ${ctaVisible ? 'visible' : ''}`} // Applique la classe "visible" lorsque ctaVisible est true
          onClick={scrollToSante}
        >
          Let's go !
        </button>
      </div>
      <div className="header__image">
        <img src={img1} alt="Header" />
      </div>
    </section>
  );
};

export default Header;
