function Economy({country}) {
  return (
    <div className="card economy">
          <h3>Economy & Codes</h3>
          <p><span>Currency:</span> {Object.values(country.currencies || {})
            .map(c => `${c.name} (${c.symbol})`).join(", ")}</p>
          <p><span>GINI Index (2015):</span> {country.gini?.[2015] || "N/A"}</p>
          <p><span>Top-level domain:</span> {country.tld?.join(", ")}</p>
          <p><span>Calling code:</span> {country.idd?.root}{country.idd?.suffixes?.[0]}</p>
          <p><span>Driving side:</span> {country.car?.side}</p>
        </div>
  )
}

export default Economy
