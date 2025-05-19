import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from './FilterContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwipeAnimation from "../components/SwipeAnimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';
import premium1 from '../images/premium-1.png'
import premium2 from '../images/premium-2.png'
import premium4 from '../images/premium-4.png'
import premium5 from '../images/premium-5.png'
import standard1 from '../images/standard-1.png'
import standard2 from '../images/standard-2.png'
import standard5 from '../images/standard-5.png'
import reserved1 from '../images/reserved-1.png' /* Trop petit */
import reserved2 from '../images/reserved-2.png'
import reserved3 from '../images/reserved-3.png'
import couronne from '../images/couronne.png'

const CarouselPremium = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const [isSwipeVisible, setSwipeVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);


  // Fonction pour vérifier la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setSwipeVisible(window.innerWidth <= 800); // Affiche l'animation seulement si la largeur est de 800px ou moins
    };
    
    handleResize(); // Vérifie la taille initiale de l'écran
    window.addEventListener("resize", handleResize); // Ajoute un écouteur de redimensionnement

    // Nettoie l'écouteur lorsque le composant est démonté
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const designs = [
    { id: 1, image: premium4, demoLink: "/#/demo/premium-4", reserveLink: "https://book.stripe.com/bIY2aL8e8bPQ1z2cMM", isReserved: false, category: "Premium" },
    { id: 2, image: premium2, demoLink: "/#/demo/premium-2", reserveLink: "https://book.stripe.com/fZe2aL3XS7zA91u5kl", isReserved: false, category: "Premium" },
    { id: 3, image: reserved3, demoLink: "#", reserveLink: "#", isReserved: true, category: "Standard" },
    { id: 4, image: premium5, demoLink: "/#/demo/premium-5", reserveLink: "https://book.stripe.com/7sIdTt7a4f227Xq146", isReserved: false, category: "Premium" },
    { id: 5, image: standard2, demoLink: "/#/demo/standard-2", reserveLink: "https://book.stripe.com/14kcPpdys9HI6TmeUX", isReserved: false, category: "Standard" },
    { id: 6, image: premium1, demoLink: "/#/demo/premium-1", reserveLink: "https://book.stripe.com/14keXx660f225Pi3cg", isReserved: false, category: "Premium" },
    { id: 7, image: standard5, demoLink: "/#/demo/standard-5", reserveLink: "https://book.stripe.com/7sIbLldys5rs91udQV", isReserved: false, category: "Standard" },
    { id: 8, image: reserved2, demoLink: "#", reserveLink: "#", isReserved: true, category: "Premium" },
    { id: 9, image: reserved3, demoLink: "#", reserveLink: "#", isReserved: true, category: "Premium" },
    { id: 10, image: standard1, demoLink: "/#/demo/standard-1", reserveLink: "https://book.stripe.com/28o02DbqkbPQ0uY28e", isReserved: false, category: "Standard" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 804,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          swipe: false,
        },
      },
    ],
  };

  const handleHideSwipe = () => {
    setSwipeVisible(false);
  };

  const filteredDesigns = designs.filter((design) => {
    if (filter === "Tous") return true;
    return design.category === filter;
  });

  return (
    <section id="design">
      <div className="carousel-section premium">
        {isSwipeVisible && (
          <div 
            className="swipe-container" 
            onClick={handleHideSwipe}
            onScroll={handleHideSwipe}
            onTouchStart={handleHideSwipe}
            onTouchMove={handleHideSwipe}
          >
            <SwipeAnimation />
          </div>
        )}
        
        <div className="details">
          <h2 className="carousel-title premium-title">Choisissez votre design</h2>
          <p className="premium-subtitle">Chacun de nos design est unique, chaque section est personnalisable afin de représenter au mieux vos valeurs et votre image de marque.</p>
          
          <div className="filter-buttons">
            <button onClick={() => setFilter("Tous")} className={filter === "Tous" ? "active" : ""}>Tous </button>
            <div className="separator">|</div>
            <button onClick={() => setFilter("Standard")} className={filter === "Standard" ? "active" : ""}>Standard</button>
            <div className="separator">|</div>
            <button onClick={() => setFilter("Premium")} className={filter === "Premium" ? "active" : ""}>Premium&nbsp;<img src={couronne} alt='Premium'></img></button>
            
          </div>
        </div>

        <div onClick={handleHideSwipe} onTouchStart={handleHideSwipe} onTouchMove={handleHideSwipe}>
          <Slider {...settings}>
            {filteredDesigns.map((design, index) => (
              <div key={design.id} className={`carousel-item ${index === currentSlide ? 'featured' : ''}`}>
                <div className={`design-premium-id ${index === currentSlide ? 'premium-num' : ''}`}>
                  <span>{design.id}</span>
                </div>

                <div className={`test ${index === currentSlide ? 'parfait' : ''}`} style={{ position: 'relative' }}>
                  <img src={design.image} alt={`Design ${design.id}`} />
                  {design.isReserved && (
                    <div className={`reserved-text ${index === currentSlide ? '' : 'inactive'}`}>
                      Réservé
                    </div>
                  )}
                </div>

                {index === currentSlide && (
                  <div className="carousel-buttons">
                    <button 
                      onClick={() => { if (!design.isReserved) window.location.href = design.demoLink; }}
                      className={design.isReserved ? 'demo-button disabled-button' : 'demo-button'}
                      disabled={design.isReserved}
                    >
                      Voir&nbsp;la&nbsp;démo&nbsp;<FontAwesomeIcon icon={faEye} />
                    </button>

                    <button 
                      onClick={() => { if (!design.isReserved) window.location.href = design.reserveLink; }}
                      className={design.isReserved ? 'reserve-button disabled-button' : 'reserve-button'}
                      disabled={design.isReserved}
                    >
                      {design.isReserved ? 'Déjà réservé' : 'Réserver\u00A0ce\u00A0design'}&nbsp;<FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CarouselPremium;
