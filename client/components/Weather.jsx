import App from './App.jsx';
import APIKEY from './utils.jsx';
import axios from 'axios';
import React from 'react'

const Weather = (props) => {



  return (
    <div className="weather-tile">
      <div className="header">
      <h2>Today's Weather</h2>
      </div>
      <div>
        <h5>Feels like</h5><h5>{props.info.feels_like}</h5>
        <h5>Temp</h5><h5>{props.info.temp}</h5>
        <h5>High</h5><h5>{props.info.temp_max}</h5>
        <h5>Low</h5><h5>{props.info.temp_min}</h5>
        <div className="report">

        </div>
      </div>
    </div>
  )
}


export default Weather