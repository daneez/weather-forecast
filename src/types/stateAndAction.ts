export interface ICity {
  id: number;
  name: string;
}
export interface ISettingState {
  city: ICity;
}
export interface ISettingCityState {
  id: string;
  name: string;
}
export interface IAction {
  type: string;
  [key: string]: any;
}