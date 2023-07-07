import { ajax } from "../tools/axios";

export const getCityForecast = async (city) => {

    const optionsRequest = {
        method: 'GET',
        url: process.env.URL_FORECAST,
        params: {
            q: city,
            appid: process.env.OPENWEATHER_KEY,
            units: "metric",
            lang: "es"
        }
    };

    return await ajax(optionsRequest)

}