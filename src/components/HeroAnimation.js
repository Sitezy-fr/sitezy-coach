import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Hero.json'; // Chemin vers ton fichier JSON


const HeroAnimation = () => {
  return (
    <div>
      <Lottie className='hero-container'
        animationData={animationData} // Ici, tu utilises l'attribut `animationData` au lieu de `src`
        loop={true}  // Définit si l'animation doit boucler (true ou false)
      />
    </div>
  );
};

export default HeroAnimation;
