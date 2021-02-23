import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  let cssClass = props.data.description.replace(/ /g, '');
  return (
    <div>
      <div className="row mb-4">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li><FormattedDate date={props.data.date} /></li>
          </ul>
          <div className={`img img-${cssClass}`}></div>
        </div>
        <div className="col-6">
          <div className="d-flex align-items-center">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <h3>{Math.round(props.data.temperature)}ºC</h3>
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