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
        <h3>Feels like:</h3><h3>{Math.round(props.info.feels_like)}</h3>
        <h3>Temp:</h3><h3>{Math.round(props.info.temp)}</h3>
        <h3>High:</h3><h3>{Math.round(props.info.temp_max)}</h3>
        <h3>Low:</h3><h3>{Math.round(props.info.temp_min)}</h3>
      </div>
      <div className="feels-like">
        <h3></h3>
      </div>
      </div>
    </div>
  )
}


export default Weather