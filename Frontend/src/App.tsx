import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout Components
import Navbar from './components/Navbar'

// Page Components
import Main from './pages/main'
import CoursePage from './pages/course'
import CourseDetails from './pages/course/component/CourseDetails' // Your new Files view
import AnalyticsPage from './pages/analytics'
import FlashcardsPage from './pages/flashcards'
import TrackerPage from './pages/tracker'
import ResumePage from './pages/resume'
import SettingsPage from './pages/settings'
import CreateNotes from './pages/course/component/CreateNotes'

function App() {
  return (
    <BrowserRouter>
      {/* The background remains black globally to match your UI */}
      <div className="min-h-screen bg-black text-white font-sans antialiased">
        
        {/* Navbar is outside Routes so it stays visible everywhere */}
        <Navbar />

        {/* Main Content Area */}
        <main>
          <Routes>
            {/* Landing/Home Page */}
            <Route path="/" element={<Main />} />
            
            {/* Courses List View */}
            <Route path="/courses" element={<CoursePage />} />
            
            {/* Specific Course Files View */}
            {/* The :id allows you to catch the specific course clicked (e.g., /courses/19174) */}
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/create-notes" element={<CreateNotes />} />
            
            {/* Other Feature Routes */}
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/flashcards" element={<FlashcardsPage />} />
            <Route path="/tracker" element={<TrackerPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            
            {/* Alias for /course to /courses to prevent broken links */}
            <Route path="/course" element={<CoursePage />} />
          </Routes>
        </main>
      </div>  
    </BrowserRouter>
  )
}

export default App