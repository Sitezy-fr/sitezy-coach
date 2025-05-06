import React from 'react';
import profileImage from '../standard-1-images/about.jpg';
import { FaHandHoldingHeart, FaGraduationCap, FaBriefcase } from 'react-icons/fa'; // Assurez-vous d'avoir installé react-icons avec `npm install react-icons`

const About = () => {
  return (
    <section id='about' className="about">
      <div className='about__container'>
        <div className="about__image-container">
          <div className="about__image-wrapper">
            <img src={profileImage} alt="Coach" className="about__image" />
            <div className="about__small-circle"></div> {/* Cercle plus petit */}
          </div>
        </div>
        <div className="about__content">
          <h2 className="about__title">À propos de moi</h2>
          <p className="about__description">
            Je m'appelle Mathieu Oliveira, je suis un coach passionné avec plus de 10 ans d'expérience dans le domaine du sport et du bien-être. 
            Mon parcours m'a permis de travailler avec des athlètes de tous niveaux, en les aidant à atteindre 
            leurs objectifs grâce à des méthodes personnalisées et innovantes.
          </p>
          <div className="about__icons">
            <div className="about__icon">
              <FaGraduationCap />
              <span>Diplômé</span>
            </div>
            <div className="about__icon">
              <FaBriefcase />
              <span>Professionnel</span>
            </div>
            <div className="about__icon">
              <FaHandHoldingHeart />
              <span>Bienveillant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
