import React from 'react';
import '../premium-2/premium-2.scss';
import Navbar from './premium-2-component/Navbar';
import Header from './premium-2-component/Header';
import Sante from './premium-2-component/Sante';
import Divider from './premium-2-component/Divider';
import Contact from './premium-2-component/Contact';
import Reviews from './premium-2-component/Reviews';
import Services from './premium-2-component/Service';
import ScrollToTop from './premium-2-component/ScrollToTop';
import Footer from './premium-2-component/Footer';


const Premium2 = () => {
  return (

    <div id="premium-2">
      
      <Navbar />

      <Header />

      <Sante />

      <Divider />

      <Services />

      <Reviews />

      <Contact />

      <ScrollToTop />

      <Footer />

    </div>

    
  );
};

export default Premium2;