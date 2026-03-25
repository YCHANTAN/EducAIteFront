import { useMemo, useState } from 'react';
import { decks as initialDecks, flashcardStats, quizResult } from '../data/mockFlashcards';

export function useFlashcards() {
  const [decks, setDecks] = useState(initialDecks);
  const [search, setSearch] = useState('');
  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(initialDecks[0]?.id ?? null);
  const [selectedSubdeckId, setSelectedSubdeckId] = useState<string | null>(initialDecks[0]?.subdecks[0]?.id ?? null);

  const selectedDeck = useMemo(
    () => decks.find((deck) => deck.id === selectedDeckId) ?? null,
    [decks, selectedDeckId],
  );

  const selectedSubdeck = useMemo(
    () => selectedDeck?.subdecks.find((subdeck) => subdeck.id === selectedSubdeckId) ?? null,
    [selectedDeck, selectedSubdeckId],
  );

  const filteredDecks = useMemo(() => {
    if (!search.trim()) return decks;
    return decks.filter((deck) =>
      deck.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [decks, search]);

  const filteredSubdecks = useMemo(() => {
    if (!selectedDeck) return [];
    if (!search.trim()) return selectedDeck.subdecks;
    return selectedDeck.subdecks.filter((subdeck) =>
      subdeck.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [selectedDeck, search]);

  const filteredCards = useMemo(() => {
    if (!selectedSubdeck) return [];
    if (!search.trim()) return selectedSubdeck.cards;
    return selectedSubdeck.cards.filter((card) =>
      `${card.front} ${card.back ?? ''}`.toLowerCase().includes(search.toLowerCase()),
    );
  }, [selectedSubdeck, search]);

  return {
    decks,
    setDecks,
    stats: flashcardStats,
    quizResult,
    search,
    setSearch,
    selectedDeck,
    selectedDeckId,
    setSelectedDeckId,
    selectedSubdeck,
    selectedSubdeckId,
    setSelectedSubdeckId,
    filteredDecks,
    filteredSubdecks,
    filteredCards,
  };
}
export default useFlashcards;