import React from 'react';

interface Props {
    events: any[],
    month: number,
    year: number
}

const MainCalendar = ({ events, month, year }: Props) => {
    const currentMonth = month
    const currentYear = year

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const items = events.map(item => {
        const [year, month, day] = item.date.split('-');
        return {
            ...item,
            day: Number(day),
            month: Number(month) - 1, 
            year: Number(year)
        };
    });

    // Adjust to start on Monday instead of Sunday
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay() - 1;
    if (firstDayOfMonth === -1) firstDayOfMonth = 6; 

    return (
        <div className="bg-[#111111] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-[1.5px] border-white/20 overflow-hidden w-full">
            <div className="grid grid-cols-7 border-b-[1.5px] border-white/20 bg-black/50">
                {weekDays.map((day, i) => (
                    <div key={day} className={`py-4 text-center text-[0.8rem] font-bold text-white/50 uppercase tracking-widest ${i < 6 ? 'border-r-[1.5px] border-white/20' : ''}`}>
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 auto-rows-[120px] md:auto-rows-[140px]">
                {[...Array(firstDayOfMonth)].map((_, i) => (
                    <div key={`empty-${i}`} className="border-r-[1.5px] border-b-[1.5px] border-white/20 bg-[#1A1A1A]/50" />
                ))}

                {days.map(day => (
                    // CHANGED: hover:bg-[#00CEC8]/10 gives that subtle teal hint on the background
                    <div key={day} className="border-r-[1.5px] border-b-[1.5px] border-white/20 p-2 hover:bg-[#00CEC8]/10 transition-colors group cursor-pointer relative flex flex-col">
                        
                        {/* CHANGED: group-hover:text-[#00CEC8] makes the number itself turn teal */}
                        <span className="text-sm font-bold text-white/80 group-hover:text-[#00CEC8] transition-colors p-1">
                            {day}
                        </span>

                        <div className="mt-1 space-y-1.5 overflow-y-auto max-h-[90px] no-scrollbar">
                            {items
                                .filter(item => item.day === day && item.month === currentMonth && item.year === currentYear)
                                .map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`text-[10px] md:text-[11px] px-2 py-1.5 rounded-md font-bold border truncate transition-transform hover:scale-[1.02] ${
                                            item.eventType === 'note'
                                                ? 'bg-white/10 text-white border-white/20'
                                                : 'bg-[#00CEC8]/15 text-[#00CEC8] border-[#00CEC8]/30'
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

export default MainCalendar;