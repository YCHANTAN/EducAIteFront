import React, { useState } from 'react';

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const SecondaryCalendar: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date());
    const [selectedDay, setSelectedDay] = useState<number>(date.getDate());

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const month = parseInt(e.target.value);
        setDate(new Date(date.getFullYear(), month, 1));
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const year = parseInt(e.target.value);
        setDate(new Date(year, date.getMonth(), 1));
    };

    const handleDayClick = (day: number) => {
        setSelectedDay(day);
    };

    const goToPreviousMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    };

    const renderDays = () => {
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const days: any[] = [];

        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="w-12 h-12"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(
                <div
                    key={day}
                    className={`w-12 h-12 flex items-center justify-center ${day === selectedDay ? 'bg-white text-black' : 'text-white'}`}
                    onClick={() => handleDayClick(day)}
                >
                    {day}
                </div>
            );
        }
        return days;
    };

    return (
        <div className="bg-black text-white p-4 rounded-lg border border-white">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <select onChange={handleMonthChange} value={date.getMonth()}>
                        {months.map((month, index) => (
                            <option key={index} value={index}>{month}</option>
                        ))}
                    </select>
                    <select onChange={handleYearChange} value={date.getFullYear()}>
                        {Array.from({ length: 10 }, (_, i) => (
                            <option key={i} value={date.getFullYear() + i}>{date.getFullYear() + i}</option>
                        ))}
                    </select>
                </div>
                <button onClick={goToPreviousMonth} className="text-white">{"<"}</button>
                <button onClick={goToNextMonth} className="text-white">{">"}</button>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {renderDays()}
            </div>
        </div>
    );
};

export default SecondaryCalendar;