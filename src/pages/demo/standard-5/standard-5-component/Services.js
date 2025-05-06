import React from "react";

const Services = () => {
  const serviceList = [
    {
      name: "Coaching en Groupe",
      price: "25€",
      description: "Participez à des séances d’entraînement en groupe pour rester motivé et atteindre vos objectifs.",
      cta: "Réserver ce service"
    },
    {
      name: "Coaching Individuel",
      price: "50€",
      description: "Obtenez des séances de coaching personnalisé pour atteindre vos objectifs de forme physique et bien-être.",
      cta: "Réserver ce service"
    },
    {
      name: "Programme en Ligne",
      price: "100€",
      description: "Des plans nutritionnels et sportifs adaptés pour vous aider à vous transformer à votre rythme.",
      cta: "Réserver ce service"
    }
  ];

  const handleCTAClick = () => {
    // Sélectionner la section "Contact"
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      // Calculer la position de la section en tenant compte du décalage de 80px
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="services">
      <div className="services__title">
        <div className="line"></div>
          <h2>Mes Services</h2>
        <div className="line"></div>
      </div>
      <div className="services__container">
        {serviceList.map((service, index) => (
          <div className="services__card" key={index}>
            <h3 className="services__name">{service.name}</h3>
            <p className="services__price">{service.price}</p>
            <p className="services__description">{service.description}</p>
            <button className="services__cta" onClick={handleCTAClick}>
              {service.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
