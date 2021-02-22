import { useState } from 'react';
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";
import './Weather.css'

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});

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
        <WeatherInfo data={weatherData} />
      </div>
    )
  } else {
    const apiKey = "1310bc4e8cf007ecff5b29c848ad9e3b";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ..."
  }
}