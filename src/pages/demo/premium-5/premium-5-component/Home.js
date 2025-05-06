import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import scrollAnimation from '../premium-5-animation/scroll.json';
import logo from '../premium-5-images/logo-muscu.png';

const Home = ({ isScrolled, scrollToServices }) => {
  const [homeHeight, setHomeHeight] = useState(window.innerHeight);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scrollAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    // Mettre la hauteur au chargement initial de la page
    setHomeHeight(window.innerHeight);
  }, []); // Utiliser un tableau de dépendances vide pour ne le faire qu'une seule fois

  return (
    <div id='home' className="home" style={{ height: `${homeHeight}px` }}>
      <div className="home__content">
        <div className='home__logo fade-out' style={{ opacity: isScrolled ? 0 : 1 }}>
          <img src={logo} alt="Logo" data-aos="fade-in" />
        </div>
        <h1 className="home__title" data-aos="fade-in">Atteignez la meilleure version de vous-même</h1>
        <div className="home__animation" onClick={scrollToServices} style={{ cursor: 'pointer' }}>
          <Lottie options={defaultOptions} height={70} width={70} />
        </div>
      </div>
    </div>
  );
};

export default Home;
