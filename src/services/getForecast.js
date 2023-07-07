import { ajax } from "../tools/axios";

export const getCityForecast = async (city) => {

    const optionsRequest = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
            q: city,
            appid: process.env.OPENWEATHER_KEY,
            units: "metric",
            lang: "es"
        }
    };

    return await ajax(optionsRequest)

}