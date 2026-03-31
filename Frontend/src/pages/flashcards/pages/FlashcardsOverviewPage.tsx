import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeckCard from '../components/DeckCard';
import FlashcardOverviewSidebar from '../components/FlashcardOverviewSidebar';
import SearchBar from '../components/SearchBar';
import { useFlashcards } from '../hooks/useFlashcards';
import { AddDeckModal } from '../components/AddDeckModal';
import Logo from '../../../components/Logo';

export function FlashcardsOverviewPage() {
  const navigate = useNavigate();
  const { stats, filteredDecks, search, setSearch, setSelectedDeckId } = useFlashcards();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black px-12 py-12 text-white font-sans antialiased relative">
      
      {/* 1. LOGO - Wrapped in a relative container with high z-index */}
      <div className="relative z-50 mb-20"> 
        <Logo />
      </div>

      {/* 2. MAIN LAYOUT - Your original flex layout */}
      <div className="flex gap-14 relative z-10">
        
        {/* SIDEBAR */}
        <aside className="w-72 flex-shrink-0">
          <FlashcardOverviewSidebar stats={stats} />
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1">
          
          {/* ACTION BUTTON ROW */}
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 bg-white text-black text-[13px] font-bold px-7 py-3 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 transition-all uppercase tracking-wider"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add deck
            </button>
          </div>

          {/* HEADER & SEARCH ROW */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h1 className="text-[44px] font-semibold tracking-tight mb-3">
                <span className="text-[#00CEC8]">My Deck</span> <span className="mx-2 opacity-80">🔥</span> <span className="text-[#FF4500]">13</span>
              </h1>
              <p className="text-xl text-white/40 font-medium max-w-lg">
                Keep your daily reviews active to maintain your streak!
              </p>
            </div>

            <div className="w-full md:w-[350px]">
              <SearchBar value={search} onChange={setSearch} />
            </div>
          </div>

          {/* DECKS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDecks.map((deck) => (
              <DeckCard
                key={deck.id}
                title={deck.title}
                subtitle={`Decks: ${deck.subdeckCount}`}
                onClick={() => {
                  setSelectedDeckId(deck.id);
                  navigate(`/flashcards/decks/${deck.id}`);
                }}
              />
            ))}
          </div>
        </main>
      </div>

      {/* ADD DECK MODAL */}
      {isAddModalOpen && (
        <AddDeckModal 
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={(title, color) => {
            console.log("New Main Deck submitted:", title, color);
            setIsAddModalOpen(false);
          }}
        />
      )}

    </div>
  );
}

export default FlashcardsOverviewPage;