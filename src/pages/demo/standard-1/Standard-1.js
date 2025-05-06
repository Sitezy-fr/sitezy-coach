import React from 'react';
import '../standard-1/standard-1.scss';
import Navbar from './standard-1-component/Navbar';
import Header from '../standard-1/standard-1-component/Header';
import About from './standard-1-component/About';
import Services from './standard-1-component/Services';
import Testimonials from './standard-1-component/Testimonials';
import Contact from './standard-1-component/Contact';


const Standard1 = () => {
  return (
    <div className="standard-1">

      <Navbar />

      <Header />

      <About />

      <Services />

      <Testimonials />

      <Contact />

    </div>
  );
};

export default Standard1;