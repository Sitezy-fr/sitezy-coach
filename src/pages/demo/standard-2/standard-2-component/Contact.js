import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="contact-title">Contactez-moi&nbsp;✉️ </h2>
            <p className='contact-subtitle'>Vous avez des questions, des suggestions ou souhaitez prendre rendez-vous ? N'hésitez pas à me contacter via les liens ci-dessous, je répondrai à toutes vos questions dans les plus brefs délais.</p>
            <div className="contact-info">
                    <p className="contact-item">
                        <ul className="social-links">
                            <li>
                                <a href="tel:+33607080910"><i><FontAwesomeIcon icon={faPhone} /></i></a>
                            </li>
                            <li>
                                <a href="mailto:contact@chloe-fit.fr" ><i><FontAwesomeIcon icon={faEnvelope} /></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faFacebookF} /></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faInstagram} /></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                                <i><FontAwesomeIcon icon={faTiktok} /></i>
                                </a>
                            </li>
                        </ul>
                    </p>

            </div>
        </section>
    );
};

export default Contact;
