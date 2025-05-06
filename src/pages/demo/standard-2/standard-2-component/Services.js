import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Coaching Personnel',
            description: 'Obtenez un accompagnement sur mesure pour atteindre vos objectifs de fitness et de bien-être.',
            icon: '🤝🏻',
            price: '50€',
        },
        {
            title: 'Suivi Nutritionnel',
            description: 'Des conseils nutritionnels personnalisés pour optimiser votre santé et votre performance.',
            icon: '🥗',
            price: '40€',
        },
        {
            title: 'Programme en Ligne',
            description: 'Des programmes d\'entraînement adaptés à votre niveau et à vos objectifs spécifiques.',
            icon: '🏋🏻‍♂️',
            price: '30€',
        },
    ];

    // Fonction pour faire défiler vers la section contact
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        const navbarHeight = 75; // Hauteur de la navbar en pixels

        if (section) {
            const topPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className="services">
            <h2 className="services-title">Ce que je peux vous apporter&nbsp;💪🏻</h2>
            <div className="services-cards">
                    {services.map((service, index) => (
                        <div className="card-container">
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-price">{service.price}</p>
                            <p className="service-card-description">{service.description}</p>
                            <button
                                className="service-card-btn"
                                onClick={() => scrollToSection('contact')}
                            >
                                Réserver ce service
                            </button>
                        </div>
                        </div>
                    ))}
                
            </div>
        </section>
    );
};

export default Services;
