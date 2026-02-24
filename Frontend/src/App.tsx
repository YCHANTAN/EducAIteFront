import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
// Import your new page
import CoursePage from './pages/course/index' 
import settingIcon from './assets/Setting Icon.svg'

function App() {
  return (
    <BrowserRouter>
      {/* Note: I removed the p-8 from the wrapper so the 
          CoursePage can take up the full screen like your design 
      */}
      <div className="min-h-screen bg-black text-white font-sans antialiased">
        
        <header className="flex justify-center pt-8 fixed w-full z-50">
          <nav className="flex items-center bg-black/50 backdrop-blur-md border-[1.5px] border-white/20 px-8 py-3 rounded-full gap-8 shadow-[0_8px_30px_rgba(255,255,255,0.15)]">
            
            <NavLink to="/" className={({ isActive }) => 
              `text-sm transition-all pb-1 ${isActive ? 'text-white border-b-2 border-cyan-400 font-semibold' : 'text-gray-400 hover:text-white'}`
            }>
              Home
            </NavLink>

            {/* This "to" must match the Route path below */}
            <NavLink to="/course" className={({ isActive }) => 
              `text-sm transition-all pb-1 ${isActive ? 'text-white border-b-2 border-[#00CEC8] font-semibold' : 'text-gray-400 hover:text-white'}`
            }>
              Courses
            </NavLink>

            <NavLink to="/analytics" className={({ isActive }) => 
              `text-sm transition-all pb-1 ${isActive ? 'text-white border-b-2 border-[#00CEC8] font-bold' : 'text-gray-400 hover:text-white'}`
            }>
              Analytics
            </NavLink>

            <NavLink to="/flashcards" className={({ isActive }) => 
              `text-sm transition-all pb-1 ${isActive ? 'text-white border-b-2 border-[#00CEC8] font-bold' : 'text-gray-400 hover:text-white'}`
            }>
              Flashcards
            </NavLink>

            <NavLink to="/tracker" className={({ isActive }) => 
              `text-sm transition-all pb-1 ${isActive ? 'text-white border-b-2 border-[#00CEC8] font-bold' : 'text-gray-400 hover:text-white'}`
            }>
              Tracker
            </NavLink>

            <NavLink to="/resume" className={({ isActive }) => 
              `text-sm transition-all pb-1 ${isActive ? 'text-white border-b-2 border-[#00CEC8] font-bold' : 'text-gray-400 hover:text-white'}`
            }>
              Resume
            </NavLink>

            <NavLink to="/settings" className="ml-4 flex items-center justify-center">
              <img src={settingIcon} alt="Settings" className="w-5 h-5 brightness-0 invert opacity-80" />
            </NavLink>
          </nav>
        </header>

        {/* Main Content Area */}
        <main>
          <Routes>
            {/* When the URL is /course, show the CoursePage component */}
            <Route path="/course" element={<CoursePage />} />
            
            {/* Add your other routes here */}
            <Route path="/" element={<div className="pt-32 text-center">Home Page Content</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App