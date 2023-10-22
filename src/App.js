import './App.css'
import Search from './components/search/Search'
import CurrentWeather from './components/current_weather/CurrentWeather'
import { useState } from 'react'
import { WEATHER_API_URL, WEATHER_KEY } from './api'
import Forecast from './components/forecast/Forecast'
import Footer from './components/footer/Footer'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  // console.log(currentWeather)
  // console.log(forecast)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')

    // const weatherFetch = async () => {
    //   const currentWeather = await fetch(
    //     `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`
    //   )
    //   const forecastFetch = await fetch(
    //     `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`
    //   )
    //   const result = await currentWeather.json()
    //   const result2 = await forecastFetch.json()
    //   setData(result)
    // }

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&lang=ua&appid=${WEATHER_KEY}&units=metric`
    )
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&lang=ua&appid=${WEATHER_KEY}&units=metric`
    )

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...forecastResponse })
      })
      .catch((error) => console.error(error.message))
  }

  return (
    <div className="container">
      <div className="main">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
      <Footer />
    </div>
  )
}

export default App
