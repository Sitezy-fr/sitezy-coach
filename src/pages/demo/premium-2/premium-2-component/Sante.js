import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faClipboardList, faSchoolCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Sante = () => {
  
  // Fonction pour faire défiler jusqu'à la section "services" avec condition pour le décalage
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services'); // Assurez-vous que la section "services" a cet ID
    if (servicesSection) {
      const offset = window.innerWidth > 1024 ? -90 : 0; // Décalage si la largeur est > 1024px
      window.scrollTo({
        top: servicesSection.offsetTop + offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id='sante'>
      <div className="sante__header" data-aos="fade-up">
        <p className="sante__subtitle">Améliorez votre santé</p>
        <h2 className="sante__title">Nous y arriverons <span>ensemble</span></h2>
      </div>

      <div className="sante__features">
        <div className="feature" data-aos="zoom-in">
          <FontAwesomeIcon icon={faClock} className="feature__icon" />
          <h3 className="feature__title">HORAIRES FLÉXIBLES</h3>
          <p className="feature__description">
            Je m’adapte à votre emploi du temps pour proposer le créneau idéal.
          </p>
        </div>

        <div className="feature" data-aos="zoom-in">
          <FontAwesomeIcon icon={faClipboardList} className="feature__icon" />
          <h3 className="feature__title">Suivi & Coaching Perso</h3>
          <p className="feature__description">
            Je réalise un suivi et des séances de coaching personnalisées afin d’obtenir les meilleurs résultats.
          </p>
        </div>

        <div className="feature" data-aos="zoom-in">
          <FontAwesomeIcon icon={faSchoolCircleCheck} className="feature__icon"/>
          <h3 className="feature__title">Diplomé & Polyvalent</h3>
          <p className="feature__description">
            Je vous accompagne dans vos différents objectifs: perte de poids, prise de muscle, remise en forme et préparation physique.
          </p>
        </div>
      </div>

      <div className="sante__cta" data-aos="fade-up">
        <button className="cta-button" onClick={scrollToServices}>Découvrir mes services</button>
      </div>
    </section>
  );
};

export default Sante;
