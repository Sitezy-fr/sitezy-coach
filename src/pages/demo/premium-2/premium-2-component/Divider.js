import React, { useState, useEffect, useRef } from 'react';

const Divider = () => {
  // Fonction pour animer les chiffres de 0 à la valeur finale
  const animateNumber = (value, setValue, duration) => {
    let start = 0;
    const increment = value / (duration / 50); // 50ms interval
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setValue(value);
        clearInterval(timer);
      } else {
        setValue(Math.ceil(start)); // arrondir à l'entier supérieur
      }
    }, 50);
  };

  // État pour les valeurs animées
  const [experienceAthlete, setExperienceAthlete] = useState(0);
  const [experienceCoach, setExperienceCoach] = useState(0);
  const [satisfiedClients, setSatisfiedClients] = useState(0);

  const [hasAnimated, setHasAnimated] = useState(false); // État pour s'assurer que l'animation ne se joue qu'une fois
  const dividerRef = useRef(null); // Ref pour l'élément de la section Divider

  // Utiliser l'Intersection Observer pour démarrer l'animation lorsque la section est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          // Démarrer les animations lorsque la section est visible
          animateNumber(15, setExperienceAthlete, 2000);
          animateNumber(4, setExperienceCoach, 2000);
          animateNumber(60, setSatisfiedClients, 2000);
          setHasAnimated(true); // Assurer que l'animation ne se joue qu'une fois
        }
      },
      {
        threshold: 0.5, // Déclenchement quand 50% de l'élément est visible
      }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current); // Observer la section Divider
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current); // Nettoyer l'observer
      }
    };
  }, [hasAnimated]); // Ne rejouer l'animation que si elle n'a pas déjà été jouée

  return (
    <section id="divider" ref={dividerRef}>
      <div className="divider__content">
        <div className="divider__item">
          <h2 className="divider__number">{experienceAthlete}</h2>
          <p className="divider__description">ANNÉES D'EXPÉRIENCE<br />EN TANT QU’ATHLÈTE</p>
        </div>
        <div className="divider__item">
          <h2 className="divider__number">{experienceCoach}</h2>
          <p className="divider__description">ANNÉES D'EXPÉRIENCE<br />EN TANT QUE COACH</p>
        </div>
        <div className="divider__item">
          <h2 className="divider__number">{satisfiedClients}</h2>
          <p className="divider__description">CLIENTS SATISFAITS</p>
        </div>
      </div>
    </section>
  );
};

export default Divider;
