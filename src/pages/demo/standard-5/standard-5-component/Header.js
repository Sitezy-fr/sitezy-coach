import React, { useEffect, useState } from "react";

const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Définir la hauteur du header une seule fois au chargement
    setHeaderHeight(window.innerHeight);
  }, []); // Le tableau vide garantit que cela ne s'exécute qu'une seule fois

  const scrollToNextSection = () => {
    // Trouve la prochaine section en partant du header
    const nextSection = document.getElementById("about");
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="header"
      className="header"
      style={{ height: `${headerHeight}px` }} // Appliquer la hauteur en pixels
    >
      <div className="header__content">
        <h1>Become stronger</h1>
        <p>by MB-FIT</p>
      </div>
      <div className="header__scroll-indicator" onClick={scrollToNextSection}>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
