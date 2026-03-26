import React, { useState } from 'react'; // 1. IMPORTANT: Added useState
import { useNavigate } from 'react-router-dom';
import DeckCard from '../components/DeckCard';
import SearchBar from '../components/SearchBar';
import { useFlashcards } from '../hooks/useFlashcards';
import { AddSubdeckModal } from '../components/AddSubdeckModal'; // 2. IMPORTANT: Imported the AddSubdeckModal

// Assuming logo is in your assets folder like the other pages
import logo from '../../../assets/educAIte-logo.svg'; 

export function DecksPage() {
  const navigate = useNavigate();
  const { search, setSearch } = useFlashcards();

  // 3. IMPORTANT: State to control modal visibility
  const [isAddSubdeckModalOpen, setIsAddSubdeckModalOpen] = useState(false);

  // Mock data tailored exactly to your screenshot
  const subdecks = [
    { id: '1', title: 'Relational Models and Normalization', cardCount: 2 },
    { id: '2', title: 'Language Paradigms', cardCount: 2 },
    { id: '3', title: 'Task Analysis', cardCount: 120 },
    { id: '4', title: 'Syntax vs Semantics', cardCount: 12 },
    { id: '5', title: 'Machine Learning Fundamentals', cardCount: 27 },
    { id: '6', title: 'Cybersecurity', cardCount: 48 },
  ];

  const filteredSubdecks = subdecks.filter(deck =>
    deck.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black px-8 py-10 text-white font-sans antialiased relative">
      
      {/* HEADER ROW (Back Button & Logo) */}
      <div className="flex items-center gap-6 mb-8">
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
        <div className="flex justify-end mb-4">
          
          {/* 4. IMPORTANT: Added onClick handler to open the modal */}
          <button 
            onClick={() => setIsAddSubdeckModalOpen(true)}
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
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              <span className="text-[#00CEC8]">Database Management System</span> 🔥 <span className="text-[#FF4500]">13</span>
            </h1>
            <p className="text-lg text-white/50 font-medium">
              Keep your daily reviews active to maintain your streak!
            </p>
          </div>

          {/* Locked Search Bar Width to match the visual weight of the grid */}
          <div className="w-[320px]">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>

        {/* SUBDECKS GRID (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSubdecks.map((subdeck) => (
            <DeckCard
              key={subdeck.id}
              title={subdeck.title}
              subtitle={`Cards: ${subdeck.cardCount}`}
              onClick={() => {
                // Navigate deeper into the specific card list or study mode!
                navigate(`/cards`);
              }}
            />
          ))}
        </div>
        
      </main>

      {/* 5. IMPORTANT: Render the AddSubdeckModal when state is true */}
      {isAddSubdeckModalOpen && (
        <AddSubdeckModal 
          parentDeckName="Database Management System"
          onClose={() => setIsAddSubdeckModalOpen(false)}
          onSubmit={(title, color, picture) => {
            console.log("New Subdeck created:", title, color, picture?.name);
            setIsAddSubdeckModalOpen(false); // Close the modal after submitting
          }}
        />
      )}

    </div>
  );
}

export default DecksPage;