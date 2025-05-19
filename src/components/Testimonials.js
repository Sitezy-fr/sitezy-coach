import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import googleLogo from "../images/google-logo.png"
import googleText from "../images/google-text.png"
import vert from "../images/vert.jpg"
import marron from "../images/marron.jpg"

const testimonials = [
    {
        logo: googleLogo,
        photo: vert,
        name: "Emy Vaillancourt",
        date: "Le 14 mai 2025",
        stars: "★★★★★",
        comment: "Respect du délai et du budget, pleins de conseils business. Je recommande leur expertise pour les lancements de projets"
    },
    {
        logo: googleLogo,
        photo: marron,
        name: "Yohann Peton (Yohann)",
        date: "Le 21 Mars 2025",
        stars: "★★★★★",
        comment: "Merci pour ce service incroyablement rapide. À partir de maintenant je passe par vous pour mon site."
    },
    {
        logo: googleLogo,
        photo: vert,
        name: "Micro Crèche TITCRECHE",
        date: "Le 07 Février 2025",
        stars: "★★★★★",
        comment: "Un excellent travail! Nous avons fait appel à leur service pour améliorer notre site internet, nous sommes entièrement satisfait du résultat. Je recommande leur service"
    },
    {
        logo: googleLogo,
        photo: vert,
        name: "Juste Moi",
        date: "Le 19 Décembre 2024",
        stars: "★★★★★",
        comment: "Sitezy gère notre SEO, très bon résultats et très bonne communication je recommande"
    },
    {
        logo: googleLogo,
        photo: marron,
        name: "Corneliu VAROSO",
        date: "Le 07 Novembre 2024",
        stars: "★★★★★",
        comment: "Merci pour tous ces conseils marketing et les avancées web fait sur mon site. Je recommande."
    },
    {
        logo: googleLogo,
        photo: marron,
        name: "IRH By GROUPACTION",
        date: "Le 04 Novembre 2024",
        stars: "★★★★★",
        comment: "Nous avons fait appel à l'agence Sitezy pour la création de 2 sites internet et nous sommes très satisfaits du résultat ! Équipe au top, réactive, flexible et à l'écoute. Un vrai bonheur de travailler avec cette agence ! Les tarifs proposés sont plus que compétitifs et le service après-vente est parfait !"
    },
    {
        logo: googleLogo,
        photo: vert,
        name: "Pascal",
        date: "Le 14 Septembre 2024",
        stars: "★★★★★",
        comment: "Service impeccable, très satisfait du résultat final. Je recommande vivement !"
    }
];

const MAX_LENGTH = 140;

const Testimonials = () => {
    const sliderRef = useRef(null);
    const [tooltipVisible, setTooltipVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [userInteracted, setUserInteracted] = useState(false);

    // Configuration du slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 1150, settings: { slidesToShow: 2 } }
        ],
        beforeChange: (oldIndex, newIndex) => {
            if (userInteracted) setTooltipVisible(false); // Cache les tooltips uniquement si l'utilisateur a interagi
        },
    };

    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleReadMore = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    // Gestion de l'interaction utilisateur
    const handleUserInteraction = () => {
        if (isMobile) {
            setTooltipVisible(false);
            setUserInteracted(true);
        }
    };

    // Détection de la taille d'écran pour activer les tooltips sur mobile par défaut
    useEffect(() => {
        const updateMobileStatus = () => {
            setIsMobile(window.innerWidth < 768);
            setTooltipVisible(window.innerWidth < 768);
        };
        updateMobileStatus();
        window.addEventListener('resize', updateMobileStatus);
        return () => window.removeEventListener('resize', updateMobileStatus);
    }, []);

    return (
        <section id='testimonials' className='testimonials'>
            <div className='testimonials-title'>
                <p>EXCELLENT</p>
                <div className='stars-container-top'>
                    <div className='stars'></div>
                    <div className='stars'></div>
                    <div className='stars'></div>
                    <div className='stars'></div>
                    <div className='stars'></div>
                </div>
                <img src={googleText} alt="Logo Google" className="logo-testimonials" />
            </div>

            <Slider {...settings} className="testimonial-carousel">
                {testimonials.map((testimonial, index) => {
                    const isLongComment = testimonial.comment.length > MAX_LENGTH;
                    const isExpanded = expandedIndex === index;

                    return (
                        <div className="testimonial-content" key={index} onClick={handleUserInteraction} onTouchStart={handleUserInteraction}>
                            <div className="google-logo">
                                <img src={testimonial.logo} alt="Avis Google" />
                            </div>
                            <div className='reviews-header'>
                                <div className='profile-img'>
                                    <img src={testimonial.photo} alt={`Client ${index + 1}`} />
                                </div>
                                <div className='profile-details'>
                                    <h3 className='client-name'>{testimonial.name}</h3>
                                    <p className='date'>{testimonial.date}</p>
                                </div>
                            </div>
                            <div className='stars-container'>
                                <div className='stars'></div>
                                <div className='stars'></div>
                                <div className='stars'></div>
                                <div className='stars'></div>
                                <div className='stars'></div>
                                <div className="verified">
                                <div className={`tooltip ${tooltipVisible ? 'initial' : ''}`}>
                                    <a href="https://www.trustindex.io" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                                        TrustIndex
                                    </a>{" "}
                                    vérifie que la source originale de l'avis est Google.
                                </div>

                                </div>
                            </div>
                            <div className='comment-container'>
                                <p className={`comment ${isExpanded ? 'expanded' : ''}`}>
                                    {isExpanded ? testimonial.comment : 
                                    (isLongComment ? `${testimonial.comment.substring(0, MAX_LENGTH)}...` : testimonial.comment)}
                                </p>
                            </div>
                            <div className='read-more-container'>
                                {isLongComment && (
                                    <button className='read-more' onClick={() => handleReadMore(index)}>
                                        {isExpanded ? 'Lire moins' : 'Lire la suite'}
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </section>
    );
};

export default Testimonials;