import {capitalize} from '../../../utils/capitalize'

function Maps({country}) {
  return (
    <div className="card maps">
          <h3>Maps & extras</h3>
          <div>
            <p><a href={country.maps.googleMaps} target="_blank" rel="noreferrer">Google Maps</a></p>
            <p><a href={country.maps.openStreetMaps} target="_blank" rel="noreferrer">OpenStreetMap</a></p>
          </div>
          <p><span>Timezones:</span> {country.timezones?.join(", ")}</p>
          <p><span>Week starts on:</span> {capitalize(country.startOfWeek)}</p>
          <p><span>Postal code format:</span> {country.postalCode?.format}</p>
    </div>
  )
}

export default Maps
