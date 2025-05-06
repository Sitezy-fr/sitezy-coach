import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire ici (ex. envoyer les données via API)
    console.log(formData);
    alert("Votre message a été envoyé !");
    // Réinitialiser le formulaire après l'envoi
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact-section" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div className="container">
        <div className="left-section">
          <h2>JE SUIS À VOTRE ÉCOUTE</h2>
          <p>
            Vous avez des questions, des suggestions ou souhaitez prendre rendez-vous ? N'hésitez pas à me contacter via le formulaire ci-contre, je répondrai à toutes vos questions dans les plus brefs délais.
          </p>
          <address>
            251 Avenue de la Liberté<br />
            75001, Paris<br />
            <a href="mailto:contact@lea-martinez.fr">contact@lea-martinez.fr</a>
          </address>
        </div>
        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Prénom</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adresse Mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Contenu de votre message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required
              ></textarea>
            </div>
            <button type="submit">Envoyer votre message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
