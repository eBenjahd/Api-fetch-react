function SearchCountry({query, setQuery, loading}) {
  return (
    <div>
        <label htmlFor="country">Search for a country:</label>
        <input 
            type="search" 
            placeholder="Search for a country" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
        />

        {loading && <p>Loading...</p> }
    </div>
  )
}

export default SearchCountry
