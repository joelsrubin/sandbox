import React from 'react';
import Weather from './Weather.jsx';
import Future from './Future.jsx';
import APIKEY from './utils.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: null,
      value: '',
      apiKey: APIKEY,
      data: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getWeather = this.getWeather.bind(this)
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
 this.getWeather(this.state.city, APIKEY)
  e.preventDefault()
}

getWeather (city, APIKEY) {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${this.state.apiKey}`)
    .then((result) => result.json())
    .then((json) => {
     console.log(json.main)
     this.setState ({
       data: json.main
     })
    })
    .catch((error) => {
    console.error(error)
    });
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
      <Weather city={this.state.city}/>
      <Future city={this.state.city}/>
    </div>
  </div>);
};
}
export default App;

