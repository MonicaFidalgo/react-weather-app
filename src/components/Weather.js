import { useState } from 'react';
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";
import './Weather.css'

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [input, setInput] = useState(props.defaultCity);

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

  function search() {
    const apiKey = "1310bc4e8cf007ecff5b29c848ad9e3b";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(e) {
    e.preventDefault();
    search();
  }

  function handleInputChange(e) {
    setInput(e.target.value)
  }

  if (weatherData.ready) {
    let cssClass = weatherData.description.replace(/ /g, '');
    return (
      <div className={`Weather ${cssClass}`}>
        <div className="row mb-5">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="input-group input-group-sm search-form">
                <input type="search" placeholder="Search a city" className="form-control search-bar" autoFocus="on" onChange={handleInputChange} />
                <div className="input-group-append">
                  <button className="btn btn-outline-light" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    )
  } else {
    search();
    return "Loading ..."
  }
}