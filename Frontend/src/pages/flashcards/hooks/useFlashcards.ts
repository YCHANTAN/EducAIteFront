import { useState, useMemo } from 'react';

export const useFlashcards = () => {
  // --- STATES ---
  const [search, setSearch] = useState('');
  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(null);
  const [selectedSubdeckId, setSelectedSubdeckId] = useState<string | null>(null);

  // --- MOCK DATA ---
  
  // 1. Sidebar Stats
  const stats = {
    totalDecks: 6,
    totalFlashcards: 182,
    completedReviews: 143,
    activeStreak: 13,
    accuracy: 84,
    correctAnswers: 268,
    wrongAnswers: 52,
    totalReviewed: 320,
    weeklyReviewed: 12,
    weeklyAccuracy: 100,
    decksAdded: 2,
    timeSpent: 4.5
  };

  // 2. Top-Level Decks (For the Overview Page)
  const decks = [
    { id: '1', title: 'Database Management System', subdeckCount: 2 },
    { id: '2', title: 'Programming Language', subdeckCount: 2 },
    { id: '3', title: 'Human Computer Interaction', subdeckCount: 2 },
    { id: '4', title: 'Android Programming', subdeckCount: 2 },
    { id: '5', title: 'Research Communication', subdeckCount: 2 },
    { id: '6', title: 'Emerging Technologies', subdeckCount: 2 },
  ];

  // 3. Subdecks (For the DecksPage / 3-column grid)
  const subdecks = [
    { id: '1', title: 'Relational Models and Normalization', cardCount: 2 },
    { id: '2', title: 'Language Paradigms', cardCount: 2 },
    { id: '3', title: 'Task Analysis', cardCount: 120 },
    { id: '4', title: 'Syntax vs Semantics', cardCount: 12 },
    { id: '5', title: 'Machine Learning Fundamentals', cardCount: 27 },
    { id: '6', title: 'Cybersecurity', cardCount: 48 },
  ];

  // 4. Individual Cards (For the Study/Learn Pages)
  const cards = [
    { 
      id: '1', 
      question: 'Before the rise of machines and technology, how was the act of listening primarily experienced?', 
      answer: 'Through natural environments' 
    },
    { 
      id: '2', 
      question: 'Before machines and technology, what was the predominant source of ambient sounds in urban areas are are are are?', 
      answer: 'Birdsong and Natural Elements' 
    },
    { 
      id: '3', 
      question: 'Are you a human?', 
      answer: ['A. Yes', 'B. No', 'C. Maybe', 'D. Someties'] 
    },
  ];

  // --- FILTERING LOGIC ---
  const filteredDecks = useMemo(() => {
    return decks.filter(deck => 
      deck.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [decks, search]);

  const filteredSubdecks = useMemo(() => {
    return subdecks.filter(subdeck => 
      subdeck.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [subdecks, search]);

  const filteredCards = useMemo(() => {
    return cards.filter(card => 
      card.question.toLowerCase().includes(search.toLowerCase())
    );
  }, [cards, search]);

  // --- RETURN EVERYTHING TO THE APP ---
  return {
    stats,
    decks,
    filteredDecks,
    
    // Specifically for DecksPage:
    filteredSubdecks,
    selectedDeck: { title: 'Database Management System', streak: 13 }, // Mock selected deck
    selectedSubdeckId,
    setSelectedSubdeckId,

    // Specifically for Cards/Learn Pages:
    filteredCards,
    selectedSubdeck: { cardCount: 12 }, // Mock selected subdeck stat
    
    // Global:
    search,
    setSearch,
    selectedDeckId,
    setSelectedDeckId,
  };
};