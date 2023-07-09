import React from "react"
import DateComponent from "./DateComponent"
import SvgImage from "./SvgImage"
const WeatherPanel = ({ weater, forecast }) => {


  let descriptionWeather
  let modifiedDescriptionWeather

  let description1
  let description2
  let description3

  let modifiedDescription1
  let modifiedDescription2
  let modifiedDescription3

  let forecastDate1
  let forecastDate2
  let forecastDate3

  if (weater && forecast) {

    descriptionWeather = weater.weather[0].description

    modifiedDescriptionWeather = descriptionWeather.charAt(0).toUpperCase() + descriptionWeather.slice(1)

    description1 = forecast.list[1].weather[0].description
    description2 = forecast.list[2].weather[0].description
    description3 = forecast.list[3].weather[0].description

    modifiedDescription1 = description1.charAt(0).toUpperCase() + description1.slice(1);
    modifiedDescription2 = description2.charAt(0).toUpperCase() + description2.slice(1);
    modifiedDescription3 = description3.charAt(0).toUpperCase() + description3.slice(1);

    forecastDate1 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 16);
    forecastDate2 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 16);
    forecastDate3 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 16);

  }

  return (


    <>

      <div className='mt-5 container-data'>




        {weater && forecast ? (

          <div className='container'>
            <div className='card mb-3 mx-auto text-light'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <h3 className='card-title'>{weater.name}</h3>
                  <p className='card-date'><DateComponent /></p>
                  <h1 className='card-temp'>{(Math.round(weater.main.temp))} C°</h1>
                  <p className="card-desc"><img className='image-description' src={`https://openweathermap.org/img/wn/${weater.weather[0].icon}@2x.png`} alt="icon" /></p>

                  <img src="https://images.pexels.com/photos/10817264/pexels-photo-10817264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className='col-md-8'>
                  <div className='card-body text-start mt-2'></div>
                  <h5 className='card-text'>Estado del clima: {modifiedDescriptionWeather} </h5>
                  <h5 className='card-text'>Temperatura máxima: {Math.round(weater.main.temp_max)} C° </h5>
                  <h5 className='card-text'>Temperatura mínima: {Math.round(weater.main.temp_min)} C° </h5>
                  <h5 className='card-text'>Sencacion térmica: {Math.round(weater.main.feels_like)}C°</h5>
                  <h5 className='card-text'>Humedad: {Math.round(weater.main.humidity)}%</h5>

                </div>
                <hr />

                <div className='row mt-4'>
                  <div className='col'>
                    <p>{forecastDate1} Hs</p>
                    <p className='description'><img src={`https://openweathermap.org/img/wn/${forecast.list[1].weather[0].icon}.png`} alt="icon" />{modifiedDescription1}</p>
                    <p className='temp'>{Math.round(forecast.list[1].main.temp)} °C</p>
                  </div>

                  <div className='col'>
                    <p>{forecastDate2} Hs</p>
                    <p className='description'><img src={`https://openweathermap.org/img/wn/${forecast.list[2].weather[0].icon}.png`} alt="icon" />{modifiedDescription2}</p>
                    <p className='temp'>{Math.round(forecast.list[2].main.temp)} °C</p>
                  </div>

                  <div className='col'>
                    <p>{forecastDate3} Hs</p>
                    <p className='description'><img src={`https://openweathermap.org/img/wn/${forecast.list[3].weather[0].icon}.png`} alt="icon" />{modifiedDescription3}</p>
                    <p className='temp'>{Math.round(forecast.list[3].main.temp)} °C</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className='noData'>
              <SvgImage />
            </div>
          </>
        )
        }

      </div>
    </>
  )
}



export default WeatherPanel