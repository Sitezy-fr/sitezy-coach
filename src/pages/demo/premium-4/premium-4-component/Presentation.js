import React from 'react';
import personalTrainingImg from '../premium-4-images/fusionjpg-03.jpg'; // Remplacez par le chemin correct
import nutritionCoachingImg from '../premium-4-images/fusionjpg-04.jpg'; // Remplacez par le chemin correct
import weightLossImg from '../premium-4-images/fusionjpg-05.jpg'; // Remplacez par le chemin correct
import cardioExerciseImg from '../premium-4-images/fusionjpg-06.jpg'; // Remplacez par le chemin correct

const Presentation = () => {
  return (
    <section id='presentation' className="presentation">
      <div className="presentation__header">
        <h2 className="presentation__title" data-aos="fade-up">Suivez un plan millimétré pour atteindre vos objectifs</h2>
      </div>
      <div className="presentation__blocks">
        <div className="presentation__block" data-aos="zoom-in" data-aos-duration="5000">
          <img src={personalTrainingImg} alt="Personal Training" className="presentation__icon" />
          <h3 className="presentation__block-title">Entrainement musculaire</h3>
          <p className="presentation__block-text">Renforcez votre corps avec des exercices ciblés et un accompagnement sur mesure pour développer votre force et votre endurance.</p>
        </div>
        <div className="presentation__block" data-aos="zoom-in">
          <img src={nutritionCoachingImg} alt="Nutrition Coaching" className="presentation__icon" />
          <h3 className="presentation__block-title">Plan diététique</h3>
          <p className="presentation__block-text">Bénéficiez de conseils nutritionnels adaptés à votre mode de vie pour optimiser vos performances et votre santé au quotidien.</p>
        </div>
        <div className="presentation__block" data-aos="zoom-in">
          <img src={weightLossImg} alt="Weight Loss" className="presentation__icon" />
          <h3 className="presentation__block-title">Bilan régulier</h3>
          <p className="presentation__block-text">Suivez vos progrès grâce à des bilans réguliers et ajustez votre programme pour atteindre vos objectifs efficacement.</p>
        </div>
        <div className="presentation__block" data-aos="zoom-in">
          <img src={cardioExerciseImg} alt="Cardio Exercise" className="presentation__icon" />
          <h3 className="presentation__block-title">Mesure & suivi</h3>
          <p className="presentation__block-text">Analysez vos performances avec des mesures précises et un suivi continu pour maximiser vos résultats.</p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
