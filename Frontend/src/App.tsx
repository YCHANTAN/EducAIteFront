import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import settingIcon from './assets/Setting Icon.svg' 

import Main from './pages/main'
import CoursePage from './pages/course'
import AnalyticsPage from './pages/analytics'
import FlashcardsPage from './pages/flashcards'
import TrackerPage from './pages/tracker'
import ResumePage from './pages/resume'
import SettingsPage from './pages/settings'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white font-sans antialiased">
        
        {/* Your clean, reusable Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main>
          <Routes>
             <Route path="/" element={<Main />} />
             <Route path="/course" element={<CoursePage />} />
             <Route path="/analytics" element={<AnalyticsPage />} />
             <Route path="/flashcards" element={<FlashcardsPage />} />
             <Route path="/tracker" element={<TrackerPage />} />
             <Route path="/resume" element={<ResumePage />} />
             <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>  
    </BrowserRouter>
  )
}

export default App