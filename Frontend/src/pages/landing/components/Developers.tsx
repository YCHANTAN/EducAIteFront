import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Stack from './../../../components/Stack'; // Adjust this path if your Shadcn CLI placed it somewhere else!

// Make sure this path matches where your Earth image is actually located!
import EarthImage from '../../../assets/earthbg.svg'; 

const images = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
];

const Developers = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] 
  });

  const headerX = useTransform(scrollYProgress, [0, 0.4], ["-100%", "0%"]);
  const stackY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const earthY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div 
      ref={containerRef} 
      id="about" 
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent antialiased pt-[20vh] pb-[10vh]"
    >
      
      {/* --- EARTH BACKGROUND (Now correctly behind everything!) --- */}
      <motion.div 
        style={{ y: earthY, backgroundImage: `url(${EarthImage})` }}
        // CHANGED: z-30 is now z-0
        className="absolute bottom-0 left-0 w-full h-[55vh] bg-cover bg-[center_top] z-0 pointer-events-none"
      />

      {/* --- HEADER TEXT BOX (z-30: Front layer) --- */}
      <motion.div 
        style={{ x: headerX }}
        className="absolute top-0 left-0 bg-black pt-[12vh] pb-[6vh] px-[10vw] rounded-br-[6vw] z-30 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)]"
      >
        <h2 className="text-[32px] md:text-[44px] font-bold mb-4 tracking-tighter leading-tight text-white">
          Meet the Innovators and Developers
        </h2>
        <p className="text-white/70 text-base md:text-xl font-medium leading-relaxed">
          Discover the brains and builder of the educ<span className="text-[#00CEC8]">AI</span>te
        </p>
      </motion.div>

      {/* --- INTERACTIVE STACK CONTAINER (z-20: Middle layer) --- */}
      <motion.div 
        style={{ y: stackY }}
        className="relative z-20 w-[320px] h-[400px] md:w-[450px] md:h-[550px] mt-[10vh]"
      >
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
              className="w-full h-full object-cover rounded-[32px] shadow-2xl pointer-events-none"
            />
          ))}
        />
      </motion.div>

    </div>
  );
};

export default Developers;