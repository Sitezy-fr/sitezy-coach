import React from 'react';
import cardio from '../premium-1-images/cardio.jpg';
import force from '../premium-1-images/force.jpg';
import endurance from '../premium-1-images/endurance.jpg';
import souplesse from '../premium-1-images/souplesse.jpg';

const Skills = () => {
  const skills = [
    {
      img: endurance,
      title: 'ENDURANCE',
      description: "L'endurance permet de repousser vos limites sur des efforts de longue durée et est souvent utilisée pour augmenter le déficit calorique."
    },
    {
      img: force,
      title: 'FORCE',
      description: "La force vous aide à développer puissance et stabilité, essentielles pour améliorer vos performances et votre système nerveux."
    },
    {
      img: cardio,
      title: 'CARDIO',
      description: "Le cardio à haute intensité renforce votre cœur, vos muscles, votre coordination et améliore votre résistance à l'acide lactique."
    },
    {
      img: souplesse,
      title: 'SOUPLESSE',
      description: "La souplesse améliore votre mobilité et prévient les blessures, facilitant chaque mouvement en séance ou au quotidien."
    }
  ];

  return (
    <section id="skills-gallery" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skills-item" key={index}>
            <img src={skill.img} alt={skill.title} />
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
