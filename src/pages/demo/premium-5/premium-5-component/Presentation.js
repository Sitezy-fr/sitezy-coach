import React from 'react';
import image1 from '../premium-5-images/musculation.png'; // Remplacez par le bon chemin
import image2 from '../premium-5-images/cardio.png'; // Remplacez par le bon chemin
import image3 from '../premium-5-images/diet.png'; // Remplacez par le bon chemin

const Presentation = () => {
  return (
    <div className="presentation">
      <h2 className="presentation__subtitle" data-aos="fade-up">Atteignez votre objectif</h2>
      <h1 className="presentation__title" data-aos="fade-up">accompagnement sur-mesure</h1>
      <div className="presentation__icons">
        <div className="presentation__icon">
            <div className="presentation__icon-mask" data-aos="fade-up"> 
                <img src={image1} alt="Description de l'image 1" className="presentation__icon-image" style={{filter: "hue-rotate(100deg)"}} />
                <h3 className="presentation__icon-title">Musculation</h3>
                <p className="presentation__icon-paragraph">
                    Des séances de musculation visant à développer la force et la masse musculaire tout en améliorant la santé générale et le bien-être.
                </p>
            </div>
        </div>
        <div className="presentation__icon">
            <div className="presentation__icon-mask" data-aos="fade-up"> 
                <img src={image2} alt="Description de l'image 2" className="presentation__icon-image" style={{filter: "hue-rotate(120deg)"}} />
                <h3 className="presentation__icon-title">Préparation physique</h3>
                <p className="presentation__icon-paragraph">
                    Des séances de préparation physique visant à améliorer les performances athlétiques en renforçant la force, l'endurance, la flexibilité et la coordination.
                </p>
            </div>
        </div>
        <div className="presentation__icon">
            <div className="presentation__icon-mask" data-aos="fade-up"> 
                <img src={image3} alt="Description de l'image 3" className="presentation__icon-image" style={{filter: "hue-rotate(120deg)"}} />
                <h3 className="presentation__icon-title">Alimentation</h3>
                <p className="presentation__icon-paragraph">
                    Un plan alimentaire détaillé pour optimiser la santé, soutenir les performances sportives et favoriser la récupération.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
