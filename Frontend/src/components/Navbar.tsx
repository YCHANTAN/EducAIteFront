import React from 'react'
import { NavLink } from 'react-router-dom'
import settingIcon from '../assets/Setting Icon.svg'

const Navbar = () => {
  return (
    <header className="flex justify-center pt-8 fixed w-full z-50 pointer-events-none">
      <nav className="flex items-center bg-black/50 backdrop-blur-md border-[1.5px] border-white/20 px-8 py-3 rounded-full gap-8 shadow-[0_8px_30px_rgba(255,255,255,0.15)] pointer-events-auto">
        
        <NavLink to="/" className={({ isActive }) => 
          `text-sm transition-all pb-1 ${isActive ? 'text-white border-b-2 border-cyan-400 font-semibold' : 'text-gray-400 hover:text-white'}`
        }>
          Home
        </NavLink>

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

        <NavLink to="/calendar" className={({ isActive }) => 
          `text-sm transition-all pb-1 ${isActive ? 'text-white border-b-2 border-[#00CEC8] font-bold' : 'text-gray-400 hover:text-white'}`
        }>
          Calendar
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
  )
}

export default Navbar