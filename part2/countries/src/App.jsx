import { useEffect, useState } from 'react'
import countriesService from './services/countriesService'
import FindCountry from './components/FindCountry'
import Countries from './components/Countries'


function App() {
  const [countries, setNewCountries] = useState([])
  const [search, setNewSearch] = useState('')

  useEffect(() => {
    console.log(`contries is currently`, countries)

    if(countries){
      console.log("fetching countries...")

      countriesService
      .getAll()
      .then(response => {
        setNewCountries(response)
      })
    }
  }, [])

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <>
      <FindCountry onChange={handleSearch}/>
      <Countries countries={countries} search={search}/>
    </>
  )
}

export default App
