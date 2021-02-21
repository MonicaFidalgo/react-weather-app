import './App.css';
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Lisbon" />
        <footer>
          This project was coded by <a href="https://www.linkedin.com/in/monicafidalgo/" target="_blank" rel="noreferrer">Mónica Fidalgo</a> and is open-sourced on <a href="https://github.com/MonicaFidalgo/react-weather-app" target="_blank" rel="noreferrer">Github</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
