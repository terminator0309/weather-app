import React, { Component } from "react";
import CurrentWeather from "./CurrentWeather";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import ForecastWeather from "./ForecastWeather";

class Main extends Component {
  render() {
    return (
      <div className="mt-3">
        <div className="container-fluid">
          <div className="row justify-content-around">
            <CurrentWeather />
            <CurrentWeatherInfo />
          </div>
          <ForecastWeather />
        </div>
      </div>
    );
  }
}

export default Main;
