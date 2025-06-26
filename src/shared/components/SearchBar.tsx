

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({placeholder = 'Search', onQuery}: Props) => {

    console.log(placeholder, onQuery);
    
  return (
      <div className="search-container">
      {/* <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button> */}
    </div>
  )
}
