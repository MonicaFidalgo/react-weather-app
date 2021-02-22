import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  let cssClass = props.data.description.replace(/ /g, '');
  return (
    <div>
      <div className="row mb-4">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li><FormattedDate date={props.data.date} /></li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-6">
          <div className={`img img-${cssClass}`}></div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
          {Math.round(props.data.temperature)}ºC
    </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 100%</li>
            <li>Humidity: 97%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div></div>
  )
}