import { useParams, Link } from "react-router-dom"
import useFetchData from "../fetch/FetchData"

function CountryDetail() {

    const { cca3 } = useParams();
    const URL = import.meta.env.VITE_COUNTRIES_API
    const {data , loading , error} = useFetchData(URL)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
  
    const country = data.find(c => c.cca3 === cca3)
    if (!country) return <p>Country not found</p>

  return (
    <div>
      <h2>{country.name.common} {country.flag}</h2>
      <img src={country.flags.svg} alt={country.name.common} />
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
      <Link to="/">Back</Link>
    </div>

  )
}

export default CountryDetail
