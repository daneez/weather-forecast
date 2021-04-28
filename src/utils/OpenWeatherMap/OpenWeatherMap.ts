import axios from 'axios';
require("dotenv").config();

const baseURL = 'https://api.openweathermap.org/data/2.5';

const OpenWeatherMap = axios.create({
  baseURL,
});

const enrichRequestWithAppId = (config: any) => {
  config.params.appid = process.env.REACT_APP_API_KEY;
  return config;
}

const enrichRequestWithCelsiusUnits = (config: any) => {
  config.params.units = 'metric';

  return config;
};

OpenWeatherMap.interceptors.request.use(enrichRequestWithAppId);
OpenWeatherMap.interceptors.request.use(enrichRequestWithCelsiusUnits);

export default OpenWeatherMap;