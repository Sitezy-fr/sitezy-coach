import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-up">
    <p className="contact__subtitle">Vous avez une question</p>
      <h2 className="contact__title">Vous souhaitez me <span>contacter</span> ?</h2>
      <div className="contact__content">
        <div className="contact__info">
          <h3>Par <span>Téléphone</span> :</h3>
          <p><a href='tel:0607080910 '><FontAwesomeIcon icon={faPhoneVolume} />&nbsp;&nbsp; 06 07 08 09 10</a></p>

          <h3>Sur <span>mes réseaux sociaux</span> :</h3>
          <div className="contact__socials">
            <a href='https://facebook.com' target='blank'><FontAwesomeIcon icon={faFacebook} /></a>
            <a href='https://instagram.com' target='blank'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='https://tiktok.com' target='blank'> <FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        </div>

        <div className="contact__form">
            <h3>Par <span>Mail</span> :</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Votre nom <span>*</span></label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Votre adresse de messagerie <span>*</span></label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet de votre message<span>*</span></label>
              <input type="text" id="subject" name="subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Contenu de votre message <span>*</span></label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="contact__submit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
