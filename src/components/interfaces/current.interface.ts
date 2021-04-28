import { ISettingState } from "../../types/stateAndAction";

export interface ICurrentComponentState {
  data: any;
  loading: boolean;
}

export interface ICurrentStateProps {
  city: ISettingState['city'];
}

export type ICurrentProps = ICurrentStateProps;