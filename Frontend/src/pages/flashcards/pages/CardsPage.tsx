import { CardRow } from '../components/CardRow';
import { FlashcardsTopActions } from '../components/FlashcardsTopActions';
import { SearchBar } from '../components/SearchBar';
import { useFlashcards } from '../hooks/useFlashcards';

export function CardsPage() {
  const { selectedSubdeck, filteredCards, search, setSearch } = useFlashcards();

  return (
    <div className="min-h-screen bg-black px-8 py-10 text-white">
      <div className="mb-8 flex items-start justify-between gap-6">
        <div>
          <h1 className="text-5xl font-semibold text-cyan-400">Midterm exam for Database 🔥 13</h1>
          <p className="mt-2 text-2xl text-white/50">Keep your daily reviews active to maintain your streak!</p>
        </div>

        <div className="space-y-4">
          <FlashcardsTopActions />
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      <h2 className="mb-6 text-4xl font-semibold">Cards ({selectedSubdeck?.cardCount ?? 0})</h2>

      <div className="space-y-6">
        {filteredCards.map((card) => (
          <CardRow key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
export default CardsPage;