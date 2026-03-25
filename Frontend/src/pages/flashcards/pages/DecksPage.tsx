import { useNavigate, useParams } from 'react-router-dom';
import { DeckCard } from '../components/DeckCard';
import { FlashcardsTopActions } from '../components/FlashcardsTopActions';
import { SearchBar } from '../components/SearchBar';
import { useFlashcards } from '../hooks/useFlashcards';

export function DecksPage() {
  const navigate = useNavigate();
  const { deckId } = useParams();
  const { selectedDeck, filteredSubdecks, search, setSearch, setSelectedSubdeckId } = useFlashcards();

  return (
    <div className="min-h-screen bg-black px-8 py-10 text-white">
      <div className="mb-8 flex items-start justify-between gap-6">
        <div>
          <h1 className="text-5xl font-semibold text-cyan-400">{selectedDeck?.title ?? deckId} 🔥 13</h1>
          <p className="mt-2 text-2xl text-white/50">Keep your daily reviews active to maintain your streak!</p>
        </div>

        <div className="space-y-4">
          <button className="rounded-full bg-white px-8 py-3 text-black">Add deck</button>
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredSubdecks.map((subdeck) => (
          <DeckCard
            key={subdeck.id}
            title={subdeck.title}
            subtitle={`Cards: ${subdeck.cardCount}`}
            onClick={() => {
              setSelectedSubdeckId(subdeck.id);
              navigate(`/flashcards/decks/${deckId}/cards/${subdeck.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
export default DecksPage;