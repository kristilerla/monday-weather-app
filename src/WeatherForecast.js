import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded]= useState(false);
    let [forecast,setForecast] = useState(null);

    useEffect(() => {
setLoaded(false);
    }, [props.coordinates]);
    
    function handleResponse(response){
       setForecast(response.data.daily);
       setLoaded(true);
    }
    function load(){
        const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
   
    if (loaded) {

        return (
            <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForecast, index){
                if (index < 5){

             
                return (
                    <div className="col">
                    <WeatherForecastDay data={dailyForecast} />
                 
                </div>

                );

            } else {
                return null;
            }
            })}
           
        
        </div>
        
         </div>

        );

       
    }
    else {
       load();
       
    
   }

 

}