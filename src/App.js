import './App.css';
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <Weather defaultCity="Lisbon" />
        <footer className="mt-2">
          This project was coded by <a href="https://www.linkedin.com/in/monicafidalgo/" target="_blank" rel="noreferrer">Mónica Fidalgo</a> and is open-sourced on <a href="https://github.com/MonicaFidalgo/react-weather-app" target="_blank" rel="noreferrer">Github</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
