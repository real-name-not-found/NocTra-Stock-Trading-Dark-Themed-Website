import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Home />} />
        <Route path='/orders' element={<Home />} />
        <Route path='/holdings' element={<Home />} />
        <Route path='/positions' element={<Home />} />
        <Route path='/funds' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

