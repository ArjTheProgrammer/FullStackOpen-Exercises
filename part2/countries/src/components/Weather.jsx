import { useState, useEffect } from "react"
import weatherService from "../services/weatherService"


const Weather = ({capital}) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => { 
        weatherService
        .getWeather(capital)
        .then(response => setWeather(response))
    }, [capital]); 

    return ( 
        <div> 
            <h1>
                Weather in {capital}
            </h1> 
            {weather ? ( 
                <div> 
                    <p>{`tempeature ${(weather.main.temp - 273.5).toFixed(2)} Celcius`}</p>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"/>
                    <p>{`wind ${weather.wind.speed} m/s`}</p> 
                </div> 
                ) : ( 
                    <p>Loading...</p> 
                )} 
        </div> 
    );        
}

export default Weather