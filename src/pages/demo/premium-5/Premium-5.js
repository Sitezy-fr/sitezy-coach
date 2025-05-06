import React, { useEffect, useState, useRef } from "react";
import Navbar from "./premium-5-component/Navbar";
import Home from "./premium-5-component/Home";
import Services from "./premium-5-component/Services";
import About from "./premium-5-component/About";
import Contact from "./premium-5-component/Contact";
import Presentation from "./premium-5-component/Presentation";
import Stats from "./premium-5-component/Stats";
import Testimonials from "./premium-5-component/Testimonials";
import ScrollToTop from "./premium-5-component/ScrollToTop";
import Footer from "./premium-5-component/Footer";
import './premium-5.scss';

function Premium5() {
  const servicesRef = useRef(null);
  
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    if (scrollTop > windowHeight * 0.31) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToServices = () => {
    const offsetTop = servicesRef.current.getBoundingClientRect().top + window.scrollY - 75;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  return (
    <div className="premium-5">
      
      <Navbar />

      <Home isScrolled={isScrolled} scrollToServices={scrollToServices} />

      <div ref={servicesRef}>
        <About />
      </div>

      <Presentation />

      <Stats />

      <Services />

      <Testimonials />

      <Contact />

      <ScrollToTop />

      <Footer />

    </div>
  );
}

export default Premium5;
