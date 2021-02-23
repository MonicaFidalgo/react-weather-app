import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  let cssClass = props.data.description.replace(/ /g, '');
  return (
    <div>
      <div className="row mb-5">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li><FormattedDate date={props.data.date} /></li>
          </ul>
          <div className={`img img-${cssClass}`}></div>
        </div>
        <div className="col-6">
          <div className="d-flex align-items-center">
            <WeatherIcon code={props.data.icon} size={64} />
            <WeatherTemperature temperature={props.data.temperature} />
          </div>
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Feels like {props.data.feels_like}</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
}