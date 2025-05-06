import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';

const testimonialsData = [
  {
    feedback: 'Un excellent coach qui m’a aidé à atteindre mes objectifs de remise en forme. Très professionnel et à l’écoute !',
    rating: 5,
    clientName: 'Alice',
  },
  {
    feedback: 'Le programme de nutrition a vraiment changé ma façon de manger. Je me sens beaucoup plus en forme !',
    rating: 5,
    clientName: 'Marc',
  },
  {
    feedback: 'Des entraînements motivants et efficaces. Je recommande fortement ce coach !',
    rating: 5,
    clientName: 'Julie',
  },
  {
    feedback: 'Des conseils personnalisés et des séances adaptées à mes besoins. Un coach très compétent !',
    rating: 5,
    clientName: 'David',
  },
  {
    feedback: 'Un suivi régulier et des programmes variés, parfait pour atteindre ses objectifs !',
    rating: 5,
    clientName: 'Sophie',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Affiche 3 cartes à la fois
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Changer automatiquement toutes les 3 secondes
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id='testimonials' className="testimonials-carousel">
      <h2 className="testimonials-carousel__title">Ce que disent mes clients</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonials-carousel__card" key={index}>
            <p className="testimonials-carousel__feedback">"{testimonial.feedback}"</p>
            <div className="testimonials-carousel__rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="testimonials-carousel__star" />
              ))}
            </div>
            <p className="testimonials-carousel__client">{testimonial.clientName}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
