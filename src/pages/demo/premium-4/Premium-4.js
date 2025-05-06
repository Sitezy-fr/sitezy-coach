import React from 'react';
import '../premium-4/premium-4.scss';
import Navbar from './premium-4-component/Navbar';
import Header from './premium-4-component/Header';
import Presentation from './premium-4-component/Presentation';
import Transformation from './premium-4-component/Transformation';
import About from './premium-4-component/About';
import StepSuccess from './premium-4-component/StepSuccess';
import Services from './premium-4-component/Services';
import Contact from './premium-4-component/Contact';
import ScrollToTop from './premium-4-component/ScrollToTop';
import Footer from './premium-4-component/Footer';

const Premium4 = () => {
  return (

    <div id="premium-4">
      
      <Navbar />

      <Header />

      <Presentation />

      <About />
      
      <StepSuccess />

      <Transformation />

      <Services />

      <Contact />

      <ScrollToTop />

      <Footer />

    </div>

    
  );
};

export default Premium4;