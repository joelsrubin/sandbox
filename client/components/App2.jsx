import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather.jsx";
import Future from "./Future.jsx";
import APIKEY from "./utils.jsx";
import "regenerator-runtime/runtime";

function App2() {
  const [data, setData] = useState({ results: [] });
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [foreLoaded, setForeLoaded] = useState(false);
  const [forecast, setForecast] = useState({ forecastResults: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=${APIKEY}`
      );
      setData(result.data);
      setLatitude(result.data.coord.lat);
      setLongitude(result.data.coord.lon);
      setLoaded(true);
    };

    fetchData();
  }, [search]);

  useEffect(() => {
    const fetchForecast = async () => {
      const forecast = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${APIKEY}`
      );
      setForecast(forecast.data);
      setForeLoaded(true);
    };
    fetchForecast();
  }, [latitude, longitude]);

  if (!foreLoaded) {
    return (
      <div>
        <div>
          <h1>Look up the weather in:</h1>
          <h1>{search}</h1>
        </div>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter Your Town"
          spellCheck="false"
        />
        <button type="button" onClick={() => setSearch(query)}>
          Search
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>Look up the weather in:</h1>
          <h1>{search}</h1>
        </div>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter Your Town"
          spellCheck="false"
        />
        <button type="button" onClick={() => setSearch(query)}>
          Search
        </button>
        <br></br>
        <br></br>
        <div>
          <div>
            <Weather daily={data} isLoaded={loaded} info={data.main} />
          </div>

          <h2>8 Day Forecast</h2>
          <br></br>
          <div className="container">
            {forecast.daily.map((day) => (
              <Future day={day} key={day.dt} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App2;
