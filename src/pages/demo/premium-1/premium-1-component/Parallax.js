import React from 'react';
import AnimatedNumber from '../premium-1-component/AnimatedNumber';

const Parallax = () => {
  return (
    <section id="stats-section" className="parallax-section">
      <div className="stats-container">
        <div className="stat-item">
          <AnimatedNumber number={65} />
          <p>Clients Transformés</p>
        </div>
        <div className="stat-item">
          <AnimatedNumber number={6} />
          <p>Années d'Expérience</p>
        </div>
        <div className="stat-item">
          <AnimatedNumber number={300} />
          <p>Heures de Cours Collectifs</p>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
