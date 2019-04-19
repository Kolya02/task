import React, { Component }  from 'react';
import axios from 'axios';
import WeatherToday from '../../components/Weather/WeatherToday';
import WeatherOther from '../../components/Weather/WeatherOther';
import { apiWeatherUrl } from '../../utils/constants';

class Weather extends Component {
  state = {
    weatherOne: null,
    weatherAll: [],
    city: ''
  }


  componentDidMount() {
    axios.get(apiWeatherUrl)
      .then(response => {
        const city = response.data.city.name;
        const list = response.data.list;
        this.setState({ weatherOne: list[0], weatherAll: list, city: city });
      });
  }

  render() {
    const { weatherOne, weatherAll, city } = this.state;

    return (
      <React.Fragment>
        <div className="container w-50">

          <WeatherToday
            weatherOne={weatherOne}
            city={city}
          />

          <WeatherOther
            weatherAll={weatherAll}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Weather;