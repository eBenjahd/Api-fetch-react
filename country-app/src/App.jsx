import DisplayCountries from "./components/displayCountries/DisplayCountries"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import CountryDetail from "./components/countryDetail/CountryDetail"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DisplayCountries />} />
          <Route path="/country/:cca3" element={<CountryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
