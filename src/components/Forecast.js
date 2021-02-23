import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {

  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}ºC`
  }

  return (
    <div className="c-card">
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <span>{hours()}</span>
      <h4>{temperature()}</h4>
    </div>
  )
}