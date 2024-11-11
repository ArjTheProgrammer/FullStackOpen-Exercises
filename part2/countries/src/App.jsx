import { useEffect, useState } from 'react'
import countriesService from './services/countriesService'
import FindCountry from './components/FindCountry'
import Countries from './components/Countries'


function App() {
  const [countries, setNewCountries] = useState([])
  const [search, setNewSearch] = useState('')
  const [country, setNewCountry] = useState([])
  const [showCountry, setShowCountry] = useState(true)

  useEffect(() => {
    console.log(`countries is currently`, countries)

      countriesService
      .getAll()
      .then(response => {
        setNewCountries(response)
      })
  }, [])

  const handleSearch = (event) => {
    setShowCountry(false)
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const handleShow = (event) => {
    setShowCountry(true)
    countriesService
      .getCountry(event.target.value)
      .then(response => {
        setNewCountry([response])
      })
  }

  const showCountries = !showCountry ? countries : country

  return (
    <>
      <FindCountry value={search} onChange={handleSearch}/>
      <Countries countries={showCountries} search={search} onShow={handleShow}/>
    </>
  )
}

export default App