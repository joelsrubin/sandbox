import React from 'react';
import App from './App.jsx';
import APIKEY from './utils.jsx';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityInfo: null,
      cityName: this.props.city
    }

  }




render () {

  return (
    <div className="weather-tile">
      <div className="header">
      <h2>Today's Weather</h2>
      </div>
      <div>
        <h5>Weather Report</h5>
        <div className="report">

        </div>
      </div>
    </div>
  )
}

}
export default Weather