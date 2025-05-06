import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import ConfettiComponent from './ConfettiComponent';

const ProgressBarSection = () => {
  const [opacities, setOpacities] = useState([0.5, 0.5, 0.5]);
  const [icons, setIcons] = useState([faCircleDot, faCircleDot, faCircleDot]); // État pour les icônes
  const [bounceClasses, setBounceClasses] = useState(['', '', '']); // État pour gérer la classe d'animation
  const [footerOpacity, setFooterOpacity] = useState(0.5);
  const [showConfetti, setShowConfetti] = useState(false); // État pour afficher le confetti

  const calculateSectionScrollPercentage = (element) => {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top;
    const elementBottom = rect.bottom;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    if (elementTop < viewportHeight && elementBottom > 0) {
      const elementHeight = elementBottom - elementTop;
      const visiblePart = Math.min(viewportHeight, elementBottom) - Math.max(0, elementTop);
      return (visiblePart / elementHeight) * 100;
    }
    return 0;
  };

  const isElementInViewport = (element) => {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    const elementMiddle = rect.top + (rect.height / 2);
    const viewportTop = 0;

    return elementMiddle <= viewportHeight / 2 && elementMiddle >= viewportTop;
  };

  const handleScroll = () => {
    const steps = document.querySelectorAll('.step');
    const newOpacities = [...opacities];
    const newIcons = [...icons]; // Copie des icônes
    const newBounceClasses = [...bounceClasses]; // Copie des classes d'animation

    steps.forEach((step, index) => {
      newOpacities[index] = isElementInViewport(step) ? 1 : 0.5;

      // Gérer le changement d'icône et l'animation
      if (newOpacities[index] === 1 && newIcons[index] === faCircleDot) {
        newIcons[index] = faCircleCheck;
        newBounceClasses[index] = 'icon-bounce'; // Ajouter l'animation
      } else if (newOpacities[index] === 0.5 && newIcons[index] === faCircleCheck) {
        newIcons[index] = faCircleDot;
        newBounceClasses[index] = ''; // Retirer l'animation
      }

      const scrollPercentage = calculateSectionScrollPercentage(step);
      const progressBar = step.querySelector('.progress-bar');
      const adjustedPercentage = Math.min(scrollPercentage, 100);
      progressBar.style.setProperty('--scroll-height', `${adjustedPercentage}%`);
    });

    setOpacities(newOpacities);
    setIcons(newIcons); // Mettre à jour les icônes
    setBounceClasses(newBounceClasses); // Mettre à jour les classes d'animation

    const footer = document.querySelector('#progress-footer');
    const isFooterVisible = isElementInViewport(footer);
    setFooterOpacity(isFooterVisible ? 1 : 0.5);

    // Déclenche le confetti lorsque le footer est visible (opacité 1)
    if (isFooterVisible && footerOpacity !== 1) {
      setShowConfetti(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [footerOpacity]); // Ajout de footerOpacity comme dépendance

  return (
    <div style={{ position: 'relative' }}>
      <section className='together'>
        <h2 id='progress-header'>
          Travaillons <span className="hand-drawn">ensemble</span> en seulement 3 étapes
        </h2>

        <div className='step step-1' style={{ opacity: opacities[0] }}>
          <div className='left'>
            <p>Première étape</p>
          </div>
          <div className='progress-bar'></div>
          <div className='dot'>
            <FontAwesomeIcon icon={icons[0]} className={bounceClasses[0]} /> {/* Appliquer la classe d'animation */}
          </div>
          <div className='right'>
            <p>
              <span>✨&nbsp;Faîtes votre choix</span><br/><br/>
              Choisissez votre design favori parmi ceux disponibles. Les designs Premium correspondent à l'offre Premium uniquement, de même pour les designs Standard avec l'offre Standard.
            </p>
          </div>
        </div>

        <div className='step step-2' style={{ opacity: opacities[1] }}>
          <div className='left'>
            <p>Deuxième étape</p>
          </div>
          <div className='progress-bar'></div>
          <div className='dot'>
            <FontAwesomeIcon icon={icons[1]} className={bounceClasses[1]} /> {/* Appliquer la classe d'animation */}
          </div>
          <div className='right'>
            <p>
              <span>✉️ &nbsp;Partagez-nous votre contenu</span><br/><br/>
              Transmettez-nous vos ressources utiles&nbsp;: textes, images, charte graphique... Vous pouvez nous faire part de vos préférences sur l'agencement de votre site via visioconférence, appel ou par mail.
            </p>
          </div>
        </div>

        <div className='step step-3' style={{ opacity: opacities[2] }}>
          <div className='left'>
            <p>Troisième étape</p>
          </div>
          <div className='progress-bar'></div>
          <div className='dot'>
            <FontAwesomeIcon icon={icons[2]} className={bounceClasses[2]} /> {/* Appliquer la classe d'animation */}
          </div>
          <div className='right'>
            <p>
              <span>🤝🏻&nbsp;Occupons-nous des détails</span><br/><br/>
              Après l'intégration de votre contenu, nous vous transmettons une première version du site afin d'ajuster ensemble chaque détail selon vos retours. Nous pouvons organiser un RDV via visioconférence ou appel afin que votre demande soit la plus claire possible.
            </p>
          </div>
        </div>

        <h3 id='progress-footer' style={{ opacity: footerOpacity }}>
          🎉&nbsp;Votre site est en ligne&nbsp;!&nbsp;🎉
        </h3>

        {/* Affiche ConfettiComponent seulement si showConfetti est true */}
        {showConfetti && <ConfettiComponent />}
      </section>
    </div>
  );
};

export default ProgressBarSection;
