import React from 'react';
import coachImage from '../standard-2-images/about-chloe.jpg'; 
const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>À propos de moi&nbsp;🙋🏼‍♀️</h2>
                    <p>
                        En tant que coach sportive, mon but est de vous aider à atteindre vos objectifs qu'ils soient physique ou de bien-être.
                        Avec plus de 6 ans d'expérience, je propose des programmes personnalisés qui incluent l'entraînement physique, 
                        la nutrition et la motivation.<br></br> <br></br> Mon approche est axée sur le développement de la force, la flexibilité et la 
                        confiance en soi, pour que vous puissiez devenir la meilleure version de vous-même.
                    </p>
                </div>
                <div className="about-image">
                    <div className="image-container">
                        <img src={coachImage} alt="Coach" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
