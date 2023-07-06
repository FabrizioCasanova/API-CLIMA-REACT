import React, { useState } from "react"
import FormHolder from "./FormHolder"
import Autocomplete from "./Autocomplete"
import WeatherPanel from "./WeatherPanel"

const States = () => {

  const [inputValue, setInputValue] = useState('')
  const [cityWeather, setCityWeather] = useState(null)
  const [cityForecast, setCityForecast] = useState(null)

  return (

    <>

      <FormHolder setCityWeather={setCityWeather} setCityForecast={setCityForecast} inputValue={inputValue} cityWeather={cityWeather} />

      <Autocomplete setInputValue={setInputValue} />

      <WeatherPanel weater={cityWeather} forecast={cityForecast} inputValue={inputValue} />

    </>

  )

}

export default States