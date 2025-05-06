import React, { useState } from "react";
import coach from '../premium-2-images/dx-reviews.jpg';
import avis1 from '../premium-2-images/avatar1.webp';
import avis2 from '../premium-2-images/avatar2.webp';
import avis3 from '../premium-2-images/avatar3.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    id: 1,
    text: "Grâce au coaching, j'ai pu atteindre mes objectifs plus rapidement que je ne l'avais imaginé. Un coach formidable et des conseils précieux.",
    author: "Baptiste",
    img: avis1,
  },
  {
    id: 2,
    text: "Le programme en ligne est parfait pour ceux qui veulent s'entraîner à leur rythme. Les conseils sont clairs et adaptés.",
    author: "Jeanne",
    img: avis2,
  },
  {
    id: 3,
    text: "Les séances en groupe sont motivantes et dynamiques. J'adore la variété des exercices proposés.",
    author: "Elsa",
    img: avis3,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="reviews" data-aos="fade-up">
      <div className="image-container">
        <img
          src={coach}
          alt="Coach"
        />
      </div>
      <div className="carousel-container">
        <p className="reviews-subtitle">Ayez confiance en mes services</p>
          <h2 className="reviews-title">
            Les avis de <span>mes clients</span>
          </h2>
        <div className="testimonial">
          <div className="quote">
            <FontAwesomeIcon icon={faQuoteLeft} />
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
          <p>{testimonials[currentIndex].text}</p>
          <div className="author">
            <h4>{testimonials[currentIndex].author}</h4>
            <img 
              src={testimonials[currentIndex].img} 
              alt={testimonials[currentIndex].author} 
              className="testimonial-img" 
            />
          </div>
        </div>
        <div className="carousel-controls">
          <button onClick={prevTestimonial}>Précédent</button>
          <button onClick={nextTestimonial}>Suivant</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
