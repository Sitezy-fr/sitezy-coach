import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact' className="contact">
      <div className='contact__container'>
        <div className="contact__left">
            <h2 className="contact__title">Me contacter</h2>
            <p className="contact__description">
            Vous avez des questions, des suggestions ou souhaitez prendre un rendez-vous pour une consultation ? N'hésitez pas à me contacter via les liens ci-contre, je répondrais à toutes vos questions dans les plus brefs délais.
            </p>
        </div>
        <div className="contact__right">
            <div className="contact__item">
            <FaEnvelope className="contact__icon" />
            <a href="mailto:contact@mathieu-oliveira.fr" className="contact__info">contact@mathieu-oliveira.fr</a>
            </div>
            <div className="contact__item">
            <FaPhoneAlt className="contact__icon" />
            <a href="tel:+607080910" className="contact__info">06 07 08 09 10</a>
            </div>
            <div className="contact__item">
            <FaFacebook className="contact__icon" />
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact__info">Mathieu Oliveira</a>
            </div>
            <div className="contact__item">
            <FaInstagram className="contact__icon" />
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact__info">mathieu_oliveira</a>
            </div>
            <div className="contact__item">
            <FaTiktok className="contact__icon" />
            <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="contact__info">mathieu_oliveira</a>
            </div>
        </div>
      </div>
      <div className='footer'> 
        <div className='footer__container'>
            <p className="footer__copyright">© 2024 Mathieu Oliveira - Tous droits réservés.</p>
            <a href="/mentions-legales" className="footer__legal-notice">Mentions légales</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
