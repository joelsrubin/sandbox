import React from 'react';
import App from './App.jsx'


const Future = (props) => {
let picUrl = `http://openweathermap.org/img/wn/${props.day.weather[0].icon}.png`;
  return (
    <div>
    <div className="future-tile">
      <div className="header">
      <h2>Forecast</h2>
      </div>
      <div>
       <img src={picUrl} alt="id"/>
       <h3>{props.day.weather[0].description}</h3>

      </div>
    </div>
    </div>
  )
}


export default Future