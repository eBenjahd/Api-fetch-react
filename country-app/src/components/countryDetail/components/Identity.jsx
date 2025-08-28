function Identity({country}) {
  return (
    <div className="card identity">
          <h3>Identity</h3>
          <p><span>Demonym (English):</span> {country.demonyms?.eng?.m} / {country.demonyms?.eng?.f}</p>
          <p><span>Languages:</span> {Object.values(country.languages || {}).join(", ")}</p>
          <p><span>Alternative spellings:</span> {country.altSpellings?.join(", ")}</p>
          <p><span>Translations (Spanish):</span> {country.translations?.spa?.common}</p>
    </div>
  )
}

export default Identity
