function BasicInformation({country}) {
  return (
    <div className="card basic-information">
          <h3>Basic Information</h3>
          <p><span>Capital: </span>{country.capital}</p>
          <p><span>Region: </span> {country.region}</p>
          <p><span>Subregion:  </span>{country.subregion}</p>
          <p><span>Population:</span> {country.population.toLocaleString('en-US')}</p>
          <p><span>Area:  </span>{country.area.toLocaleString('en-US')}</p>
          <p><span>Population density: </span> {(country.population / country.area).toFixed(2)} km<sup>2</sup></p>
    </div>
  )
}

export default BasicInformation
