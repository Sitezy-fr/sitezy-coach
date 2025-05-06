import React from 'react';
import solo from '../premium-2-images/dx-indiv.jpg';
import duo from '../premium-2-images/dx-group.jpg';
import enligne from '../premium-2-images/dx-online.jpg';

const Services = () => {
  const services = [
    {
      id: 2,
      title: 'Coaching en Groupe',
      price: '25€',
      description: 'Programmes adaptés pour vous aider à retrouver votre forme physique.',
      background: duo,
    },
    {
      id: 1,
      title: 'Coaching Individuel',
      price: '50€',
      description: 'Suivi et séances adaptées à vos objectifs pour atteindre des résultats optimaux.',
      background: solo,
    },
    {
      id: 3,
      title: 'Programme en Ligne',
      price: '100€',
      description: 'Conseils sportifs personnalisés pour accompagner vos entraînements.',
      background: enligne,
    },
  ];

  // Fonction pour faire défiler jusqu'à la section "contact" avec condition pour le décalage
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = window.innerWidth > 1024 ? -90 : 0; // Décalage si la largeur est > 1024px
      window.scrollTo({
        top: contactSection.offsetTop + offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services">
      <p className="services__subtitle" data-aos="fade-up">Atteignez vos objectifs</p>
      <h2 className="services__title" data-aos="fade-up">Découvrez <span>mes Services</span></h2>

      <div className="services__cards">
        {services.map((service) => (
          <div 
            data-aos="fade-up"
            key={service.id} 
            className="service-card"
            style={{ backgroundImage: `url(${service.background})` }}
          >
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__price">{service.price}</p>
            <p className="service-card__description">{service.description}</p>
            <button 
              className="service-card__cta"
              onClick={scrollToContact} // Ajout de l'événement onClick
            >
              Réserver maintenant
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
