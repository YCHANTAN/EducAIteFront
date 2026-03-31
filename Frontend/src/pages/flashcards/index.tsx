import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import FlashcardsOverviewPage from './pages/FlashcardsOverviewPage';
import DecksPage from './pages/DecksPage';

const Flashcards: React.FC = () => {
  return (
    <Routes>
      <Route index element={<FlashcardsOverviewPage />} />
      
      <Route path="decks/:deckId" element={<DecksPage />} />
      
      <Route path="*" element={<Navigate to="/flashcards" replace />} />
    </Routes>
  );
};

export default Flashcards;