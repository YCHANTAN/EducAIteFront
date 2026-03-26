import React, { useState } from 'react'; // 1. IMPORTANT: Added useState
import { useNavigate } from 'react-router-dom';
import DeckCard from '../components/DeckCard';
import FlashcardOverviewSidebar from '../components/FlashcardOverviewSidebar';
import SearchBar from '../components/SearchBar';
import { useFlashcards } from '../hooks/useFlashcards';
import { AddDeckModal } from '../components/AddDeckModal'; // 2. IMPORTANT: Imported the modal

export function FlashcardsOverviewPage() {
  const navigate = useNavigate();
  const { stats, filteredDecks, search, setSearch, setSelectedDeckId } = useFlashcards();

  // 3. IMPORTANT: State to control modal visibility
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black px-8 py-10 text-white font-sans antialiased relative">
      <div className="flex gap-10">
        
        {/* SIDEBAR */}
        <div className="w-72 flex-shrink-0">
          <FlashcardOverviewSidebar stats={stats} />
        </div>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1">
          
          {/* FLOATING ACTION ROW (Top Right) */}
          <div className="flex justify-end mb-4">
            
            {/* 4. IMPORTANT: Added onClick handler to open modal */}
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 bg-white text-black text-sm font-bold px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add deck
            </button>
            
          </div>

          {/* TITLE & SEARCH ROW */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-1">
                <span className="text-[#00CEC8]">My Deck</span> 🔥 <span className="text-[#FF4500]">13</span>
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

          {/* DECKS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

      {/* 5. IMPORTANT: Render the modal when state is true */}
      {isAddModalOpen && (
        <AddDeckModal 
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={(title, color) => {
            console.log("New Main Deck submitted:", title, color);
            setIsAddModalOpen(false); // Close the modal after submitting
          }}
        />
      )}

    </div>
  );
}

export default FlashcardsOverviewPage;