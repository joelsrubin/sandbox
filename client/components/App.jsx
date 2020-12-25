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
      value: '',
      apiKey: APIKEY,
      data: '',
      lat: '',
      lon: '',
      future: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getWeather = this.getWeather.bind(this)
    this.getForecast = this.getForecast.bind(this)
  }

componentDidMount () {
// this.getWeather('DesMoines',APIKEY)

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
  this.getWeather(this.state.value, APIKEY)
  this.getForecast(APIKEY)
  e.preventDefault()
}


getWeather (city, APIKEY) {
   return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKEY}`)
    .then((result) => result.json())
    .then((json) => {
     console.log(json.coord)
     this.setState ({
       data: json.main,
       lat: json.coord.lat,
       lon: json.coord.lon
     })
    })
    .catch((error) => {
    console.error(error)
    });
}

getForecast (APIKEY) {
  let lat = this.state.lat
  let lon = this.state.lon
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${APIKEY}`)
  .then((result) => result.json())
  .then((json) => {
    console.log(json.daily[0].temp)
    this.setState({
      future: json.daily[0].temp
    })
  })
  .catch((error) => {
    console.error(error)
  })
}

render() {

console.log(this.state.city)
  return (<div>
    <div>
    <h1>Look up the weather in:</h1><h1>{this.state.city}</h1>
    </div>
    <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter Your Town" />
    </form>
    <br></br>
    <div className="container">
      <Weather info={this.state.data} />
      <Future future={this.state.future}/>
    </div>
  </div>);
};
}
export default App;

