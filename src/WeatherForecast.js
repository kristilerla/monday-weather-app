import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded]= useState(false);
    let [forecast,setForecast] = useState(null);

    function handleResponse(response){
       setForecast(response.data.daily);
       setLoaded(true);
    }
   
    if (loaded) {

        return (
            <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <WeatherForecastDay data={forecast[0]} />
             
            </div>
        
        </div>
        
         </div>

        );

       
    }
    else {
       
        const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    
   }

 

}