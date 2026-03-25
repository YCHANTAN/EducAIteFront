interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search' }: SearchBarProps) {
  return (
    <div className="flex w-full max-w-md items-center rounded-full border border-white/20 bg-black px-4 py-2">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
      />
      <button className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black">
        Search
      </button>
    </div>
  );
}
export default SearchBar;