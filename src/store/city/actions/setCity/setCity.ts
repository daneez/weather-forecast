import { ICity } from '../../../../types/stateAndAction';
import { SET_CITY } from '../../type';

export default (city: ICity) => ({
  type: SET_CITY,
  city,
});
