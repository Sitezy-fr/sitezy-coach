import React, { useEffect, useState, useRef } from 'react';

const ExpertiseSection = () => {
  const [progress, setProgress] = useState({
    specificPreparation: 0,
    nutritionSkills: 0,
    cardioConditioning: 0,
  });

  const sectionRef = useRef(null); // Référence à la section pour l'Observer

  // Valeurs cibles pour les barres
  const targetProgress = {
    specificPreparation: 80,
    nutritionSkills: 72,
    cardioConditioning: 88,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgress();
            observer.disconnect(); // Déconnexion après que l'animation ait démarré
          }
        });
      },
      { threshold: 1 } // Déclencher lorsque 50% de la section est visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, []);

  const animateProgress = () => {
    // Durée en millisecondes pour atteindre la valeur cible
    const duration = 3000; // 2 secondes
    const steps = 50; // Nombre d'étapes pour l'animation
    const interval = duration / steps; // Intervalle pour chaque étape
    const increment = {
      specificPreparation: targetProgress.specificPreparation / steps,
      nutritionSkills: targetProgress.nutritionSkills / steps,
      cardioConditioning: targetProgress.cardioConditioning / steps,
    };

    let currentProgress = {
      specificPreparation: 0,
      nutritionSkills: 0,
      cardioConditioning: 0,
    };

    const intervalId = setInterval(() => {
      currentProgress.specificPreparation += increment.specificPreparation;
      currentProgress.nutritionSkills += increment.nutritionSkills;
      currentProgress.cardioConditioning += increment.cardioConditioning;

      setProgress({
        specificPreparation: Math.min(currentProgress.specificPreparation, targetProgress.specificPreparation),
        nutritionSkills: Math.min(currentProgress.nutritionSkills, targetProgress.nutritionSkills),
        cardioConditioning: Math.min(currentProgress.cardioConditioning, targetProgress.cardioConditioning),
      });

      if (
        currentProgress.specificPreparation >= targetProgress.specificPreparation &&
        currentProgress.nutritionSkills >= targetProgress.nutritionSkills &&
        currentProgress.cardioConditioning >= targetProgress.cardioConditioning
      ) {
        clearInterval(intervalId);
      }
    }, interval);
  };

  return (
    <section id="expertise-section" ref={sectionRef} data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div className="container">
        <div className="left-section">
          <h2>Mes champs de compétences</h2>
          <p>
          Optimisez votre santé et vos performances grâce à une approche complète alliant préparation physique, nutrition et transformation corporelle. Une bonne condition physique ne se limite pas à l'entraînement, mais nécessite aussi une alimentation adaptée et un accompagnement personnalisé. 
          </p>
          {/* <button className="cta-button">More Videos</button> */}
        </div>
        <div className="right-section">
          <div className="progres bar1">
            <div className="label">
              <p>Préparation Physique</p>
              <span>{Math.round(progress.specificPreparation)}%</span>
            </div>
            <div className="bar">
              <div
                className="progross"
                style={{ width: `${progress.specificPreparation}%`, backgroundColor: 'rgb(175, 175, 175)' }}
              ></div>
            </div>
          </div>
          <div className="progres bar2">
            <div className="label">
              <p>Nutrition</p>
              <span>{Math.round(progress.nutritionSkills)}%</span>
            </div>
            <div className="bar">
              <div
                className="progross"
                style={{ width: `${progress.nutritionSkills}%`, backgroundColor: 'black' }}
              ></div>
            </div>
          </div>
          <div className="progres bar3">
            <div className="label">
              <p>Transformation physique</p>
              <span>{Math.round(progress.cardioConditioning)}%</span>
            </div>
            <div className="bar">
              <div
                className="progross"
                style={{ width: `${progress.cardioConditioning}%`, backgroundColor: 'rgb(175, 175, 175)' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
