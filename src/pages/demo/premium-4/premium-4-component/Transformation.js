import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import transformation1 from '../premium-4-images/before-after-02.jpg';
import transformation2 from '../premium-4-images/before-after-03.jpg';
import transformation3 from '../premium-4-images/before-after-04.jpg';
import transformation4 from '../premium-4-images/before-after-05.jpg';
import transformation5 from '../premium-4-images/before-after-07.jpg';

const transformations = [
  {
    name: 'Antoine',
    image: transformation5,
    text: "Grâce au coaching, j'ai pu atteindre mes objectifs plus rapidement que je ne l'avais imaginé. Un coach formidable et des conseils précieux.",
  },
  {
    name: 'Nathalie',
    image: transformation2,
    text: "Le programme en ligne est parfait pour ceux qui veulent s'entraîner à leur rythme. Les conseils sont clairs et adaptés.",
  },
  {
    name: 'Laura',
    image: transformation3,
    text: "Les séances en groupe sont motivantes et dynamiques. J'adore la variété des exercices proposés.",
  },
  {
    name: 'Dylan',
    image: transformation4,
    text: "Un excellent coach qui m’a aidé à atteindre mes objectifs de remise en forme. Très professionnel et à l’écoute !",
  },
  {
    name: 'Sam',
    image: transformation1, 
    text: "Un suivi régulier et des programmes variés, parfait pour atteindre ses objectifs !",
  },
];

const Transformation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Nombre de cartes visibles à la fois
    slidesToScroll: 1,
    autoplay: true, // Active le défilement automatique
    autoplaySpeed: 3000, // Durée d'affichage de chaque slide en millisecondes
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id='transformation' className="transformation">
      <h2 className="transformation__subtitle" data-aos="fade-up">Avis clients</h2>
      <p className="transformation__title" data-aos="fade-up">
        <span>Vos incroyables</span>
        <br />
        Transformations
      </p>
      <Slider {...settings} className="transformation__carousel">
        {transformations.map((person, index) => (
          <div key={index} className="transformation__card" data-aos="fade-up">
            <img src={person.image} alt={person.name} className="transformation__image" />
            <p className="transformation__text">"{person.text}"</p>
            <h3 className="transformation__name">{person.name}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Transformation;
