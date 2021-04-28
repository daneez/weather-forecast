import { ICity } from "./props";

export interface ISettingState {
  city: ICity;
}

export interface ISettingCityState {
  id: string | undefined;
  name: string | undefined;
}

export interface IAction {
  type: string;
  [key: string]: any;
}