import React, {useState} from "react";
import WeatherInformation from "./WeatherInformation";

import axios from "axios";
import "./Weather.css";


export default function Weather(props){
    const [city, setCity] = useState(props.defaultCity);
   const [weatherData, setWeatherData] = useState({ ready: false});

   function handleResponse(response){
    
   setWeatherData({
    ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed ,
        description: response.data.weather[0].description,
        iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        city: response.data.name,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
    });
}
function handleSubmit(event){
    event.preventDefault();
    search();
    
  
}

function handleCityChange(event){
    setCity(event.target.value);

}
function search(){
    const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
}
if (weatherData.ready) {

    return (
       
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">       
<input type="search"
placeholder="Enter a city"
className="form-control" 
autoFocus="on"
onChange={handleCityChange}/>
  </div>
  <div className="col-3">
<input type="submit"
value="search"
className="btn btn-primary w-100" />
  </div>

  </div>
            </form>
            <WeatherInformation data={weatherData}/>
          
          </div>
    
     );
    }
    else {

   search();

     return "Loading...";
    }
}
