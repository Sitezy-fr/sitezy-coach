import React from 'react';
import euro from '../images/euro.png'
import avance from '../images/avance.png'
import expert from '../images/expert.png'
import refund from '../images/refund.png'
import existence from '../images/existence.png'
import tendance from '../images/tendance.png'

const Presentation = () => {
    const cards = [
        {
            title: "Tarifs très avantageux",
            image: euro, // Remplacez par l'URL de votre illustration
            description: "Nos offres débutent à partir de 299€ contre 2000€ à 3000€ pour les autres agences."
        },
        {
            title: "Rendu final connu à l'avance",
            image: avance, // Remplacez par l'URL de votre illustration
            description: "Évitez les mauvaises surprises en choisissant vous-même votre design préféré."
        },
        {
            title: "Design tendance",
            image: tendance, // Remplacez par l'URL de votre illustration
            description: "Nos développeurs veillent continuellement pour toujours être au coeur des tendances."
        },
        {
            title: "Équipe d'expert du digital",
            image: expert, // Remplacez par l'URL de votre illustration
            description: "Travaillez avec une équipe de professionnels qui excellent dans le digital."
        },
        {
            title: "11 ans d'existence",
            image: existence, // Remplacez par l'URL de votre illustration
            description: "Nous proposons nos services depuis plus d'une décennie avec toujours la même passion."
        },
        {
            title: "Satisfait ou remboursé",
            image: refund, // Remplacez par l'URL de votre illustration
            description: "Soyez sûr d'obtenir un site qui vous plaît, sinon vous êtes remboursé à 100%."
        },
    ];

    return (
        <section className="presentation">
            
            <div class="details">
            <h2>Un processus qui fonctionne</h2>
            <p>Découvrez pourquoi nous sommes l'agence&nbsp;n°1 dans la création de site pour coach sportif</p>
          </div>
            <div className="presentation__cards">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <div
                            className="card__image"
                            style={{ backgroundImage: `url(${card.image})` }}
                        />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Presentation;
