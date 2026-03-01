import React from 'react';

const eventsData = [
    {
        date: '03/05/2026',
        event: 'React Conference 2026',
    },
    {
        date: '04/10/2026',
        event: 'Tech Workshop',
    },
    {
        date: '05/15/2026',
        event: 'Web Development Meetup',
    },
];

const UpcomingEvents = () => {
    return (
        <div className="bg-black text-white border border-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
            <ul>
                {eventsData.map((event, index) => (
                    <li key={index} className="flex items-center mb-2 border-b">
                        <span>📅 {event.date} | {event.event}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingEvents;