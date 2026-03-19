import React from 'react';

const Search = () => {
    return (
        <div className="flex items-center bg-black border-[1.5px] border-white/20 rounded-full w-full md:w-[350px] lg:w-[400px] pl-5 pr-1.5 py-1.5 transition-colors focus-within:border-[#00CEC8] shadow-[0_0_15px_rgba(255,255,255,0.03)]">
            
            {/* Search Icon (Thicker and Pure White) */}
            <div className="text-white mr-3 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.3-4.3"/>
                </svg>
            </div>
            
            {/* Input Field */}
            <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none text-white w-full text-[1.05rem] placeholder:text-white/40"
            />
            
            {/* Inner Pill Button */}
            <button className="bg-white text-black font-semibold text-sm px-7 py-2.5 rounded-full hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all shrink-0">
                Search
            </button>
            
        </div>
    );
};

export default Search;