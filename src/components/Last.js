import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';
import lastDesign from '../images/premium-4.png';

const Last = () => {
  const design = {
    id: 1,
    image: lastDesign,
    demoLink: "/#/demo/premium-4", // Lien pour la démo
    reserveLink: "https://book.stripe.com/bIY2aL8e8bPQ1z2cMM", // Lien pour la réservation
  };

  return (
    <section id="last-design">
      <div className="last-section">
        <div className="details">
          <h2 className="last-title">Notre dernier design&nbsp;🔥</h2>
          <p className="last-subtitle">
            Voici notre dernière création, réservez rapidement ce design avant qu'il ne soit plus disponible !
          </p>
        </div>

        <div className="last-item">
          <div className="design-image">
            <img src={design.image} alt={`Design ${design.id}`} />
          </div>

          <div className="action-buttons">
            <button 
              onClick={() => window.location.href = design.demoLink}
              className="demo-button"
            >
              Voir&nbsp;la&nbsp;démo&nbsp;<FontAwesomeIcon icon={faEye} />
            </button>

            <button 
              onClick={() => window.location.href = design.reserveLink}
              className="reserve-button"
            >
              Réserver&nbsp;ce&nbsp;design&nbsp;<FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Last;
