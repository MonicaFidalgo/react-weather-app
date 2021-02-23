import React, { useState } from 'react';
import axios from 'axios';
import Forecast from "./Forecast";

export default function WeatherForecastaList(props) {

  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState({});

  function handleForecastResponse(response) {
    setForecastData(response.data)
    setLoaded(true);
  }

  if (loaded && props.city === forecastData.city.name) {
    return (
      <div className="d-flex justify-content-between flex-wrap">
        {forecastData.list.slice(0, 7).map(function (forecastItem) {
          return <Forecast data={forecastItem} />
        })
        }
      </div>
    )
  } else {
    const apiKey = "1310bc4e8cf007ecff5b29c848ad9e3b";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return "Loading..."
  }
}