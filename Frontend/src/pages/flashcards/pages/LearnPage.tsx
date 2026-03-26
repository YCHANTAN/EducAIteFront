import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/educAIte-logo.svg';
import AImpatin from '../../../assets/robot.svg';

export function LearnPage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(1);
  const total = 2; 

  const currentCard = {
    question: "Before the rise of machines and technology, how was the act of listening primarily experienced?"
  };

  return (
    <div className="min-h-screen bg-black px-8 py-10 text-white font-sans antialiased flex flex-col relative overflow-hidden">
      
      {/* HEADER ROW */}
      <header className="flex items-center gap-6 mb-20 max-w-[1400px] mx-auto w-full z-20">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all bg-black/50 backdrop-blur-md"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <img src={logo} alt="educAIte" className="h-7 opacity-90" />
      </header>

      <main className="flex-1 flex flex-col items-center w-full z-10 max-w-[1200px] mx-auto">
        
        {/* --- REFINED PAGE TITLE --- */}
        <div className="mb-16 text-center">
          <h1 className="text-[32px] md:text-[38px] font-medium tracking-wide text-white/90">
            Midterm exam for Database
          </h1>
          {/* Thinner, more subtle accent line */}
          <div className="h-[2px] w-20 bg-[#00CEC8]/60 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* --- MAIN FLASHCARD --- */}
        <div className="relative w-full rounded-[40px] bg-[#272365] px-10 py-20 md:px-24 md:py-28 flex flex-col items-center justify-center shadow-[0_0_70px_rgba(0,0,0,0.4)] border border-white/5 transition-all">
          
          {/* Subtle Lightbulb Icon */}
          <div className="absolute top-10 right-10 text-[#FFD700]/80">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
              <path d="M9 21h6v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1z" />
            </svg>
          </div>

          {/* REFINED Question Text - Less "Heavy" */}
          <p className="max-w-4xl text-[32px] md:text-[40px] leading-[1.35] font-normal text-center mb-16 text-white/95 tracking-tight">
            {currentCard.question}
          </p>

          {/* Action Buttons - Semibold for clarity without being chunky */}
          <div className="flex flex-wrap justify-center gap-5">
            <button 
              onClick={() => navigate('/code-learn')} 
              className="rounded-xl bg-white px-10 py-3.5 text-black font-semibold text-[14px] hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              Mastered
            </button>
            <button 
              onClick={() => navigate('/code-learn')} 
              className="rounded-xl bg-white px-10 py-3.5 text-black font-semibold text-[14px] hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              Almost
            </button>
            <button 
              onClick={() => navigate('/code-learn')} 
              className="rounded-xl bg-white px-10 py-3.5 text-black font-semibold text-[14px] hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              Unfamiliar
            </button>
          </div>
        </div>

        {/* --- NAVIGATION CONTROLS --- */}
        <div className="mt-16 flex items-center justify-center gap-12">
          <button
            onClick={() => setIndex((value) => Math.max(1, value - 1))}
            className={`w-[90px] h-[50px] rounded-full flex items-center justify-center transition-all ${
              index === 1 
                ? 'bg-white/5 text-white/10 cursor-not-allowed' 
                : 'bg-[#272365] text-white hover:bg-[#342f85] border border-white/10 shadow-lg'
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div className="text-[28px] font-medium tracking-widest text-white/80 flex items-center">
            {index}<span className="text-white/20 mx-2 font-light">/</span>{total}
          </div>

          <button
            onClick={() => navigate('/code-learn')} 
            className="w-[90px] h-[50px] rounded-full flex items-center justify-center transition-all bg-[#272365] text-white hover:bg-[#342f85] border border-white/10 shadow-lg"
          >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </main>

      {/* Floating Robot */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-14 h-14 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center overflow-hidden cursor-pointer hover:scale-110 transition-all">
          <img src={AImpatin} alt="bot" className="w-8 h-8 opacity-80" />
        </div>
      </div>
      
    </div>
  );
}

export default LearnPage;