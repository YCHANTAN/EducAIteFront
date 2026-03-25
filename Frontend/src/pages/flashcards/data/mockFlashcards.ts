import type { Deck, FlashcardStats, QuizResult } from '../types/flashcards';

export const flashcardStats: FlashcardStats = {
  totalDecks: 6,
  totalFlashcards: 182,
  completedReviews: 143,
  activeStreak: 13,
  accuracyRate: 84,
  correctAnswers: 268,
  wrongAnswers: 52,
  totalReviewed: 320,
  weeklyReviewed: 12,
  weeklyAccuracy: 100,
  weeklyHours: 4.5,
  decksAdded: 2,
};

export const decks: Deck[] = [
  {
    id: 'database-management-system',
    title: 'Database Management System',
    streak: 13,
    totalCards: 182,
    subdeckCount: 6,
    subdecks: [
      {
        id: 'relational-models',
        title: 'Relational Models and Normalization',
        cardCount: 2,
        cards: [
          {
            id: '1',
            front: 'Before the rise of machines and technology, how was the act of listening primarily experienced?',
            back: 'Through natural environments',
            createdAt: new Date().toISOString(),
          },
          {
            id: '2',
            front: 'Before machines and technology, what was the predominant source of ambient sounds in urban areas?',
            back: 'Birdsong and Natural Elements',
            createdAt: new Date().toISOString(),
          },
        ],
      },
      {
        id: 'language-paradigms',
        title: 'Language Paradigms',
        cardCount: 2,
        cards: [],
      },
      {
        id: 'task-analysis',
        title: 'Task Analysis',
        cardCount: 120,
        cards: [],
      },
      {
        id: 'syntax-vs-semantics',
        title: 'Syntax vs Semantics',
        cardCount: 12,
        cards: [],
      },
      {
        id: 'machine-learning-fundamentals',
        title: 'Machine Learning Fundamentals',
        cardCount: 27,
        cards: [],
      },
      {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        cardCount: 48,
        cards: [],
      },
    ],
  },
  {
    id: 'programming-language',
    title: 'Programming Language',
    streak: 13,
    totalCards: 22,
    subdeckCount: 2,
    subdecks: [],
  },
  {
    id: 'human-computer-interaction',
    title: 'Human Computer Interaction',
    streak: 13,
    totalCards: 30,
    subdeckCount: 2,
    subdecks: [],
  },
  {
    id: 'android-programming',
    title: 'Android Programming',
    streak: 13,
    totalCards: 25,
    subdeckCount: 2,
    subdecks: [],
  },
  {
    id: 'research-communication',
    title: 'Research Communication',
    streak: 13,
    totalCards: 40,
    subdeckCount: 2,
    subdecks: [],
  },
  {
    id: 'emerging-technologies',
    title: 'Emerging Technologies',
    streak: 13,
    totalCards: 43,
    subdeckCount: 2,
    subdecks: [],
  },
];

export const quizResult: QuizResult = {
  totalResponses: 2,
  highestScore: 100,
  lowestScore: 72,
  mediumScore: 87.5,
  mastered: 60,
  almost: 25,
  unfamiliar: 15,
  finalScore: 72,
  insight:
    'Your performance shows solid understanding, but you need to focus on the areas where mistakes were frequent; with clearer concept application and targeted practice, you can significantly improve.',
};
export default { flashcardStats, decks, quizResult };