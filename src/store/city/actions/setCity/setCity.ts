import { ICity } from './../../../../types/props';
import { SET_CITY } from '../../type';

export default (city: ICity) => ({
  type: SET_CITY,
  city,
});
