import React from 'react'
import { NavLink } from 'react-router-dom'
import settingIcon from '../assets/setting-navbar.svg'

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/main' }, 
    { name: 'Courses', path: '/courses' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Flashcards', path: '/flashcards' },
    { name: 'Tracker', path: '/tracker' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Resume', path: '/resume' },
  ]

  return (
    <header className="flex justify-center pt-8 fixed w-full z-50 pointer-events-none">
      <nav className="flex items-center bg-black/50 backdrop-blur-md border-[1.5px] border-white/20 px-8 py-3 rounded-full gap-8 shadow-[0_8px_30px_rgba(255,255,255,0.15)] pointer-events-auto">
        
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `relative group text-sm transition-all pb-1 ${
                isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.name}
                
                {/* Animated Underline */}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'w-full bg-[#00CEC8] shadow-[0_0_10px_rgba(0,206,200,0.8)]' 
                      : 'w-0 bg-white/20 group-hover:w-full'
                  }`} 
                />
              </>
            )}
          </NavLink>
        ))}

        {/* --- SETTING ICON CONTAINER (UPDATED) --- */}
        <NavLink 
          to="/settings" 
          className={({ isActive }) =>
            // Added "relative group pb-1" to perfectly match the text links!
            `-ml-2 -mt-1 relative group flex items-center justify-center transition-all pb-1 -ml-4 mt-0.5`
          }
        >
          {({ isActive }) => (
            <>
              <img 
                src={settingIcon} 
                alt="Settings" 
                className={`w-5 h-5 brightness-0 invert transition-opacity ${
                  isActive ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
                }`} 
              />
              
              {/* Animated Underline (Copied exactly from the text links) */}
              <span 
                className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'w-full bg-[#00CEC8] shadow-[0_0_10px_rgba(0,206,200,0.8)]' 
                    : 'w-0 bg-white/20 group-hover:w-full'
                }`} 
              />
            </>
          )}
        </NavLink>
        
      </nav>
    </header>
  )
}

export default Navbar