import App from "./App.jsx";
import APIKEY from "./utils.jsx";
import axios from "axios";
import React from "react";

const Weather = (props) => {
  let picUrl = `http://openweathermap.org/img/wn/${props.daily.weather[0].icon}.png`;
  if (props.isLoaded) {
    return (
      <div>
        <div className="weather-tile">
          <div className="weather-header">
            <h2>Today's Weather</h2>
            <img src={picUrl} />
          </div>
          <div className="titles">
            <h3>{props.daily.weather[0].description}</h3>
            <br></br>
            <h3>High:</h3>
            <h3>{Math.round(props.info.temp_max)}</h3>
            <h3>Low:</h3>
            <h3>{Math.round(props.info.temp_min)}</h3>
          </div>
          <div className="feels-like">
            <h3></h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="weather-tile">
          <div className="header">
            <h2>Today's Weather</h2>
          </div>
          <div className="titles"></div>
          <div className="feels-like">
            <h3></h3>
          </div>
        </div>
      </div>
    );
  }
};

export default Weather;
