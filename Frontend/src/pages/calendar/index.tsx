import React from 'react'
import MainCalendar from './components/MainCalendar';
import UpcomingEvents from './components/UpcomingEvents';
import AddEvent from './components/AddEvent';
import Search from './components/Search';
import SecondaryCalendar from './components/SecondaryCalendar';


const Calendar: React.FC = () => {
    return (
        <div>
            <h1>Calendar</h1>
            <Search />
            <MainCalendar />
            <AddEvent />
            <SecondaryCalendar />
            <UpcomingEvents />
        </div>
    )
};

export default Calendar
