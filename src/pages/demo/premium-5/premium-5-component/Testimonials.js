import React from 'react';
import Slider from 'react-slick';

const Testimonials = () => {
  const settings = {
    dots: true, // Ajoute des points de navigation
    infinite: true, // Boucle infinie
    speed: 500, // Vitesse de transition
    slidesToShow: 1, // Nombre de slides à montrer en même temps
    slidesToScroll: 1, // Nombre de slides à faire défiler à la fois
    autoplay: true, // Lecture automatique
    autoplaySpeed: 5000, // Durée d'affichage de chaque slide
    arrows: false // Masquer les flèches
  };

  const testimonialsData = [
    {
      rating: 5,
      name: "Jean",
      message: "Grâce au coaching, j'ai pu atteindre mes objectifs plus rapidement que je ne l'avais imaginé. Michael est formidable et donne des conseils précieux.",
    },
    {
      rating: 5,
      name: "Marie",
      message: "Le programme en ligne est parfait pour ceux qui veulent s'entraîner à leur rythme. Les conseils sont clairs et adaptés.",
    },
    { rating: 5,
      name: "Sophie",
      message: "Les séances en groupe sont motivantes et dynamiques. J'adore la variété des exercices proposés.",
    }
  ];

  // Fonction pour générer les étoiles en fonction de la note
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'star--filled' : 'star--empty'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="testimonials">
      <div id='testimonials__container' className='testimonials__container'>
        <div className="testimonials__header">
          <h2 className="testimonials__subtitle" data-aos="fade-up" data-aos-anchor-placement="top-bottom">Avis Clients</h2>
          <h1 className="testimonials__title" data-aos="fade-up" data-aos-anchor-placement="top-bottom">Ce Que Nos Clients Disent</h1>
        </div>

        <div className="testimonials__carousel" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <div className="testimonial__rating">{renderStars(testimonial.rating)}</div>
                <p className="testimonial__message">"{testimonial.message}"</p>
                <p className="testimonial__name">{testimonial.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
    </section>
  );
};

export default Testimonials;
