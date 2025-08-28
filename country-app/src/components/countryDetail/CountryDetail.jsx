import { useParams, Link } from "react-router-dom"
import useFetchData from "../fetch/FetchData"
import BasicInformation from './components/BasicInformation'
import Identity from './components/Identity'
import Goverment from './components/Goverment'
import Economy from './components/Economy'
import Geography from './components/Geography'
import Maps from './components/Maps'

import './CountryDetail.scss'

function CountryDetail() {

    const { cca3 } = useParams();
    const URL = import.meta.env.VITE_COUNTRIES_API
    const {data , loading , error} = useFetchData(URL)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
  
    const country = data.find(c => c.cca3 === cca3)
    if (!country) return <p>Country not found</p>

    

  return (
    <div className="country-detailed">
       <Link to="/" className="back-link"> Back</Link>
      <h2>{country.name.common} {country.flag}</h2>
      <div className="data-container">
        <BasicInformation country={country}/>
        <Identity country={country} />
        <Goverment country={country} />
        <Economy country={country} />
        <Geography country={country} />
        <Maps country={country} />

      </div>
     
    </div>

  )
}

export default CountryDetail
