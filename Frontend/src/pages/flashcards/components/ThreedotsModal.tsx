import React, { useState, useRef, useEffect } from 'react';

interface ThreedotsModalProps {
  children?: React.ReactNode;
}

const ThreedotsModal: React.FC<ThreedotsModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents triggering the card's click event
          setIsOpen(!isOpen);
        }}
        className="text-white/30 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
        aria-label="Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="12" r="1.5"></circle>
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="19" cy="12" r="1.5"></circle>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 origin-top-right rounded-[20px] bg-[#0A0A0A] border border-white/10 shadow-2xl z-[100] overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
          <div className="flex flex-col py-1">
            {children || (
              <>
                <button className="w-full text-left px-5 py-3 text-sm text-white/70 hover:bg-white/10">Edit</button>
                <button className="w-full text-left px-5 py-3 text-sm text-red-400 hover:bg-red-400/10">Delete</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreedotsModal;