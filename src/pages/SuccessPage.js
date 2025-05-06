import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/sitezy-logo.png';
import ConfettiComponent from '../components/ConfettiComponent';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div id='sitezy'>
      <div className='success'>
        <div className="success-page">
          <img src={logo} alt='logo' onClick={handleBackToHome} ></img>
          <div className="success-container">
            <div className='success-title'>
              <h1>Paiement&nbsp;réussi&nbsp;!</h1>
              <i className='icons'>🎉</i>
              <ConfettiComponent />
            </div>
            <div className='success-subtitle'>Votre transaction a été traitée avec succès. </div>

            <p style={{marginTop: '30px'}}>Nous vous remerçions pour votre confiance et avons hâte de mettre en lumière votre entreprise au travers de votre nouveau site web&nbsp;! </p>
            <p style={{marginBottom: '30px'}}>Un développeur de notre équipe va très prochainement vous contacter via le mail que vous avez indiqué lors de votre commande, afin de débuter la première étape du processus de création.</p>

            <button onClick={handleBackToHome} className="btn-primary">
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SuccessPage;
