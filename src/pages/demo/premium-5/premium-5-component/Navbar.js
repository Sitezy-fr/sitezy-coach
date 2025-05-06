import React, { useEffect, useState } from 'react';
import logo from '../premium-5-images/logo-muscu.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoWidth, setLogoWidth] = useState(1);
  const [logoMargin, setLogoMargin] = useState(0);
  const [bgColor, setBgColor] = useState('transparent');
  const [showSlashRight, setShowSlashRight] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const firstSectionHeight = document.querySelector('.home').offsetHeight;

    if (scrollTop > firstSectionHeight * 0.31) {
      setBgColor('#010101');
    } else {
      setBgColor('transparent');
    }

    if (scrollTop > windowHeight * 0.31) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    const newWidth = Math.min(100, 1 + (scrollTop / (windowHeight * 0.25)) * (100 - 1));
    const newMargin = Math.min(20, (scrollTop / (windowHeight * 0.25)) * 20);

    setLogoWidth(newWidth);
    setLogoMargin(newMargin);

    if (scrollTop > 1) {
      setShowSlashRight(true);
    } else {
      setShowSlashRight(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - 74;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav id="navbar" style={{ backgroundColor: bgColor, transition: 'background-color 0.3s ease' }}>
      <ul className="navbar__menu">
        <li className="navbar__item" onClick={() => scrollToSection('home')}>Accueil</li>
        <li className="navbar__slash">｜</li>
        <li className="navbar__item" onClick={() => scrollToSection('services')}>Services</li>
        <li className="navbar__slash">｜</li>
        <li className="navbar__logo" style={{ margin: `0 ${isMobile ? 0 : logoMargin}px`, width: `${logoWidth}px`, opacity: isScrolled ? 1 : 0 }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: isMobile ? '75px' : '100px',
              width: 'auto',
              filter: 'drop-shadow(1px 1px 5px black)',
            }}
          />
        </li>
        <li className="navbar__slash-right" style={{ display: showSlashRight ? 'block' : 'none' }}>｜</li>
        <li className="navbar__item" onClick={() => scrollToSection('testimonials__container')}>Avis</li>
        <li className="navbar__slash">｜</li>
        <li className="navbar__item" onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
