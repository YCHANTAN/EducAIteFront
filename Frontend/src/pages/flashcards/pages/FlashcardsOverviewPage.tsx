import { useNavigate } from 'react-router-dom';
import DeckCard  from '../components/DeckCard';
import FlashcardOverviewSidebar from '../components/FlashcardOverviewSidebar';
import SearchBar from '../components/SearchBar';
import { useFlashcards } from '../hooks/useFlashcards';

export function FlashcardsOverviewPage() {
  const navigate = useNavigate();
  const { stats, filteredDecks, search, setSearch, setSelectedDeckId } = useFlashcards();

  return (
    <div className="min-h-screen bg-black px-8 py-10 text-white">
      <div className="flex gap-8">
        <FlashcardOverviewSidebar stats={stats} />

        <main className="flex-1">
          <div className="mb-8 flex items-start justify-between gap-6">
            <div>
              <h1 className="text-5xl font-semibold text-cyan-400">My Deck 🔥 13</h1>
              <p className="mt-2 text-2xl text-white/50">Keep your daily reviews active to maintain your streak!</p>
            </div>

            <div className="space-y-4">
              <button className="rounded-full bg-white px-8 py-3 text-black">Add deck</button>
              <SearchBar value={search} onChange={setSearch} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
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
    </div>
  );
}
export default FlashcardsOverviewPage;