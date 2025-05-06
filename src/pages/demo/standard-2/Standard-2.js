import React from 'react';
import '../standard-2/standard-2.scss';
import Navbar from './standard-2-component/Navbar';
import Header from './standard-2-component/Header';
import About from './standard-2-component/About';
import Citation from './standard-2-component/Citation';
import Services from './standard-2-component/Services';
import Testimonials from './standard-2-component/Testimonials';
import Contact from './standard-2-component/Contact';
import Footer from './standard-2-component/Footer';

const Standard2 = () => {
  return (
    <div className="standard-2">

      <Navbar />

      <Header />

      <About />

      <Citation />

      <Services />

      <Testimonials />

      <Contact />

      <Footer />

    </div>
  );
};

export default Standard2;