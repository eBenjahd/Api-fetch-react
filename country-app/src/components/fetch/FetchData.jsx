import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetchData(URL, apiKey = null) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!URL) return

    async function fetchData() {
      let FINAL_URL = URL

      if (apiKey) {
        const separator = URL.includes('?') ? '&' : '?'
        FINAL_URL = `${URL}${separator}api_key=${apiKey}`
      }

      setLoading(true)

      try {
        const res = await axios.get(FINAL_URL)
        setData(res.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [URL, apiKey])

  return { data, loading, error }
}

export default useFetchData