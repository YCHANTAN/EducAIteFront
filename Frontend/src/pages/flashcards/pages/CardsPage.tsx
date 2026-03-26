import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardRow } from '../components/CardRow';
import { FlashcardsTopActions } from '../components/FlashcardsTopActions';
import SearchBar from '../components/SearchBar';
import { useFlashcards } from '../hooks/useFlashcards';
import logo from '../../../assets/educAIte-logo.svg';
import AImpatin from '../../../assets/robot.svg';

export function CardsPage() {
  const navigate = useNavigate();
  const { selectedSubdeck, filteredCards, search, setSearch } = useFlashcards();

  return (
    <div className="min-h-screen bg-black px-8 py-10 text-white font-sans antialiased relative">
      
      {/* HEADER ROW (Back Button & Logo) */}
      <div className="flex items-center gap-6 mb-8 max-w-[1400px] mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all bg-black/50 backdrop-blur-md"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <img src={logo} alt="educAIte" className="h-8" />
      </div>

      <main className="max-w-[1400px] mx-auto">
        
        {/* FLOATING ACTION ROW (Top Right) */}
        <FlashcardsTopActions />

        {/* TITLE & SEARCH ROW */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              <span className="text-[#00CEC8]">Midterm exam for Database</span> 🔥 <span className="text-[#FF4500]">13</span>
            </h1>
            <p className="text-lg text-white/50 font-medium">
              Keep your daily reviews active to maintain your streak!
            </p>
          </div>

          {/* Locked Search Bar Width */}
          <div className="w-[320px]">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>

        {/* CARDS LIST HEADER */}
        <h2 className="mb-6 text-[22px] font-bold tracking-wide">
          Cards <span className="text-white/40 font-normal">({selectedSubdeck?.cardCount ?? 0})</span>
        </h2>

        {/* HORIZONTAL CARDS LIST */}
        <div className="space-y-6 pb-20">
          {filteredCards.map((card) => (
            <CardRow key={card.id} card={card} />
          ))}
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

export default CardsPage;