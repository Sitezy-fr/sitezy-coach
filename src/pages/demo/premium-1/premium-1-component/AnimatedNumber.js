import React, { useEffect, useState, useRef } from 'react';

const AnimatedNumber = ({ number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null); // Référence pour l'élément

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Vérifie si l'élément est visible à 100 % dans le viewport
        if (top >= 0 && bottom <= viewportHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Vérifie immédiatement au cas où l'élément est déjà visible

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Ne pas démarrer l'animation si l'élément n'est pas visible

    const duration = 2000; // Durée de l'animation en ms
    const end = number;
    const incrementTime = duration / end;

    // Délai avant de démarrer l'animation
    const delay = 500; // Délai en ms

    const timerId = setTimeout(() => {
      let timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < end) {
            return prevCount + 1; // Incrémenter le chiffre
          } else {
            clearInterval(timer);
            return end;
          }
        });
      }, incrementTime);

      return () => clearInterval(timer); // Nettoyage de l'intervalle
    }, delay); // Démarrer l'animation après le délai

    return () => clearTimeout(timerId); // Nettoyage du timeout
  }, [isVisible, number]);

  return <h2 ref={ref}>{count}</h2>; // Ajout de la référence à l'élément
};

export default AnimatedNumber;
