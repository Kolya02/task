import React from 'react';

function WeatherToday(props) {
  const { weatherOne, city } = props;
  if (!weatherOne) return (<div>Загрузка ...</div>);

  return (
    <div className="topSection">
      <div className="city ">City: {city}</div>
      <div className="temp d-flex justify-content-center align-items-center">
        Temp {Math.round(weatherOne.main.temp - 273)} C
        <img src={`http://openweathermap.org/img/w/${weatherOne.weather[0].icon}.png`} />
      </div>
      <div className="speedWind d-flex justify-content-end">Speed wind {props.weatherOne.wind.speed}</div>
    </div>
  );
}

export default WeatherToday;