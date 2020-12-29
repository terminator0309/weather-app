import React, { Component } from "react";
import Chart from "./Chart";
import CurrentWeather from "./CurrentWeather";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import ForecastWeather from "./ForecastWeather";

class Main extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <CurrentWeather />
          </div>
          <div className="row justify-content-center align-items-center mt-5">
            <CurrentWeatherInfo />
          </div>

          <center className="chart-heading">
            <h1>Hourly weather report</h1>
          </center>
          <div className="chart-container mt-5">
            <Chart />
          </div>
          <div class="row mt-5">
            <div class="col-12">
              <ForecastWeather />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
