import React from 'react';
import aboutPhoto from '../premium-4-images/about.png';

const About = () => {
  return (
    <section id='aboutme' className="aboutme">
      <div className="aboutme__card" data-aos="fade-up">
        <div className="aboutme__left">
          <div className="aboutme__image-container">
            <img src={aboutPhoto} alt="Profile" className="aboutme__image" />
          </div>
          <h2 className="aboutme__subtitle">Votre Coach</h2>
        </div>

        <div className="aboutme__right">
          <h2 className="aboutme__title">À propos</h2>
          <p className="aboutme__text">
            Je m'appelle Antoine, je suis passionné par le sport et le bien-être, je me suis donné pour mission de guider chacun vers une vie plus saine et plus active. Avec plus de 10 ans d'expérience dans le domaine du coaching sportif, j'ai accompagné de nombreuses personnes dans leur transformation physique et mentale, en mettant l'accent sur l'écoute et la personnalisation.
            <br></br><br></br>
            Chaque individu est unique, et c'est pourquoi j'adapte mes programmes en fonction des besoins et objectifs spécifiques de chacun. Que vous souhaitiez perdre du poids, gagner en muscle ou simplement vous sentir mieux dans votre corps, je suis là pour vous motiver et vous encourager à chaque étape de votre parcours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
