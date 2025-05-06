import React from 'react';
import coach from '../premium-5-images/michael-ruan.webp'

const About = () => {
  return (
    <div className="about">
      <div className="about__image">
        <img src={coach} alt="Coach" />
      </div>
      <div className="about__content">
        <h2 className="about__subtitle" data-aos="fade-up">VOTRE COACH</h2>
        <h1 className="about__title" data-aos="fade-up">MICHAEL RUAN</h1>
        <p className="about__paragraph" data-aos="fade-up">
        Je suis coach sportif passionné avec plusieurs années d'expérience dans l'accompagnement personnalisé. Mon objectif est de vous aider à atteindre vos objectifs de forme physique, que ce soit pour gagner en force, améliorer votre endurance, perdre du poids ou simplement adopter un mode de vie plus sain.<br></br><br></br> Avec une approche sur mesure, je crée des programmes d'entraînement adaptés à votre niveau et à vos besoins spécifiques. Mon expertise et mon dynamisme vous motiveront à aller plus loin et à vous dépasser. Ensemble, nous travaillerons pour que vous puissiez devenir la meilleure version de vous-même, tout en prenant du plaisir à vous entraîner.
        </p>
      
      </div>
    </div>
  );
};

export default About;
