export interface IWeatherProps {
  day: string;
  temperature: string;
  weather: IWeather;
}

export interface IWeather {
  icon: string;
  description?: string;
}
