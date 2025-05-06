import React from 'react';
import '../standard-5/standard-5.scss';
import Navbar from './standard-5-component/Navbar';
import Header from './standard-5-component/Header';
import About from './standard-5-component/About';
import Services from './standard-5-component/Services';
import Transformation from './standard-5-component/Transformation';
import Contact from './standard-5-component/Contact';
import Footer from './standard-5-component/Footer';

const Standard5 = () => {
  return (
    <div className="standard-5">

      <Navbar />

      <Header />

      <About />

      <Services />

      <Transformation />

      <Contact />

      <Footer />

    </div>
  );
};

export default Standard5;