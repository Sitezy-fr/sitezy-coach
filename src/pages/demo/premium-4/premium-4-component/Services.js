import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // Importer l'icône de check

const Services = () => {
  // Fonction pour faire défiler jusqu'à la section Contact
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80, // Ajustez cette valeur pour tenir compte de la hauteur de la navbar
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id='services' className="services">
      <div className="services__header" data-aos="fade-up">
        <h2 className="services__title">Mes services</h2>
        <p className="services__subtitle">
        Tous mes services sont sans engagement, afin de vous laissez libre dans vos prises de décisions.
        </p>
      </div>

      <div className="services__cards">
        <div className="services__card" data-aos="fade-up">
          <h3 className="services__card-title">Coaching en Groupe</h3>
          <p className="services__card-price">25€</p>
          <ul className="services__card-features">
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Bilan gratuit</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Séance d'une heure</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Équipements de qualité</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Horaires flexibles</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Jusqu'à 4 personnes</li>
          </ul>
          <button className="services__card-cta" onClick={scrollToContact}>Réserver ce service</button>
        </div>

        <div className="services__card popular" data-aos="fade-up">
          <h3 className="services__card-title">Coaching Individuel</h3>
          <p className="services__card-price">50€</p>
          <ul className="services__card-features">
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Bilan gratuit</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Séance d'une heure</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Équipements de qualité</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Horaires flexibles</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Exercices personnalisés</li>
          </ul>
          <button className="services__card-cta" onClick={scrollToContact}>Réserver ce service</button>
        </div>

        <div className="services__card" data-aos="fade-up">
          <h3 className="services__card-title">Programme en Ligne</h3>
          <p className="services__card-price">100€</p>
          <ul className="services__card-features">
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Bilan gratuit</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Séance en autonomie</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Suivi hebdomadaire</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Horaires flexibles</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Programme personnalisé</li>
          </ul>
          <button className="services__card-cta" onClick={scrollToContact}>Réserver ce service</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
