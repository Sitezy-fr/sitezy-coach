import React from "react";
import insta1 from '../premium-1-images/insta-1.jpg';
import insta2 from '../premium-1-images/insta-2.jpg';
import insta3 from '../premium-1-images/insta-3.jpg';
import AOS from 'aos'; // Assurez-vous d'importer AOS si nécessaire

const servicesData = [
  {
    title: "Séance en Groupe",
    image: insta1,
    description: "Des séances de groupe dynamiques pour s'entraider et se motiver.",
    price: "25€"
  },
  {
    title: "Séance Individuelle",
    image: insta3,
    description: "Des séances adaptées à vos besoins avec un suivi personnalisé.",
    price: "50€"
  },
  {
    title: "Programme en Ligne",
    image: insta2,
    description: "Un plan nutritionnel et sportif sur mesure pour atteindre vos objectifs.",
    price: "100€"
  },
];

// Composant ServiceCard avec la prop scrollToContact
const ServiceCard = ({ title, image, description, price, scrollToContact }) => (
  <div className="service-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p className="service-price">{price}</p>
    <p className="description">{description}</p>
    <button onClick={scrollToContact}>Réserver ce service</button>
  </div>
);

const Services = () => {

  // Fonction pour faire défiler jusqu'à la section de contact
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      const contactTop = contactSection.getBoundingClientRect().top + window.scrollY; // Position supérieure de la section
      const offset = window.innerWidth < 1024 ? 100 : 0; // Soustraction de 100px seulement sur mobile
      window.scrollTo({
        top: contactTop - offset, // Soustraire la hauteur de la navbar si mobile
        behavior: 'smooth' // Animation de défilement
      });
    }
  };

  return (
    <section id="services-section" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <h2>Mes services</h2>
      <p className="sub-title">Tous mes services sont sans engagement, afin de vous laissez libre dans vos prises de décisions.</p>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            price={service.price}
            description={service.description}
            scrollToContact={scrollToContact} // Passe la fonction comme prop
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
