import useFetchData from "../fetch/FetchData"
import SearchCountry from "../search/SearchCountry"
import { useEffect, useState } from "react"

// styles 
import './DisplayCountries.scss'

function DisplayCountries() {

    const URL = 'https://restcountries.com/v3.1/independent?status=true'
    const {data, loading, error} = useFetchData(URL)
    const [query, setQuery] = useState('')
    const [debounceQuery, setDebounceQuery] = useState('')
    const [quantity, setQuantity] = useState(10)        
    const addData = 5

    const showCountries = () => setQuantity(quantity => quantity + addData)
    const showLess = () => setQuantity(10)

    const filteredCountries = data.filter((country) => 
        country.name.common.toLowerCase().includes(debounceQuery.toLowerCase())
    )

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceQuery(query)
        },500)

        return () => clearTimeout(handler)

    },[query])

  return (
    <div>
        {loading && <p>Fetching Data...</p>}
        {error && <p>Error:{error}</p>}

        <SearchCountry query={query} setQuery={setQuery} loading={loading} ></SearchCountry>

        <div className="data">
            {filteredCountries.length > 0 ? (
                filteredCountries.slice(0, quantity).map((country) => (
                <div className="grid" key={country.cca3}>
                    <img width="50px" src={country.flags.svg} alt={country.name.common} />
                    <h2>
                    {country.name.common} <span>{country.flag}</span>
                    </h2>
                    <p>Continent: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                </div>
                ))
            ) : (
                <p>No countries found</p>
            )}
            </div>

        <div className="buttons">
            {filteredCountries.length > 0 && (
                <button onClick={showCountries} disabled={quantity >= filteredCountries.length}>View more</button>
            )}
            {filteredCountries.length > 0 && (
                <button onClick={showLess} disabled={quantity <= 10}>View less</button>
            )}
        </div>
       
        
    </div>
  )
}

export default DisplayCountries
