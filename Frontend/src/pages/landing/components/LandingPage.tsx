import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

import RobotImage from '../../../assets/robot.svg';
import EarthImage from '../../../assets/earthbg.svg';

import LightbulbIcon from '../../../assets/lg-lightbulb.svg';
import CalculatorIcon from '../../../assets/lg-calculator.svg';
import BooksIcon from '../../../assets/lg-books.svg';
import BeakersIcon from '../../../assets/lg-chemist.svg';
import GraduationCapIcon from '../../../assets/lg-gradhat.svg';
import CalendarIcon from '../../../assets/lg-calendar.svg';
import AtomIcon from '../../../assets/lg-atom.svg';
import LaptopIcon from '../../../assets/lg-laptop.svg';

const LandingPageContent = () => {
  const navigate = useNavigate();
  
  // 1. Reference to track this specific section's scroll position
  const containerRef = useRef(null);

  // 2. Track scroll progress from 0 (top) to 1 (scrolled past)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // --- 3. PARALLAX SPEEDS ---
  
  // Text & Buttons: Moves down slightly and fades out smoothly
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Earth Background & Robot (Kept exactly as you requested)
  const earthY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const robotY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // --- HORIZONTAL PARALLAX FOR ICONS ---
  // Using 'vw' (viewport width) ensures they are pushed far off the screen
  
  // Left Side Icons (Move negatively on the X axis)
  const moveLeftFast = useTransform(scrollYProgress, [0, 1], ["0vw", "-50vw"]);
  const moveLeftSlow = useTransform(scrollYProgress, [0, 1], ["0vw", "-25vw"]);

  // Right Side Icons (Move positively on the X axis)
  const moveRightFast = useTransform(scrollYProgress, [0, 1], ["0vw", "50vw"]);
  const moveRightSlow = useTransform(scrollYProgress, [0, 1], ["0vw", "25vw"]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      
      {/* --- HERO TEXT SECTION --- */}
      <motion.div 
        style={{ y: textY, opacity: opacityOut }}
        className="absolute top-[12vh] left-0 w-full flex flex-col items-center text-center px-4 z-50 pointer-events-none"
      >
        <h1 className="text-[56px] font-bold tracking-tight mb-4 leading-tight">
          Empower your learning with <span className="text-[#00CEC8]">AI</span>
        </h1>
        <p className="text-white/80 text-lg max-w-3xl font-medium">
          Transform your notes, track your growth and learn smarter with the power of AI - where technology meets education.
        </p>
      </motion.div>

      {/* --- THE SCENE CONTAINER --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        
        {/* 1. Central Robot (Midground) */}
        <motion.div 
          style={{ y: robotY }}
          className="absolute bottom-[18vh] left-1/2 -translate-x-1/2 w-[420px] z-20"
        >
          <img 
            src={RobotImage} 
            alt="AI Robot" 
            className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]" 
          />
        </motion.div>

        {/* 2. Earth Background (Background) */}
        <motion.div 
          style={{ y: earthY, backgroundImage: `url(${EarthImage})` }}
          className="absolute bottom-0 left-0 w-full h-[55vh] bg-cover bg-[center_top] z-30"
        />

        {/* --- 3. LEFT SIDE ICONS (Moving to the Left) --- */}
        <motion.img style={{ x: moveLeftFast }} src={LightbulbIcon} alt="Lightbulb" className="absolute top-[28vh] left-[8vw] w-[140px] drop-shadow-2xl z-20" />
        <motion.img style={{ x: moveLeftSlow }} src={BooksIcon} alt="Books" className="absolute top-[36vh] left-[28vw] w-[100px] z-10" />
        <motion.img style={{ x: moveLeftFast }} src={CalculatorIcon} alt="Calculator" className="absolute top-[48vh] left-[18vw] w-[110px] drop-shadow-2xl z-20" />
        <motion.img style={{ x: moveLeftSlow }} src={BeakersIcon} alt="Beakers" className="absolute bottom-[25vh] left-[8vw] w-[90px] drop-shadow-xl z-40" />

        {/* --- 4. RIGHT SIDE ICONS (Moving to the Right) --- */}
        <motion.img style={{ x: moveRightFast }} src={GraduationCapIcon} alt="Graduation Cap" className="absolute top-[26vh] right-[5vw] w-[200px] drop-shadow-2xl z-20" />
        <motion.img style={{ x: moveRightSlow }} src={CalendarIcon} alt="Calendar" className="absolute top-[42vh] right-[24vw] w-[90px] z-10" />
        <motion.img style={{ x: moveRightSlow }} src={AtomIcon} alt="Atom" className="absolute bottom-[35vh] right-[30vw] w-[100px] z-40" />
        <motion.img style={{ x: moveRightFast }} src={LaptopIcon} alt="Laptop" className="absolute bottom-[28vh] right-[10vw] w-[130px] drop-shadow-2xl z-40" />
      </div>

      {/* --- CTA BUTTONS --- */}
      <motion.div 
        style={{ y: textY, opacity: opacityOut }}
        className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 w-full max-w-[280px]"
      >
        <button 
          onClick={() => navigate('/login')}
          className="w-full bg-white text-black font-semibold text-[15px] py-3.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform pointer-events-auto"
        >
          Login
        </button>
        
        <button 
          onClick={() => navigate('/register')}
          className="w-full bg-black border border-white/20 text-white font-semibold text-[15px] py-3.5 rounded-full hover:bg-white/10 transition-colors pointer-events-auto"
        >
          Register
        </button>
      </motion.div>
      
    </div>
  );
};

export default LandingPageContent;