import React from 'react';
import AImpatin from '../assets/robot.svg'; 

const EducAIteAssistantRobot: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <div className="w-14 h-14 rounded-full border border-white/20 bg-black flex items-center justify-center overflow-hidden cursor-pointer hover:bg-white/5 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-110 active:scale-95">
        <img 
          src={AImpatin} 
          alt="educAIte Assistant" 
          className="w-10 h-10 object-contain" 
        />
      </div>
    </div>
  );
};

export default EducAIteAssistantRobot;