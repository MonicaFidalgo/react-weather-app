import React, { useState } from 'react';

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function setFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit")
  }

  function setCelsius(e) {
    e.preventDefault();
    setUnit("celsius")
  }

  function convertFahrenheit() {
    return (props.temperature * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="d-flex">
        <h3>{Math.round(props.temperature)}</h3>
        <span className="font-weight-bold">ºC | <a href="/" onClick={setFahrenheit}>ºF</a></span>
      </div>
    )
  } else {
    return (
      <div className="d-flex">
        <h3>{Math.round(convertFahrenheit())}</h3>
        <span className="font-weight-bold">ºF |<a href="/" onClick={setCelsius}>ºC</a></span>
      </div>
    )
  }
}