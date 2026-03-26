import React, { useState } from 'react';
import { CardOptionsModal } from './CardOptionsModal';

interface CardRowProps {
  card: {
    id: string;
    question: string;
    answer: string | string[];
  };
}

export function CardRow({ card }: CardRowProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMultipleChoice = Array.isArray(card.answer);

  return (
    <div className="relative border border-white/10 rounded-[32px] p-8 mb-6 
                bg-white/[0.03] 
                hover:bg-[#050505] 
                hover:border-[#00CEC8]/30
                transition-all duration-300 group shadow-sm cursor-pointer">
      
      {/* Three Dots Action Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-6 right-8 text-white/30 hover:text-white transition-colors z-20 p-2"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="12" r="1.5"></circle>
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="19" cy="12" r="1.5"></circle>
        </svg>
      </button>

      {/* Options Modal - Appears relative to this card */}
      {isMenuOpen && (
        <CardOptionsModal 
          onClose={() => setIsMenuOpen(false)}
          onEdit={() => console.log("Edit card:", card.id)}
          onDelete={() => console.log("Delete card:", card.id)}
        />
      )}

      {/* Question / Front */}
      <div className="mb-8 pr-16">
        <p className="text-white/30 text-[13px] font-bold uppercase tracking-[0.15em] mb-3">Front</p>
        <h3 className="text-[22px] text-white font-medium leading-relaxed">
          {card.question}
        </h3>
      </div>

      {/* Answer / Back */}
      <div className="flex flex-col">
        <p className="text-white/30 text-[13px] font-bold uppercase tracking-[0.15em] mb-3">Back</p>
        <div className="inline-block self-start bg-transparent rounded-2xl px-6 py-3 border border-white/10">
          {isMultipleChoice ? (
            <div className="flex flex-col gap-1">
              {(card.answer as string[]).map((ans, i) => (
                <span key={i} className="text-[#00CEC8] text-[18px] font-semibold tracking-tight">
                  {ans}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-[#00CEC8] text-[18px] font-semibold tracking-tight">
              {card.answer}
            </span>
          )}
        </div>
      </div>
      
    </div>
  );
}