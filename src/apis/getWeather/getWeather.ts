import OpenWeatherMap from '../../utils/OpenWeatherMap';

export default (id: number) => OpenWeatherMap.get('/weather', {
  params: {
    id,
  },
});
