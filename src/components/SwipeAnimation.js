import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Swipe.json';


const SwipeAnimation = () => {
  return (
    <div>
      <Lottie
        animationData={animationData} // Ici, tu utilises l'attribut `animationData` au lieu de `src`
        loop={true}  // Définit si l'animation doit boucler (true ou false)
        style={{ height: '100px', width: '100px' }} // Ajuste la taille selon tes besoins
      />
    </div>
  );
};

export default SwipeAnimation;
