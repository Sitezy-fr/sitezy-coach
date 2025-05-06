import React from 'react';

const StepSuccess = () => {
  return (
    <section className="step-success">
      <div className="step-success__content">
        <div className="step-success__left" data-aos="fade-up">
          <h3 className="step-success__subtitle">Comment ça marche</h3>
          <h2 className="step-success__title">Les étapes de votre succès</h2>
          <p className="step-success__description">
            Suivez ce processus en quatre étapes simples pour atteindre vos objectifs physique et de bien-être. De l'évaluation initiale à la mise en place de séances adaptées, je vous accompagne à chaque étape du chemin.
          </p>
        </div>

        <div className="step-success__steps-wrapper">
          <div className="step-success__step-row" data-aos="fade-left">
            <div className="step-success__number">1</div>
            <div className="step-success__step-content">
              <p className="step-success__step-title">Bilan gratuit</p>
              <p className="step-success__step-description">
                Lors de cette première étape, nous discutons de vos objectifs et de vos besoins pour établir un plan personnalisé qui vous correspond parfaitement.
              </p>
            </div>
          </div>

          <div className="step-success__step-row" data-aos="fade-left">
            <div className="step-success__number">2</div>
            <div className="step-success__step-content">
              <p className="step-success__step-title">Mensurations & Test physique</p>
              <p className="step-success__step-description">
                Nous réalisons des mesures précises et un test physique pour évaluer votre condition actuelle, afin de mieux suivre vos progrès.
              </p>
            </div>
          </div>

          <div className="step-success__step-row" data-aos="fade-left">
            <div className="step-success__number">3</div>
            <div className="step-success__step-content">
              <p className="step-success__step-title">Création du plan nutritionnel</p>
              <p className="step-success__step-description">
                Un plan de nutrition personnalisé est conçu pour vous aider à atteindre vos objectifs, en combinant équilibre et plaisir alimentaire.
              </p>
            </div>
          </div>

          <div className="step-success__step-row" style={{ borderBottom: 'none' }} data-aos="fade-left">
            <div className="step-success__number">4</div>
            <div className="step-success__step-content">
              <p className="step-success__step-title">Séances en salle</p>
              <p className="step-success__step-description">
                Participez à des séances d'entraînement structurées et motivantes en salle, encadrées par mes soins pour maximiser vos résultats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepSuccess;
