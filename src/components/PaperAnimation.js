import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Paper.json'; // Chemin vers ton fichier JSON


const PaperAnimation = () => {
  return (
    <div>
      <Lottie
        animationData={animationData} // Ici, tu utilises l'attribut `animationData` au lieu de `src`
        loop={true}  // Définit si l'animation doit boucler (true ou false)
        style={{ height: '200px', width: '200px' }} // Ajuste la taille selon tes besoins
      />
    </div>
  );
};

export default PaperAnimation;
