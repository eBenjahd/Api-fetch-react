import { Link } from "react-router-dom"

function Geography({country}) {
  return (
    <div className="card geography">
          <h3>Geography</h3>
          <p><span>Coordinates:</span> {country.latlng?.join(", ")}</p>
          <p><span>Capital coordinates:</span> {country.capitalInfo?.latlng?.join(", ")}</p>
          <ol>
              <span>Borders:</span>
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((code) => (
                  <li key={code}>
                    <Link to={`/country/${code}`}>{code}</Link>
                  </li>
                ))
              ) : (
                <li>No borders</li>
              )}
            </ol>
          <p><span>Landlocked:</span> {country.landlocked ? "Yes" : "No"}</p>
    </div>
  )
}

export default Geography
