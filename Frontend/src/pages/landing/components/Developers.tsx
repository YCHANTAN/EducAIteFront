import React from 'react';
import Stack from './../../../components/Stack'; // Adjust this path if your Shadcn CLI placed it somewhere else!

const images = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
];

const Developers = () => {
  return (
    <div id="about" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent antialiased pt-[20vh] pb-[10vh]">
      
      {/* --- HEADER TEXT BOX --- */}
      {/* Matches the exact styling and viewport positioning of the FeatureCarousel header */}
      <div className="absolute top-0 left-0 bg-black pt-[12vh] pb-[6vh] px-[10vw] rounded-br-[6vw] z-30 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)]">
        <h2 className="text-[32px] md:text-[44px] font-bold mb-4 tracking-tighter leading-tight">
          Meet the Innovators and Developers
        </h2>
        <p className="text-white/70 text-base md:text-xl font-medium leading-relaxed">
          Discover the brains and builder of the educ<span className="text-[#00CEC8]">AI</span>te
        </p>
      </div>

      {/* --- INTERACTIVE STACK CONTAINER --- */}
      {/* Centered with responsive sizing to look great on mobile and massive on desktop */}
      <div className="relative z-20 w-[320px] h-[400px] md:w-[450px] md:h-[550px] mt-[10vh]">
        <Stack
          randomRotation={false}
          sensitivity={200}
          sendToBackOnClick={true}
          autoplay={false}
          autoplayDelay={3000}
          pauseOnHover={false}
          cards={images.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt={`developer-${i + 1}`} 
              // Added rounded-[32px] and shadow to match your design!
              className="w-full h-full object-cover rounded-[32px] shadow-2xl pointer-events-none"
            />
          ))}
        />
      </div>

    </div>
  );
};

export default Developers; 