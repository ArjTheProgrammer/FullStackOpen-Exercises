import axios from "axios";
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const key = import.meta.env.VITE_WEATHER_KEY

const getWeather = (capital) => {
    const request = axios.get(`${baseUrl}${capital}&appid=${key}`)
    return request.then(response => response.data)
}

export default { getWeather }