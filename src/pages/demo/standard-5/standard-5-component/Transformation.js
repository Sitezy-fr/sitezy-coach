import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import transformation1 from '../standard-5-images/before-after-02.jpg';
import transformation2 from '../standard-5-images/before-after-03.jpg';
import transformation3 from '../standard-5-images/before-after-04.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const transformations = [
  {
    image: transformation1,
    title: "Mickael",
    description: "Grâce à Maxime, j’ai pu atteindre les objectifs physiques que je m'étais fixé en un temps record. Je me sens plus en forme que jamais!",
  },
  {
    image: transformation2,
    title: "Anastasia",
    description: "Les entraînements avec Maxime sont motivants et efficaces. Il sait comment vous pousser à donner le meilleur de vous-même.",
  },
  {
    image: transformation3,
    title: "Laura",
    description: "J'ai adoré le coaching de Maxime, les exercices sont ludiques et souvent variés. Je recommande à toutes personnes voulant se remettre au sport!",
  },
];

const Transformation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <section id="transformation" className="transformation">
      <div className="transformation__title">
        <div className="line"></div>
          <h2>Vos avant/après</h2>
        <div className="line"></div>
      </div>
      <Slider {...settings}>
        {transformations.map((item, index) => (
          <div key={index} className="transformation__slide">
            <div className="transformation__item">
              <div className="transformation__image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="transformation__content">
                <h2>{item.title}</h2>
                <div className="quote left">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <p>{item.description}</p>
                <div className="quote right">
                  <FontAwesomeIcon icon={faQuoteRight} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Transformation;
