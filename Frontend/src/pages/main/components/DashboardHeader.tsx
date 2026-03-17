import React from 'react';

const DashboardHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full mb-12">
      
      {/* Welcome Text */}
      <div className="text-center w-full max-w-[800px] mb-8">
        <h1 className="text-[3rem] md:text-[4rem] font-bold text-white leading-tight tracking-tight mb-4">
          Welcome back, <span className="text-[#00CEC8]">Christian</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 font-medium">
          Your personalized AI dashboard — track your growth, progress, and insights.
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-[700px] bg-[#111111] border border-white/10 rounded-full flex items-center px-6 py-3 gap-4 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input 
          type="search" 
          placeholder="Search a course, topic, or material..." 
          className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-base" 
        />
        <button className="bg-white text-black rounded-full px-8 py-2.5 text-sm font-bold transition-all hover:scale-105 active:scale-95">
          Search
        </button>
      </div>

    </div>
  );
};

export default DashboardHeader;