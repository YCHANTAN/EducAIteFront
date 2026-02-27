import React from 'react'

const AnalyticsHeader = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-end">
      {/* Top Left: Date & Buttons */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-2xl font-semibold">
          4
        </div>
        <div className="text-sm leading-tight text-white/90">
          <p>Tue,</p>
          <p>November</p>
        </div>
        <button className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full ml-auto hover:bg-gray-200 transition">
          Show my Progress &rarr;
        </button>
        <button className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
          <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>

      {/* Top Right: Greeting */}
      <div className="flex flex-col pb-1">
        <h1 className="text-4xl font-bold mb-1">
          Hey, <span className="text-[#00CEC8]">Christian</span>👋
        </h1>
        <p className="text-white/60 text-lg">
          Here's your performance summary this week!
        </p>
      </div>
    </div>
  )
}

export default AnalyticsHeader