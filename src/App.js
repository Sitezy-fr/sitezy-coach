import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Premium1 from './pages/demo/premium-1/Premium-1';
import Premium2 from './pages/demo/premium-2/Premium-2';
import Premium4 from './pages/demo/premium-4/Premium-4';
import Premium5 from './pages/demo/premium-5/Premium-5';
import Standard1 from './pages/demo/standard-1/Standard-1';
import Standard2 from './pages/demo/standard-2/Standard-2';
import Standard5 from './pages/demo/standard-5/Standard-5';
import SuccessPage from './pages/SuccessPage';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en ms
      once: true, // Animation ne se produit qu'une seule fois
    });
  }, []);

  const InitialTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return (
    <Router>
      <InitialTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo/premium-1" element={<Premium1 />} />
        <Route path="/demo/premium-2" element={<Premium2 />} />
        <Route path="/demo/premium-4" element={<Premium4 />} />
        <Route path="/demo/premium-5" element={<Premium5 />} />
        <Route path="/demo/standard-1" element={<Standard1 />} />
        <Route path="/demo/standard-2" element={<Standard2 />} />
        <Route path="/demo/standard-5" element={<Standard5 />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

function App() {
  return <Main />;
}

export default App;
