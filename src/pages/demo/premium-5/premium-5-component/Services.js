import React from 'react';
import group from '../premium-5-images/insta-1.jpg';
import indiv from '../premium-5-images/insta-2.jpg';
import ligne from '../premium-5-images/insta-3.jpg';

const Services = () => {
  // Fonction pour faire défiler vers la section contact
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 75; // Ajuster pour la navbar
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id='services' className="services">
      <div className="services__header">
        <h2 className="services__subtitle" data-aos="fade-up">Mes Services</h2>
        <h1 className="services__title" data-aos="fade-up">Des Programmes pour Tous</h1>
      </div>

      <div className="services__cards">
        <div className="service-card" data-aos="fade-up">
          <h3 className="service-card__title">Coaching en Groupe</h3>
          <img src={group} alt="Coaching en Groupe" className="service-card__image" />
          <p className="service-card__price">25€</p>
          <p className="service-card__description">
            Des séances de groupe dynamiques pour s'entraider et se motiver à plusieurs. Les exercices sont variés et s'adaptent à votre niveau, que vous soyez débutant, intermédiaire ou avancé.
          </p>
          <button className="service-card__button" onClick={scrollToContact}>Réserver maintenant</button>
        </div>

        <div className="service-card" data-aos="fade-up">
          <h3 className="service-card__title">Coaching Individuel</h3>
          <img src={indiv} alt="Coaching Individuel" className="service-card__image" />
          <p className="service-card__price">50€</p>
          <p className="service-card__description">
            Des séances 100% personnalisées qui s'adaptent à vos besoins et à vos contraintes. Ces séances comprennent également un suivi personnalisé d'une séance à l'autre.
          </p>
          <button className="service-card__button" onClick={scrollToContact}>Réserver maintenant</button>
        </div>

        <div className="service-card" data-aos="fade-up">
          <h3 className="service-card__title">Programme en Ligne</h3>
          <img src={ligne} alt="Programme en Ligne" className="service-card__image" />
          <p className="service-card__price">100€</p>
          <p className="service-card__description">
            Un plan nutritionnel et sportif structuré et créé sur mesure selon vos caractéristiques pour atteindre vos objectifs en autonomie. Tout est 100% personnalisé.
          </p>
          <button className="service-card__button" onClick={scrollToContact}>Réserver maintenant</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
