import OpenWeatherMap from '../../utils/OpenWeatherMap';

export default (ids: Array<string>) => OpenWeatherMap.get('/group', {
  params: {
    id: ids.join(','),
  },
});