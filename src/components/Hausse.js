import React, { useEffect, useState, useRef } from "react";
import up from '../images/up-sell.png';

const Hausse = () => {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Nouveau drapeau
  const sectionRef = useRef(null);

  const scrollToDesign = () => {
    const presentationSection = document.getElementById('design');
    if (presentationSection) {
        const navbarHeight = 20; // Ajustez cette valeur si la navbar a une hauteur différente
        const sectionPosition = presentationSection.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = sectionPosition - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
};

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      let start = 0;
      const end = 79;
      const duration = 3000;
      const increment = end / (duration / 16);
      
      const animate = () => {
        start += increment;
        if (start >= end) {
          setPercentage(end);
          setHasAnimated(true); // Marque l'animation comme terminée
        } else {
          setPercentage(Math.ceil(start));
          requestAnimationFrame(animate);
        }
      };
      animate();
    }
  }, [isVisible, hasAnimated]);

  return (
    <section ref={sectionRef} className="hausse">
      <div className="hausse-content">

        <div className="left-content">
          <div className="percentage">+{percentage}%</div>
          <p className="description">
            En moyenne, nos clients ont connu une hausse de 79% de leur chiffre d'affaire après la création de leur site internet. Cette hausse s'explique en partie par l'augmentation de leur visibilité, la clarification de leurs offres ainsi que la professionalisation de leur entreprise.
          </p>
          <button className="cta-button" onClick={ scrollToDesign }>
            Moi aussi je veux un site internet !
          </button>
        </div>

        <div className="right-content">
          <img src={up} alt="Illustration de la croissance" className="illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hausse;
