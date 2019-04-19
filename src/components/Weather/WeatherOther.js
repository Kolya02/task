import React from 'react';
import WeatherItem from '../Weather/WeatherItem';

function WeatherOther(props) {
  const weatherAll = props.weatherAll;
  return (
    <div className="listWeather">
      <ul>
        {
          weatherAll.map((weather) => {
            return (
              <WeatherItem
                key={weather.dt}
                weather={weather}
              />
            )
          })
        }
      </ul>
    </div>
  );
}
export default WeatherOther;