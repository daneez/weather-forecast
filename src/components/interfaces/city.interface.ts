import { IWeather } from "./weather.interface";

export interface ICityProps {
  name: string;
  weather: IWeather;
  temperature: number;
  onClick?: () => {};
}
