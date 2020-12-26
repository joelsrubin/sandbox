import App from './App.jsx';
import APIKEY from './utils.jsx';
import axios from 'axios';
import React from 'react'

const Weather = (props) => {



  return (
    <div>
    <div className="weather-tile">
      <div className="header">
      <h2>Today's Weather</h2>
      </div>
      <div className="titles">
        <h3>Feels like:</h3><h4>{props.info.feels_like}</h4>
        <h3>Temp:</h3><h4>{props.info.temp}</h4>
        <h3>High:</h3><h4>{props.info.temp_max}</h4>
        <h3>Low:</h3><h4>{props.info.temp_min}</h4>
      </div>
      <div className="feels-like">
        <h3></h3>
      </div>
      </div>
    </div>
  )
}


export default Weather