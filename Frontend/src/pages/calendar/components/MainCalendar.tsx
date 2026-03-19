import React from 'react';


interface Props {
    events: any[],
    month: number,
    year: number,
    highlightedDate?: string | null
}


const MainCalendar = ({ events, month, year, highlightedDate }: Props) => {
    const highlightParts = highlightedDate ? highlightedDate.split('-').map(Number) : null;
    const hYear = highlightParts ? highlightParts[0] : null;
    const hMonth = highlightParts ? highlightParts[1] - 1 : null; // 0-indexed
    const hDay = highlightParts ? highlightParts[2] : null;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const items = events.map(item => {
        const [y, m, d] = item.date.split('-');
        return {
            ...item,
            day: Number(d),
            month: Number(m) - 1,
            year: Number(y)
        };
    });

    const firstDayOfMonth = new Date(year, month, 1).getDay();

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
                {[...Array(firstDayOfMonth)].map((_, i) => (
                    <div key={`empty-${i}`} className="border-r border-b border-gray-700 bg-gray-800" />
                ))}

                {days.map(day => {
                    const isHighlighted = hYear === year && hMonth === month && hDay === day;

                    return (
                        <div key={day}
                            className={`border-r border-b border-gray-700 p-2 transition-all duration-500 group cursor-pointer relative
                             ${isHighlighted ? 'bg-indigo-900/40 ring-2 ring-inset ring-indigo-500 z-10' : 'hover:bg-gray-700'}`}>

                            <span className={`text-sm font-bold transition-colors 
                                ${isHighlighted ? 'text-indigo-300' : 'text-white group-hover:text-indigo-400'}`}>
                                {day}
                            </span>

                            <div className="mt-1 space-y-1.5 overflow-y-auto max-h-[90px] no-scrollbar">
                                {items
                                    .filter(item => item.day === day && item.month === month && item.year === year)
                                    .map((item, idx) => (
                                        <div
                                            key={idx}
                                            className={`text-[11px] px-2 py-1 rounded-md font-semibold border shadow-sm truncate transition-transform hover:scale-[1.02] 
                                            ${item.eventType === 'note' ? 'bg-orange-600 border-orange-300' : 'bg-green-600 border-green-300'} 
                                            ${isHighlighted ? 'animate-pulse' : ''} text-white`}
                                        >
                                            {item.title}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default MainCalendar;