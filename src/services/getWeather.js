import { ajax } from "../tools/axios";

export const getCityWeather = async (city) => {

    try {


        const optionsRequest = {
            method: 'GET',
            url: process.env.VITE_URL_WEATHER,
            params: {
                q: city,
                appid: process.env.VITE_OPENWEATHER_KEY,
                units: "metric",
                lang: "es"
            }
        };

        return await ajax(optionsRequest)

    } catch {

        Toastify({
            text: "Ciudad no encontrada, por favor, busque otra ciudad",
            duration: 3000,
            gravity: "top",
            position: "center",
            style: {
                color: 'yellow',
                background: "black"
            }
        }).showToast();


    }



}