import { useState } from 'react';
import axios from 'axios';
import './Weather.css'

export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);


  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      iconUrl: 'https://ssl.gstatic.com/onebox/weather/64/rain.png',
      description: response.data.weather[0].description,
      date: 'Wednesday 07:00',
    });
    setReady(true);
  };

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="d-flex">
            <input type="search" placeholder="Search a city" className="form-control" autoFocus="on" />
            <button type="submit" value="Search" className="btn btn-primary">Search</button>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li class="text-capitalize">{weatherData.description}</li>
        </ul>
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
    const apiKey = "1b88d0740b7a27a249ebb4be51a2bdac";
    let city = "Lisbon";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ..."
  }
}