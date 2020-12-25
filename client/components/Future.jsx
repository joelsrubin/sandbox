import React from 'react';
import App from './App.jsx'


const Future = (props) => {

  return (
    <div>
    <div className="weather-tile">
      <div className="header">
      <h2>Tomorrow's Weather</h2>
      </div>
      <div>
        <h5>Day</h5><h5>{props.future.day}</h5>
        <h5>Evening</h5><h5>{props.future.eve}</h5>
        <h5>High</h5><h5>{props.future.max}</h5>
        <h5>Low</h5><h5>{props.future.min}</h5>

      </div>
    </div>
    </div>
  )
}


export default Future