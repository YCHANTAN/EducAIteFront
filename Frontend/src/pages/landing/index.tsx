import React from 'react';
import LandingPageNavbar from '../../components/LandingPageNavbar';
import LandingPageContent from './components/LandingPage';
import FeatureCarousel from './components/FeatureCarousel'; 
import Developers from './components/Developers';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    // 2. Changed h-screen (fixed) to min-h-screen (grows), and locked overflow-x only
    <div className="min-h-screen w-full bg-black text-white font-sans overflow-x-hidden relative antialiased">
      
      {/* The Navigation Bar stays fixed at the top */}
      <LandingPageNavbar />

      {/* --- SECTION 1: LANDING CONTENT --- */}
      <div className="relative w-full h-screen overflow-hidden">
        <LandingPageContent />
      </div>
      {/* --- SECTION 2: CAROUSEL --- */}
      <FeatureCarousel />
      {/* --- SECTION 3: Developers --- */}
      <Developers />
      {/* --- SECTION 4: Footer --- */}
      <Footer />
    </div>
  );
};

export default LandingPage;