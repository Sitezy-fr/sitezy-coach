import React, { useState, useEffect } from "react";
import emilie from "../images/Emilie.jpg";
import seb from "../images/Seb.jpg";
import tess from "../images/Tess.jpg";
import antoine from "../images/Antoine.jpg";
import fabien from "../images/Fabien.jpg";
import guillaume from "../images/Guillaume.jpg";
import victoria from "../images/Victoria.jpg";

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Antoine", position: "Directeur général", image: antoine, description: "#toutestpossible #lovestratégie #geek #motard" },
    { id: 2, name: "Fabien", position: "Chef de projet", image: fabien, description: "#fautquonteste #onpeutfaireça? #lapêche? #lamer<3" },
    { id: 3, name: "Guillaume", position: "Architecte IT", image: guillaume, description: "#toutestcarré #imbatman #athlete #mentaldacier #geek #vivelamontagne" },
    { id: 4, name: "Victoria", position: "Webdesigner & Graphiste", image: victoria, description: "#lartestpartout #challengeaccepted #jungle #elleestouTess?" },
    { id: 5, name: "Émilie", position: "Chargé de projet digital", image: emilie, description: "#okgo #cestdejafait #timidemaisleader #discretemaisefficace" },
    { id: 6, name: "Seb", position: "Developpeur junior", image: seb, description: "#jadorelecode #lovejavascript #basecremeourien #japon" },
    { id: 7, name: "Tess", position: "Égérie Sitezy", image: tess, description: "#jesuisuneprincesse #etjelesais #sheldon #monsieurporc" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Détecte la largeur de l'écran et ajuste le nombre de cartes visibles
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setVisibleCards(3);
      } else if (width >= 800) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleTeamMembers = [
    ...teamMembers.slice(currentIndex, currentIndex + visibleCards),
    ...teamMembers.slice(0, Math.max(0, currentIndex + visibleCards - teamMembers.length)),
  ];

  return (
    <section className="team-section">
        <div className="details">
            <h2 className="team-title">La Sitezy's team</h2>
            <p className="team-subtitle">Découvrez notre équipe à taille humaine, composée de spécialistes passionnés, agiles et performants</p>
        </div>
      <div className="carousel">
        <button className="carousel-button left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-track">
          {visibleTeamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Team;
