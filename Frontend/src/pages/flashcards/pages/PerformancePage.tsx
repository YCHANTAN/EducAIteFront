import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/educAIte-logo.svg';
import AImpatin from '../../../assets/robot.svg';
import { useFlashcards } from '../hooks/useFlashcards';

export function PerformancePage() {
  const navigate = useNavigate();
  
  // Assuming your hook provides this data. If not, you can mock it temporarily!
  // const { quizResult } = useFlashcards();
  const quizResult = {
    totalResponses: 2,
    highestScore: 100,
    lowestScore: 72,
    mediumScore: 87.5,
    finalScore: 72,
    insight: "Your performance shows solid understanding, but you need to focus on the areas where mistakes were frequent; with clearer concept application and targeted practice, you can significantly improve."
  };

  // --- SVG Gauge Calculations for the 72% ---
  const radius = 100;
  const cx = 110;
  const cy = 110;
  const circumference = Math.PI * radius; 
  const dashoffset = circumference * (1 - quizResult.finalScore / 100);
  const angleInRadians = (quizResult.finalScore / 100) * Math.PI;
  const thumbX = cx - radius * Math.cos(angleInRadians);
  const thumbY = cy - radius * Math.sin(angleInRadians);

  return (
    <div className="min-h-screen bg-black px-8 py-8 text-white font-sans antialiased relative overflow-x-hidden">
      
      {/* HEADER ROW (Back Button, Logo, Navigation) */}
      <div className="flex items-center justify-between mb-8 max-w-[1400px] mx-auto w-full">
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all bg-black/50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <img src={logo} alt="educAIte" className="h-8" />
        </div>
        
        {/* Top Navigation Bar */}
        <div className="hidden md:flex bg-black border border-white/20 rounded-full px-8 py-3 gap-8 text-sm font-medium text-white/50">
           <span className="hover:text-white cursor-pointer transition-colors">Home</span>
           <span className="hover:text-white cursor-pointer transition-colors">Courses</span>
           <span className="hover:text-white cursor-pointer transition-colors">Analytics</span>
           <span className="text-[#00CEC8] border-b-2 border-[#00CEC8] pb-1 cursor-pointer">Flashcards</span>
           <span className="hover:text-white cursor-pointer transition-colors">Tracker</span>
           <span className="hover:text-white cursor-pointer transition-colors">Calendar</span>
           <span className="hover:text-white cursor-pointer transition-colors">Resume</span>
        </div>
        
        <div className="w-[120px]"></div> {/* Spacer */}
      </div>

      <main className="max-w-[1200px] mx-auto pb-20">
        
        {/* TITLE & BACK BUTTON */}
        <div className="mb-10 flex items-end justify-between">
          <div className="w-[150px]"></div> {/* Spacer */}
          <h1 className="text-[44px] font-semibold text-[#00CEC8] tracking-tight">
            Overall Performance
          </h1>
          <button 
            onClick={() => navigate(-1)} 
            className="rounded-full bg-white px-8 py-2.5 text-black font-bold text-sm hover:scale-105 transition-transform"
          >
            Back to lesson
          </button>
        </div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 mb-4">
          <div className="rounded-[24px] border border-white/20 p-6 bg-[#050505]">
            <p className="text-[44px] font-bold text-[#00CEC8] leading-none mb-2">{quizResult.totalResponses}</p>
            <p className="text-[15px] font-medium text-white/80">Total Responses</p>
          </div>
          <div className="rounded-[24px] border border-white/20 p-6 bg-[#050505]">
            <p className="text-[44px] font-bold text-[#00CEC8] leading-none mb-2">{quizResult.highestScore}%</p>
            <p className="text-[15px] font-medium text-white/80">Highest Score</p>
          </div>
          <div className="rounded-[24px] border border-white/20 p-6 bg-[#050505]">
            <p className="text-[44px] font-bold text-[#00CEC8] leading-none mb-2">{quizResult.lowestScore}%</p>
            <p className="text-[15px] font-medium text-white/80">Lowest Score</p>
          </div>
          <div className="rounded-[24px] border border-white/20 p-6 bg-[#050505]">
            <p className="text-[44px] font-bold text-[#00CEC8] leading-none mb-2">{quizResult.mediumScore}%</p>
            <p className="text-[15px] font-medium text-white/80">Medium Score</p>
          </div>
        </div>

        {/* --- MAIN CHARTS GRID --- */}
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.3fr_1fr]">
          
          {/* LEFT: PIE CHART AREA */}
          <div className="rounded-[24px] border border-white/20 p-10 bg-[#050505] flex items-center justify-between">
            
            {/* The CSS Conic Gradient Pie Chart */}
            <div className="relative flex items-center justify-center w-[280px] h-[280px] ml-4">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-[#00CEC8] blur-[80px] opacity-20"></div>
              {/* The Pie Chart */}
              <div 
                className="w-full h-full rounded-full relative z-10"
                style={{
                  background: 'conic-gradient(from 230deg, #1D4ED8 0% 15%, #2563EB 15% 35%, #00CEC8 35% 100%)'
                }}
              />
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-6 pr-10">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#00CEC8]"></div>
                <span className="text-[22px] font-medium">Mastered</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#2563EB]"></div>
                <span className="text-[22px] font-medium">Almost</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#1D4ED8]"></div>
                <span className="text-[22px] font-medium">Unfamiliar</span>
              </div>
            </div>
          </div>

          {/* RIGHT: GAUGES & INSIGHTS */}
          <div className="grid gap-4 flex-col">
            
            {/* Top Right: The Gauge */}
            <div className="rounded-[24px] border border-white/20 p-8 bg-[#050505] flex flex-col items-center">
              <h2 className="mb-6 text-[18px] font-medium text-white/90 text-center">
                Your score on the Technical Programming quiz
              </h2>
              
              <div className="relative w-[220px] h-[110px]">
                <svg viewBox="0 0 220 120" className="w-full h-full overflow-visible">
                  <path d={`M 10 ${cy} A ${radius} ${radius} 0 0 1 210 ${cy}`} fill="none" stroke="#E2E8F0" strokeWidth="16" strokeLinecap="round" />
                  <path 
                    d={`M 10 ${cy} A ${radius} ${radius} 0 0 1 210 ${cy}`} 
                    fill="none" stroke="#00CEC8" strokeWidth="16" strokeLinecap="round"
                    strokeDasharray={circumference} strokeDashoffset={dashoffset}
                  />
                  <circle cx={thumbX} cy={thumbY} r="10" fill="#00CEC8" stroke="white" strokeWidth="4" />
                </svg>
                <div className="absolute bottom-[-10px] left-0 right-0 flex justify-center">
                  <span className="text-[40px] font-bold text-[#00CEC8] leading-none">
                    {quizResult.finalScore}%
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Right: AI Insights */}
            <div className="rounded-[24px] border border-white/20 p-8 bg-[#050505]">
              <h3 className="mb-4 text-[18px] font-semibold text-[#00CEC8]">AI Insights:</h3>
              <p className="text-[13px] leading-[1.8] text-white/90 font-medium">
                {quizResult.insight}
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Floating Robot Bottom Right */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-14 h-14 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center overflow-hidden cursor-pointer hover:scale-110 transition-all shadow-xl">
          <img src={AImpatin} alt="bot" className="w-9 h-9 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default PerformancePage;