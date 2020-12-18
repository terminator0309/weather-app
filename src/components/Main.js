import React, { Component } from "react";
import Chart from "./Chart";
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
          <div class="row">
            <div class="col">
              <Chart />
            </div>
            <div class="col">
              <ForecastWeather />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
