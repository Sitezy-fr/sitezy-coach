import React from 'react';

const servicesData = [
  {
    name: 'Coaching en groupe',
    price: '25€',
    description: 'Participez à des séances d’entraînement en groupe pour rester motivé et atteindre vos objectifs.',
    cta: 'Réserver ce service',
  },
  {
    name: 'Coaching Individuel',
    price: '50€',
    description: 'Obtenez des séances de coaching personnalisé pour atteindre vos objectifs de forme physique et bien-être.',
    cta: 'Réserver ce service',
  },
  {
    name: 'Programme en Ligne',
    price: '100€',
    description: 'Des plans nutritionnels et sportifs adaptés pour vous aider à vous transformer à votre rythme.',
    cta: 'Réserver ce service',
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 50; // Hauteur de la navbar, si elle est fixe
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id='services' className="services">
      <h2 className="services__title">Mes Services</h2>
      <div className="services__cards">
        {servicesData.map((service, index) => (
          <div className="services__card" key={index}>
            <h3 className="services__card-title">{service.name}</h3>
            <p className="services__card-price">{service.price}</p>
            <p className="services__card-description">{service.description}</p>
            <button 
              className="services__card-cta" 
              onClick={scrollToContact}
            >
              {service.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
