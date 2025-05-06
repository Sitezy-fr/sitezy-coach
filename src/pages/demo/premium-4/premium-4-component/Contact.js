import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id='contact' className="contact">
      <div className="contact__container" data-aos="fade-up">
        {/* Section gauche: FAQ + Contact */}
        <div className="contact__left">
          <h3 className="contact__title">FAQ</h3>

          <div className="contact__faq">
            <div className="faq__item" onClick={() => toggleFAQ(0)}>
              <div className="faq__question">
                Quels sont les bienfaits d'un entrainement régulier ?
                <span className={`chevron ${activeIndex === 0 ? 'open' : ''}`}><FontAwesomeIcon icon={faChevronDown} /></span>
              </div>
              {activeIndex === 0 && <div className="faq__answer">L'exercice régulier améliore la santé physique et mentale.</div>}
            </div>

            <div className="faq__item" onClick={() => toggleFAQ(1)}>
              <div className="faq__question">
                À quelle fréquence devrais-je m'entraîner ?
                <span className={`chevron ${activeIndex === 1 ? 'open' : ''}`}><FontAwesomeIcon icon={faChevronDown} /></span>
              </div>
              {activeIndex === 1 && <div className="faq__answer">Il est recommandé de s'entraîner au moins 3 à 5 fois par semaine.</div>}
            </div>

            <div className="faq__item" onClick={() => toggleFAQ(2)}>
              <div className="faq__question">
                Que dois-je manger avant et après un entraînement ?
                <span className={`chevron ${activeIndex === 2 ? 'open' : ''}`}><FontAwesomeIcon icon={faChevronDown} /></span>
              </div>
              {activeIndex === 2 && <div className="faq__answer">Avant l'entraînement, mangez un mélange de glucides et de protéines. Après, privilégiez les protéines pour favoriser la récupération musculaire.</div>}
            </div>

            <div className="faq__item" onClick={() => toggleFAQ(3)}>
              <div className="faq__question">
                Combien de temps faut-il pour voir des résultats ?
                <span className={`chevron ${activeIndex === 3 ? 'open' : ''}`}><FontAwesomeIcon icon={faChevronDown} /></span>
              </div>
              {activeIndex === 3 && <div className="faq__answer">Les résultats peuvent varier, mais des changements visibles apparaissent généralement en 4 à 6 semaines avec un effort constant.</div>}
            </div>
          </div>

          <div className="contact__info">
            <div className='contact__phone'>
                <a href='tel:0607080910'><i><FontAwesomeIcon icon={faPhone} /></i></a>
                <p><span>Par Téléphone :</span> <br></br>06 07 08 09 10</p>
            </div>
            
            <div className='contact__mail'>
                <a href='mailto:contact@fusion.fr'><i><FontAwesomeIcon icon={faEnvelope} /></i></a>
                <p><span>Par Email:</span><br></br> contact@fusion.fr</p>
            </div>
            
          </div>
        </div>

        {/* Section droite: Formulaire */}
        <div className="contact__right">
          <h3 className="contact__title">Me contacter</h3>

          <form className="contact__form">
            <div className="form__group">
              <label htmlFor="name"></label>
              <input type="text" id="name" placeholder="Votre nom" />
            </div>

            <div className="form__group">
              <label htmlFor="email"></label>
              <input type="email" id="email" placeholder="Votre mail" />
            </div>

            <div className="form__group">
              <label htmlFor="subject"></label>
              <input type="text" id="subject" placeholder="Sujet du message" />
            </div>

            <div className="form__group">
              <label htmlFor="message"></label>
              <textarea id="message" rows="5" placeholder="Écrivez votre message"></textarea>
            </div>

            <button type="submit" className="contact__btn">Envoyer &nbsp;<i><FontAwesomeIcon icon={faPaperPlane} /></i></button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
