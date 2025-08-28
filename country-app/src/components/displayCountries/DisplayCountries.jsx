import useFetchData from "../fetch/FetchData"
import SearchCountry from "../search/SearchCountry"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// styles 
import './DisplayCountries.scss'

function DisplayCountries() {

    const URL = import.meta.env.VITE_COUNTRIES_API // URL 
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
                <div className={`country-card`}key={country.cca3}>
                    <figure>
                        <img src={country.flags.svg} alt={country.name.common} />
                    </figure>
                    <div className="info-card">
                        <h2>
                            {country.name.common}
                        </h2>

                        <div className="data-container">
                            <p><span>Continent:</span> {country.region}</p>
                            <p><span>Capital: </span> {country.capital}</p>
                            <p><span>Population: </span> {country.population.toLocaleString("en-US")}</p>
                        </div>
                        <Link to={`/country/${country.cca3}`}>   
                                View Detail <span>{country.flag}</span>
                        </Link>
                    </div>
                </div>
                ))
            ) : (
                <p>No countries found</p>
            )}
            </div>

        <div className="buttons">
            {filteredCountries.length > 0 && (
                <button onClick={showCountries} disabled={quantity >= filteredCountries.length}>Load more</button>
            )}
            {filteredCountries.length > 0 && (
                <button onClick={showLess} disabled={quantity <= 10}>View less</button>
            )}
        </div>
       
        
    </div>
  )
}

export default DisplayCountries
