import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';  // Importation d'EmailJS
import Swal from 'sweetalert2';  // Importation de SweetAlert2
import PaperAnimation from './PaperAnimation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyles = isHovered
    ? { ...styles.button, ...styles.buttonHover }
    : styles.button;

  const [focus, setFocus] = useState({
    nom: false,
    prenom: false,
    email: false,
    sujet: false,
    message: false,
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onFocus = (field) => {
    setFocus({ ...focus, [field]: true });
  };

  const onBlur = (field, event) => {
    if (event.target.value === '') {
      setFocus({ ...focus, [field]: false });
    }
  };

  // Fonction pour envoyer un email via EmailJS et afficher les alertes avec SweetAlert2
  const sendEmail = (event) => {
    event.preventDefault();
    
    // Envoi du formulaire avec EmailJS
    emailjs.sendForm('service_n7tz8qw', 'template_h0k80na', event.target, 'PsRrT8-QcQt4j-krc')
      .then((result) => {
          // Afficher une alerte de succès avec SweetAlert2
          Swal.fire({
            icon: 'success',
            title: 'Message envoyé !',
            text: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
            confirmButtonColor: '#8bc34a',
            confirmButtonText: 'OK'
          });
      }, (error) => {
          // Afficher une alerte d'erreur avec SweetAlert2
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard ou nous contacter directement via contact@sitezy.fr',
            confirmButtonColor: '#e32c39',
            confirmButtonText: 'Réessayer'
          });
      });

    // Reset du formulaire après envoi
    event.target.reset();
  };

  const inputWidth = windowWidth < 804 ? '300px' : '400px';
  const namemailInputWidth = windowWidth > 804 ? '200px' : '150px';
  const buttonWidth = windowWidth < 804 ? '300px' : '400px';
  const titleStyle = windowWidth < 804 
    ? { ...styles.title, flexDirection: 'column', marginBottom: '0px', marginTop: '25px' } 
    : { ...styles.title, marginTop: '25px' };

  return (
    <footer id='contact' style={styles.footer}>
      <div id="contact-footer" style={styles.container}>
        <div style={styles.leftColumn}>
          <h3 style={titleStyle}>Une question&nbsp;? <PaperAnimation /></h3>
          <p style={{ ...styles.paragraph, textAlign: 'center' }}>
            Vous souhaitez discuter avec nous de votre projet&nbsp;? Remplissez ce formulaire,
            nous vous répondrons dans les plus brefs délais. Pour toute autre demande,
            contactez-nous à l’adresse suivante&nbsp;: <a href="mailto:contact@sitezy.fr" style={styles.emailLink}>contact@sitezy.fr</a>
          </p>
        </div>

        <div style={styles.rightColumn}>
          <h3>Contact</h3>
          <form className="contact-form" onSubmit={sendEmail} style={styles.form}>
            <div className="namemail" style={styles.namemail}>
              <div style={styles.inputContainer}>
                <input
                  placeholder=" "
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  onFocus={() => onFocus('nom')}
                  onBlur={(e) => onBlur('nom', e)}
                  style={{ ...styles.inputSmall, width: namemailInputWidth }}
                />
                <label htmlFor="nom" style={focus.nom ? { ...styles.label, ...styles.floatingLabel } : styles.label}>Nom</label>
              </div>
              <div style={styles.inputContainer}>
                <input
                  placeholder=" "
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  onFocus={() => onFocus('prenom')}
                  onBlur={(e) => onBlur('prenom', e)}
                  style={{ ...styles.inputSmall, width: namemailInputWidth }}
                />
                <label htmlFor="prenom" style={focus.prenom ? { ...styles.label, ...styles.floatingLabel } : styles.label}>Prénom</label>
              </div>
            </div>
            <div className="email" style={styles.emailSubject}>
              <div style={styles.inputContainer}>
                <input
                  placeholder=" "
                  type="email"
                  id="email"
                  name="email"
                  required
                  onFocus={() => onFocus('email')}
                  onBlur={(e) => onBlur('email', e)}
                  style={{ ...styles.inputLarge, width: inputWidth }}
                />
                <label htmlFor="email" style={focus.email ? { ...styles.label, ...styles.floatingLabel } : styles.label}>Email</label>
              </div>
            </div>
            <div className="subject" style={styles.emailSubject}>
              <div style={styles.inputContainer}>
                <input
                  placeholder=" "
                  type="text"
                  id="sujet"
                  name="sujet"
                  required
                  onFocus={() => onFocus('sujet')}
                  onBlur={(e) => onBlur('sujet', e)}
                  style={{ ...styles.inputLarge, width: inputWidth }}
                />
                <label htmlFor="sujet" style={focus.sujet ? { ...styles.label, ...styles.floatingLabel } : styles.label}>Sujet</label>
              </div>
            </div>
            <div className="message" style={styles.message}>
              <div style={styles.inputContainer}>
                <textarea
                  placeholder=" "
                  id="message"
                  name="message"
                  rows="5"
                  required
                  onFocus={() => onFocus('message')}
                  onBlur={(e) => onBlur('message', e)}
                  style={{ ...styles.textarea, width: inputWidth }}
                ></textarea>
                <label htmlFor="message" style={focus.message ? { ...styles.label, ...styles.floatingLabel } : styles.label}>Écrivez votre message ici</label>
              </div>
            </div>
            <button id="submit" type="submit" style={{ ...buttonStyles, width: buttonWidth }} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>Envoyer</button>
          </form>
        </div>
      </div>

      {/* <a href='#' style={styles.link}>Mentions légales</a> */}
      <p style={styles.text}>
        &copy; 2013-{currentYear} Sitezy - Tous droits réservés.
      </p>
      
    </footer>
  );
};

const styles = {
  footer: {
    background: 'linear-gradient(45deg, #5272ffad, #5271ff 40%, #5271ff 90%, #5272ffad 100%)',
    background: 'transparent',
    padding: '100px 0 20px',
    textAlign: 'center',
    color: '#fff',
  },
  text: {
    margin: 0,
  },
  link: {
    color: 'white',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '50px',
    width: '80%',
    margin: '0 auto 70px',
    flexWrap: 'wrap',
  },
  leftColumn: {
    flex: '1',
    maxWidth: '415px',
    textAlign: 'left',
    margin: 'auto 0',
  },
  title: {
    fontSize: '1.75rem',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    textWrap: 'unset',
    flexDirection: 'column',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
    textWrap: 'unset',
    textAlign: 'left',
  },
  emailLink: {
    color: 'white',
    textDecoration: 'underline',
  },
  rightColumn: {
    flex: '1',
    maxWidth: '500px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: '27px',
  },
  namemail: {
    display: 'flex',
    justifyContent: 'center',
    gap: '4px',
    margin: '20px auto 0',
    maxWidth: '100%',
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  inputSmall: {
    boxSizing: 'border-box',
    height: '50px',
    fontSize: '17px',
    paddingLeft: '10px',
    border: 'none',
    borderRadius: '7px',
  },
  inputLarge: {
    boxSizing: 'border-box',
    height: '50px',
    fontSize: '17px',
    paddingLeft: '10px',
    border: 'none',
    borderRadius: '7px',
  },
  emailSubject: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: '100%',
  },
  message: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: '100%',
  },
  textarea: {
    boxSizing: 'border-box',
    fontSize: '17px',
    paddingLeft: '10px',
    paddingTop: '10px',
    resize: 'none',
    border: 'none',
    borderRadius: '7px',
  },
  button: {
    margin: 'auto',
    height: '50px',
    fontSize: '17px',
    backgroundColor: 'white',
    color: '#5271ff',
    border: 'transparent',
    cursor: 'pointer',
    borderRadius: '20px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#5271ff',
    color: '#fff',
    border: 'solid 1px #fff',
  },
  label: {
    position: 'absolute',
    top: '14px',
    left: '10px',
    fontSize: '17px',
    color: '#999',
    pointerEvents: 'none',
    transition: '0.2s ease all',
  },
  floatingLabel: {
    top: '-20px',
    left: '10px',
    fontSize: '12px',
    color: 'white',
  },
};

export default Footer;
