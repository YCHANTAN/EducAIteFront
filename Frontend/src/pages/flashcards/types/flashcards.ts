export type SkillLevel = 'mastered' | 'almost' | 'unfamiliar';

export interface FlashcardOption {
  id: string;
  text: string;
}

export interface FlashcardItem {
  id: string;
  front: string;
  back?: string;
  options?: FlashcardOption[];
  correctAnswer?: string;
  createdAt: string;
}

export interface Subdeck {
  id: string;
  title: string;
  cardCount: number;
  color?: string;
  image?: string;
  cards: FlashcardItem[];
}

export interface Deck {
  id: string;
  title: string;
  streak: number;
  totalCards: number;
  subdeckCount: number;
  color?: string;
  image?: string;
  subdecks: Subdeck[];
}

export interface FlashcardStats {
  totalDecks: number;
  totalFlashcards: number;
  completedReviews: number;
  activeStreak: number;
  accuracyRate: number;
  correctAnswers: number;
  wrongAnswers: number;
  totalReviewed: number;
  weeklyReviewed: number;
  weeklyAccuracy: number;
  weeklyHours: number;
  decksAdded: number;
}

export interface QuizResult {
  totalResponses: number;
  highestScore: number;
  lowestScore: number;
  mediumScore: number;
  mastered: number;
  almost: number;
  unfamiliar: number;
  finalScore: number;
  insight: string;
}