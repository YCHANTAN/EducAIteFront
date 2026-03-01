import React from 'react'


const MainCalendar: React.FC = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const items = [
        { day: 5, type: 'note', title: 'Buy Tshirt' },
        { day: 12, type: 'event', title: 'Midterm' },
        { day: 12, type: 'note', title: 'Bring calculator' },
        { day: 18, type: 'event', title: 'Submit Infosec assignment' },
        { day: 24, type: 'note', title: 'Group study' },
        { day: 28, type: 'event', title: 'Intrams' },
    ];

    return (
        <div className="bg-black rounded-2xl shadow-md border border-gray-700 overflow-hidden">
            <div className="grid grid-cols-7 border-b border-gray-700 bg-gray-800">
                {weekDays.map(day => (
                    <div key={day} className="py-4 text-center text-xs font-bold text-white uppercase tracking-widest">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 auto-rows-[130px]">
                {[...Array(3)].map((_, i) => (
                    <div key={`empty-${i}`} className="border-r border-b border-gray-700 bg-gray-800" />
                ))}

                {days.map(day => (
                    <div key={day} className="border-r border-b border-gray-700 p-2 hover:bg-gray-700 transition-colors group cursor-pointer relative">
                        <span className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                            {day}
                        </span>

                        <div className="mt-1 space-y-1.5 overflow-y-auto max-h-[90px] no-scrollbar">
                            {items
                                .filter(item => item.day === day)
                                .map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`text-[11px] px-2 py-1 rounded-md font-semibold border shadow-sm truncate transition-transform hover:scale-[1.02] ${item.type === 'note'
                                            ? 'bg-orange-600 text-white border-orange-300'
                                            : 'bg-green-600 text-white border-green-300'
                                            }`}
                                    >
                                        {item.title}
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default MainCalendar