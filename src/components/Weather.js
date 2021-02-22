import { useState } from 'react';
import axios from 'axios';
import FormattedDate from "./FormattedDate";
import './Weather.css'

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});

  let path = '../assets/img/';

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      iconUrl: 'https://ssl.gstatic.com/onebox/weather/64/rain.png',
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      ready: true
    });

  };

  if (weatherData.ready) {
    let cssClass = weatherData.description.replace(/ /g, '');
    return (
      <div className={`Weather ${cssClass}`}>
        <div className="row mb-5">
          <div class="col-12">
            <form>
              <div className="d-flex">
                <input type="search" placeholder="Search a city" className="form-control" autoFocus="on" />
                <button className="btn btn-outline-light" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <ul>
              <li><FormattedDate date={weatherData.date} /></li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-6">
            <div className={`img img-${cssClass}`}></div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            {Math.round(weatherData.temperature)}ºC
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 100%</li>
              <li>Humidity: 97%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    )
  } else {
    const apiKey = "1310bc4e8cf007ecff5b29c848ad9e3b";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ..."
  }
}