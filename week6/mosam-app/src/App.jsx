import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [weather, setWeather] = useState()
  const [city, setCity] = useState("")
  const fetchweather = async ( ) => {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=fae74532d4ea4f1ea55105441253012&q=${city}&aqi=no`)
  
  const data = await response.json()
  setWeather(data)
  }

  return (
    <>
    <input type='text' value={city} placeholder='Enter a city name...' onChange={ (event)=> setCity(event.target.value)} />
      <h1>{weather?.location.name}</h1>
      <h2>{weather?.current.temp_c} temperature </h2>
      <h2><img src={weather?.current.condition.icon}/>{weather?.current.condition.text}</h2>
      <button type='button' onClick={fetchweather}>Show Weather</button>
    </>
  )
}

export default App
