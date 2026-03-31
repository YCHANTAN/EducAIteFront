import React from 'react';
import ThreedotsModal from './ThreedotsModal';

interface CardRowProps {
  card: {
    id: string;
    question: string;
    answer: string | string[];
  };
  onEdit: () => void;
  onDelete: () => void;
}

export function CardRow({ card, onEdit, onDelete }: CardRowProps) {
  const isMultipleChoice = Array.isArray(card.answer);

  return (
    <div className="relative border border-white/10 rounded-[32px] p-8 mb-6 
                    bg-white/[0.03] 
                    hover:bg-[#050505] 
                    hover:border-[#00CEC8]/30
                    transition-all duration-300 group shadow-sm cursor-pointer">
      
      {/* POSITIONING THE THREE DOTS MODAL */}
      <div className="absolute top-6 right-6 z-30">
        <ThreedotsModal>
           <button 
             onClick={(e) => {
               e.stopPropagation(); 
               onEdit(); 
             }}
             className="w-full text-left px-5 py-3 text-[15px] text-white/70 hover:bg-white/5 hover:text-white transition-colors"
           >
             ✏️ Edit card
           </button>
           <div className="h-[1px] w-full bg-white/5" />
           <button 
             onClick={(e) => {
               e.stopPropagation(); 
               onDelete(); 
             }}
             className="w-full text-left px-5 py-3 text-[15px] text-red-400 hover:bg-red-400/5 transition-colors"
           >
             🗑️ Delete card
           </button>
        </ThreedotsModal>
      </div>

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