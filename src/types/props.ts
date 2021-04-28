// import { ICity } from './props';
import { ISettingState, ISettingCityState } from "./stateAndAction";

export interface IBaseComponent {
  children: any;
  className?: string;
}
export interface IBaseMeta {
  title: any;
  value: string;
}

export interface IVerficalDivider {
  color: string;
  width: string;
  className?: string;
}

export interface ICityProps {
  name: string;
  weather: IWeather;
  temperature: number;
  onClick?: () => {};
}

export interface IWeatherProps {
  day: string;
  temperature: string;
  weather: IWeather;
}

export interface IWeather {
  icon: string;
  description?: string;
}

export interface ICity {
  id: number;
  name: string;
}

export interface ICurrentComponentState {
  data: any;
  loading: boolean;
}

export interface ICurrentStateProps {
  city: ISettingState['city'];
}

export type ICurrentProps = ICurrentStateProps;

export interface IOtherCitiesState {
  data: {
    list: ISettingCityState[];
  }
  loading: boolean;
  toggle: boolean;
  city?: ISettingCityState;
}
export interface IOtherCitiesStateProps {
  currentCity: ISettingState['city'];
}

export interface IOtherCitiesDispatchProps {
  onCityClick: ({} : ICity) => {};
}

export type IOtherCitiesProps = IOtherCitiesDispatchProps & IOtherCitiesStateProps;