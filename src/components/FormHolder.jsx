import React from "react"
import { getCityWeather } from "../services/getWeather"
import { getCityForecast } from "../services/getForecast"
import Form from "./Form"
const FormHolder = ({ setCityWeather, setCityForecast, inputValue }) => {


  const formHolder = async (e) => {

    if (inputValue === '') {

      Toastify({
        text: "Por favor, busque una ciudad",
        duration: 3000,
        gravity: "top",
        position: "center",
        style: {
          color: 'yellow',
          background: "black"
        }
      }).showToast();


    } else {

      e.preventDefault()

      setCityWeather(await getCityWeather(inputValue))

      setCityForecast(await getCityForecast(inputValue))

    }
  }

  return (

    <Form eventForm={formHolder} />

  )


}

export default FormHolder