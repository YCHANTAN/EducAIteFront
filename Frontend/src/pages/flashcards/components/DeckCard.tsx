import React from 'react';

interface DeckCardProps {
  title: string;
  subtitle: string;
  onClick: () => void;
}

export default function DeckCard({ title, subtitle, onClick }: DeckCardProps) {
  return (
    <div 
      onClick={onClick}
      className="relative h-52 bg-black border border-white/20 rounded-[32px] cursor-pointer group hover:border-[#00CEC8]/50 hover:shadow-[0_0_20px_rgba(0,206,200,0.1)] transition-all flex flex-col"
    >
      {/* TOP SECTION: Contains Title and creates the nested curve */}
      <div className="relative flex-1 border-b border-white/20 rounded-b-[32px] p-8 pb-6 transition-colors group-hover:border-[#00CEC8]/40 flex flex-col justify-center">
        
        {/* Three Dots Icon */}
        <button className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="2"></circle>
            <circle cx="12" cy="12" r="2"></circle>
            <circle cx="19" cy="12" r="2"></circle>
          </svg>
        </button>

        <h3 className="text-[22px] font-bold text-white leading-[1.2] pr-6 group-hover:text-[#00CEC8] transition-colors mt-2">
          {title}
        </h3>
      </div>

      {/* BOTTOM SECTION: Contains Subtitle strictly below the curve */}
      <div className="h-14 flex items-center px-8">
        <p className="text-[15px] text-white/50 font-medium">
          {subtitle}
        </p>
      </div>
    </div>
  );
}