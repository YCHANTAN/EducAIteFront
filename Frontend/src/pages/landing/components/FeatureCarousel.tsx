import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerX = useTransform(scrollYProgress, [0, 0.3], ["-100%", "0%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);


  const galleryY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  
  const earthY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <div ref={containerRef} id="features" className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black antialiased">
      

      <motion.div 
          style={{ y: earthY, backgroundImage: `url(${EarthImage})` }}
          className="absolute bottom-0 left-0 w-full h-[55vh] bg-cover bg-[center_top] z-30"
        />

      {/* --- HEADER TEXT BOX (Slides in from Left) --- */}
      <motion.div 
        style={{ x: headerX, opacity: headerOpacity }}
        className="absolute top-0 left-0 bg-black pt-[12vh] pb-[6vh] px-[10vw] rounded-br-[6vw] z-30 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] pointer-events-auto"
      >
        <h2 className="text-[32px] md:text-[44px] font-bold mb-4 tracking-tighter leading-tight text-white">
          Get to know educ<span className="text-[#00CEC8]">AI</span>te
        </h2>
        <p className="text-white/70 text-base md:text-xl font-medium leading-relaxed">
          Discover the capabilities and efficiency we offer.
        </p>
      </motion.div>

      {/* --- NEW 3D CIRCULAR GALLERY (Pops up from below) --- */}
      <motion.div 
        style={{ y: galleryY }}
        className="absolute inset-0 z-20 pt-[15vh]"
      >
        <CircularGallery 
          items={carouselItems} 
          bend={3} 
          textColor="#ffffff" 
          borderRadius={0.05}
          font="bold 32px sans-serif"
        />
      </motion.div>

    </div>
  );
};

export default FeatureCarousel;