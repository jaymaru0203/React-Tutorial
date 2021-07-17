import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import GetInTouchSection from './Components/GetInTouchSection'
import FooterSection from './Components/FooterSection'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <GetInTouchSection />
      <FooterSection />
    </div>
  );
}

export default App;
