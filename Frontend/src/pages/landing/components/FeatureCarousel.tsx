import React from 'react';
// Import your new CircularGallery!
import CircularGallery from '../../../components/CircularGallery'; 
import EarthImage from '../../../assets/earthbg.svg';

// The CircularGallery expects an array of objects with 'image' and 'text'
const carouselItems = [
  { image: 'https://picsum.photos/seed/educaite1/800/600', text: 'Smart Analytics' },
  { image: 'https://picsum.photos/seed/educaite2/800/600', text: 'AI Flashcards' },
  { image: 'https://picsum.photos/seed/educaite3/800/600', text: 'Progress Tracking' },
  { image: 'https://picsum.photos/seed/educaite4/800/600', text: 'Resume Builder' },
  { image: 'https://picsum.photos/seed/educaite5/800/600', text: 'AI Study Buddy' },
];

const FeatureCarousel = () => {
  return (
    <div id="features" className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black antialiased">
      
      {/* --- FULL PAGE ZOOMED EARTH BACKGROUND --- */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 z-0 scale-[1.5] transition-transform duration-1000"
        style={{ 
          backgroundImage: `url(${EarthImage})` 
        }}
      />

      {/* --- HEADER TEXT BOX (Top Left) --- */}
      <div className="absolute top-0 left-0 bg-black pt-[12vh] pb-[6vh] px-[10vw] rounded-br-[6vw] z-30 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] pointer-events-auto">
        <h2 className="text-[32px] md:text-[44px] font-bold mb-4 tracking-tighter leading-tight">
          Get to know educ<span className="text-[#00CEC8]">AI</span>te
        </h2>
        <p className="text-white/70 text-base md:text-xl font-medium leading-relaxed">
          Discover the capabilities and efficiency we offer.
        </p>
      </div>

      {/* --- NEW 3D CIRCULAR GALLERY --- */}
      {/* Positioned to fill the screen, but pushed down slightly so it revolves around the text! */}
      <div className="absolute inset-0 z-20 pt-[15vh]">
        <CircularGallery 
          items={carouselItems} 
          bend={3} 
          textColor="#ffffff" 
          borderRadius={0.05}
          font="bold 32px sans-serif"
        />
      </div>

    </div>
  );
};

export default FeatureCarousel;