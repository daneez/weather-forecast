import React from 'react';
import styles from './Weather.module.css';
import Temperature from '../../../Temperature';
import { IWeatherProps } from '../../../interfaces/weather.interface';

const Weather: React.FunctionComponent<IWeatherProps> = ({
  day,
  temperature,
  weather,
}) => (
  <div data-testid="WEATHER" className={styles.weather}>
    <h3 data-testid="DAY" className={styles.day}>{day}</h3>
    <img 
      data-testid="WEATHER_ICON"
      className={styles.icon}
      src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
      alt={weather.description} 
    />
    <div data-testid="TEMP" className={styles.temperature}>
      <Temperature>{temperature}</Temperature>
    </div>
  </div>
);

export default Weather;