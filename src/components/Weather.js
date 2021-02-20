import './Weather.css'

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="d-flex">
          <input type="search" placeholder="Search a city" className="form-control" />
          <button type="submit" value="Search" className="btn btn-primary">Search</button>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="Rainy Cloudy" />
          6ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 100%</li>
            <li>Humidity: 97%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
}