import Country from './Country'


const Countries = ({countries, search}) => {
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
    
    if (filtered.length == 1){
        return <Country country={filtered[0]}/>
    }
    else if (filtered.length < 10){
        return filtered.map(country => <div key={country.name.common}>{country.name.common}</div>)
    }
    else {
        return <div>Too many matches, specify another filter</div>
    }
}

export default Countries