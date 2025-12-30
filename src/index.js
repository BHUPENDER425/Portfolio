import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HeroSection from './component/HeroSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div >
    <HeroSection/>
  </div>
);

reportWebVitals();
