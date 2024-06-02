import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App"> <h1>Kristils Weather app</h1>
      <div className="container">
        <Weather defaultCity="Asker" />
        
        <footer>
          This project is created by {""}
          <a href="https://www.linkedin.com/in/kristilerla/">Kristil Erla</a> and is open sourced on {""}
      <a href="https://github.com/kristilerla/monday-weather-app"> Github</a>
    </footer>
  

      </div>
    </div>
  );
}
