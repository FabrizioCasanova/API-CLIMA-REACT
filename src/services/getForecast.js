import { ajax } from "../tools/axios";

export const getCityForecast = async (city) => {

    const optionsRequest = {
        method: 'GET',
        url: import.meta.env.VITE_URL_FORECAST,
        params: {
            q: city,
            appid: import.meta.env.VITE_OPENWEATHER_KEY,
            units: "metric",
            lang: "es"
        }
    };

    return await ajax(optionsRequest)

}