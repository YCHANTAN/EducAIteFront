import React, { useState, useEffect, useRef } from 'react';

interface Event {
    date: string;
    eventType: string;
    title: string;
}

interface Props {
    events: Event[];
    onResultClick: (date: string) => void;
}

const Search = ({ events, onResultClick }: Props) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Event[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const filtered = events.filter(event =>
            event.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    }, [query, events]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (date: string) => {
        onResultClick(date);
        //clear the search input
        setQuery('');
        setShowDropdown(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="flex items-center bg-black p-4 rounded-lg">
                <div className="flex items-center border border-white rounded-full bg-black">
                    <div className="text-white mr-2 ml-3">🔎</div>
                    <input
                        type="text"
                        placeholder="Search events..."
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setShowDropdown(true);
                        }}
                        onFocus={() => setShowDropdown(true)}
                        className="bg-black text-white outline-none border-none rounded-full p-2 w-48 lg:w-64"
                    />
                </div>
            </div>

            {showDropdown && query && (
                <div className="absolute top-full mt-2 w-full bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                    {results.length > 0 ? (
                        results.map((event, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelect(event.date)}
                                className="p-3 hover:bg-zinc-800 cursor-pointer border-b border-zinc-800 last:border-none transition"
                            >
                                <div className="text-white font-medium text-sm">{event.title}</div>
                                <div className="text-zinc-400 text-xs">
                                    {new Date(event.date).toLocaleDateString(undefined, {
                                        month: 'short', day: 'numeric', year: 'numeric'
                                    })}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-4 text-zinc-500 text-sm">No events found.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;