import React from 'react';
import App from './App.jsx'


const Future = (props) => {
var allDays= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date(props.day.dt * 1000); // to get the DateTime.
var dayName = allDays[d.getDay()]; // It will give day index, and based on index we can get day name from the array.
let picUrl = `http://openweathermap.org/img/wn/${props.day.weather[0].icon}.png`;

  return (
    <div>
    <div className="future-tile">
      <div className="header">
      <h2>{dayName}</h2>
      </div>
      <div>
       <img src={picUrl} alt="id"/>
       <h3>{props.day.weather[0].description}</h3>
      </div>
      <h3>{Math.round(props.day.temp.max)}/{Math.round(props.day.temp.min)}</h3>
    </div>
    </div>
  )
}


export default Future