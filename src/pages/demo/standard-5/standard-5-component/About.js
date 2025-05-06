import React from "react";
import aboutImage from "../standard-5-images/mb-coach.png"; // Assurez-vous de remplacer par le chemin correct

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__image">
        <img src={aboutImage} alt="About" />
      </div>
      <div className="about__content">
        <div className="about__title">
          <div className="line"></div>
            <h2>À propos</h2>
          <div className="line"></div>
        </div>
        <p>
        Je suis Maxime, coach sportif avec 7 ans d'expérience dans l'accompagnement de personnes souhaitant transformer leur physique et retrouver confiance en elles. Je crée des programmes sur mesure qui allient force, endurance et nutrition pour vous aider à atteindre vos objectifs de manière durable. Que vous cherchiez à perdre du poids, sculpter votre silhouette ou gagner en muscle, je vous accompagne à chaque étape avec une approche adaptée et motivante. Ensemble, nous travaillerons sur votre physique et votre mental pour obtenir des résultats visibles et durables. Prêt à entamer votre transformation ?
        </p>
      </div>
    </section>
  );
};

export default About;
