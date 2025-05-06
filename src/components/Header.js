import React, { useEffect, useRef, useState } from 'react';
import mockupVideo from '../images/sitezy7.mp4';
import mockupImage from '../images/mockup-mobile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import HeroAnimation from './HeroAnimation';

const Header = () => {
    const videoRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

    useEffect(() => {
        // Fonction pour mettre à jour l'état en fonction de la taille de la fenêtre
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1024);
        };

        // Ajouter un écouteur d'événements pour la redimension de la fenêtre
        window.addEventListener('resize', handleResize);

        // Supprimer l'écouteur d'événements lors du démontage du composant
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Lecture automatique de la vidéo si on est en mode desktop et que la référence de la vidéo existe
        if (isDesktop && videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("La vidéo n'a pas pu se lancer automatiquement : ", error);
            });
        }
    }, [isDesktop]); // Rejouer la vidéo si l'état desktop change

    // Fonction pour faire défiler jusqu'à la section "presentation"
    const scrollToPresentation = () => {
        const presentationSection = document.getElementById('reviews-summary');
        if (presentationSection) {
            const navbarHeight = 90; // Ajustez cette valeur si la navbar a une hauteur différente
            const sectionPosition = presentationSection.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = sectionPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <header id='header' className="header">
            <div className="header__content">
                <div className="header__text">
                    <div className="tag">
                        Coachs sportifs uniquement
                    </div>
                    <h1>
                        <strong>Votre site web <br /> en toute <span className="hand-drawn">simplicité</span></strong>
                    </h1>
                    <p className='header__subtitle'>Construisons <span>ensemble</span> votre site internet pour attirer de <span>nouveaux clients</span> et <span>augmenter vos ventes</span>. Pour une fois, choisissez la <span>facilité !</span></p>
                    <p><FontAwesomeIcon icon={faCircleCheck} />&nbsp; Un seul paiement, pas d'abonnement, pas d'engagement</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} />&nbsp; Pas besoin de coder ou de créer son site soi-même</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} />&nbsp; Un tarif <u>vraiment</u> adapté aux indépendants</p>
                </div>
                <div className="header__image">
                    <HeroAnimation />
                </div>
            </div>
            <div className="header__chevron" onClick={scrollToPresentation} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </header>
    );
};

export default Header;
