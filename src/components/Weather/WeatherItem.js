import React from 'react';
import Moment from 'moment';


function WeatherItem(props) {
  const { weather } = props;
  console.log(props)
  return (
    <li>
      <div className="d-flex justify-content-between">
        <div className="">{Moment(weather.dt_txt).format('LL')}</div>
        <div className=""><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} /></div>
        <div className="">Temp {Math.round(weather.main.temp - 273)} С</div>
      </div>
    </li>
  );
}
export default WeatherItem;