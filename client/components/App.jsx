import React from 'react';
import Weather from './Weather.jsx';
import Future from './Future.jsx';
import APIKEY from './utils.jsx';

import 'regenerator-runtime/runtime'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: null,
      current: [],
      spread: [],
      future: '',
      value: '',
      data: '',
      lat: '',
      lon: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getWeather = this.getWeather.bind(this)
    this.getForecast = this.getForecast.bind(this)
  }

componentDidMount () {
 this.getWeather('DesMoines',APIKEY)
 this.getForecast(this.state.lat, this.state.lon)
 }



handleChange(e) {
  this.setState({
    value: e.target.value
  })
}

 handleSubmit(e) {
  this.setState({
    city: this.state.value

  })
  this.getWeather(this.state.value)
  this.getForecast(this.state.lat,this.state.lon)
  e.preventDefault()
}


getWeather (city) {
   return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKEY}`)
    .then((result) => result.json())
    .then((json) => {
     console.log(json.weather[0].icon)
     this.setState ({
       current: json.weather,
       data: json.main,
       lat: json.coord.lat,
       lon: json.coord.lon
     })
    })
    .catch((error) => {
    console.error(error)
    });
}

getForecast (lat, lon) {
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${APIKEY}`)
  .then((result) => result.json())
  .then((json) => {
    console.log(json.daily)
    let array = json.daily.shift()
    this.setState({
      future: json.daily[0].temp,
      spread: json.daily
    })
  })
  .catch((error) => {
    console.error(error)
  })
}

render() {

console.log('spread:',this.state.spread)
  return (<div>
    <div>
    <h1>Look up the weather in:</h1><h1>{this.state.city}</h1>
    </div>
    <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Your Town" />
    </form>
    <br></br>
    <div >
      <div>
      <Weather current={this.state.current} info={this.state.data} />
      </div>
      <br></br>
      <h2>7 Day Forecast</h2>
      <br></br>
      <div className="container">
      {this.state.spread.map(day =>
      <Future day={day} key={day.dt}/>)}
      </div>
    </div>
  </div>);
};
}
export default App;

