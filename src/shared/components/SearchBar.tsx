import { useEffect, useState, type KeyboardEvent } from 'react';

interface Props {
  placeholder?: string;

  onQuery: (query: string) => void;
}

export const SearchBar = ({
  placeholder = 'Search',

  onQuery,
}: Props) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [onQuery, query]);

  const handleSearch = () => {
    onQuery(query);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event!.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative flex-1 gap-2 flex items-center justify-center w-full max-w-[600px]">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/60 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 w-80"
        />
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded transition-colors duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};
