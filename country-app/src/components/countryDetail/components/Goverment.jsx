function Goverment({country}) {
  return (
    <div className="card goverment">
          <h3>Government & Status</h3>
          <p><span>Official name:</span> {country.name.official}</p>
          <p><span>Independent:</span> {country.independent ? "Yes" : "No"}</p>
          <p><span>UN Member:</span> {country.unMember ? "Yes" : "No"}</p>
          <p><span>FIFA code:</span> {country.fifa}</p>
    </div>
  )
}

export default Goverment
