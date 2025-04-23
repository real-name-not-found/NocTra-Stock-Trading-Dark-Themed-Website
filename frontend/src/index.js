import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom"; 
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/login/Login';
import About from './landing_page/About/About';
import PricingPage from './landing_page/Pricing/PricingPage';
// import Support from './landing_page/Support/supports'; // Support page temporarily removed
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/aboutus' element={<About />} />
      <Route path='/pricing' element={<PricingPage />} />
      {/* <Route path='/support' element={<Support />} /> Support page temporarily removed */}
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


