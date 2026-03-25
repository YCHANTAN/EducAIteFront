import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import FlashcardsOverviewPage from './pages/FlashcardsOverviewPage';
import DecksPage from './pages/DecksPage';
import CardsPage from './pages/CardsPage';
import CreateCardPage from './pages/CreateCardPage';
import LearnPage from './pages/LearnPage';
import CodingChallengePage from './pages/CodingChallengePage';
import PerformancePage from './pages/PerformancePage';

const Flashcards: React.FC = () => {
  return (
    <Routes>
      <Route index element={<FlashcardsOverviewPage />} />
      <Route path="decks/:deckId" element={<DecksPage />} />
      <Route path="decks/:deckId/cards/:subdeckId" element={<CardsPage />} />
      <Route
        path="decks/:deckId/cards/:subdeckId/create"
        element={<CreateCardPage />}
      />
      <Route
        path="decks/:deckId/cards/:subdeckId/learn"
        element={<LearnPage />}
      />
      <Route
        path="decks/:deckId/cards/:subdeckId/challenge"
        element={<CodingChallengePage />}
      />
      <Route
        path="decks/:deckId/cards/:subdeckId/performance"
        element={<PerformancePage />}
      />
      <Route path="*" element={<Navigate to="/flashcards" replace />} />
    </Routes>
  );
};

export default Flashcards;