import { ISettingCityState, ISettingState, ICity } from "../../types/stateAndAction";

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
