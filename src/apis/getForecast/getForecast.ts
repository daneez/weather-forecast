import OpenWeatherMap from '../../utils/OpenWeatherMap';

export default (id: string ) => OpenWeatherMap.get('/forecast', {
  params: {
    id,
  },
});