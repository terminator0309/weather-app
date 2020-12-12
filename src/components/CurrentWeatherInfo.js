import React, { Component } from "react";
import { connect } from "react-redux";

class CurrentWeatherInfo extends Component {
  render() {
    return (
      <div
        className="col-11 col-md-7 bg-purple current-weather-info"
        style={{ minHeight: "200px" }}
      >
        <div className="container-fluid">
          <center className="mt-2">
            <h1>
              <b>INFO</b>
            </h1>
          </center>
          <center>
            <div className="row">
              <div className="col">
                <div className="row mt-2">
                  <div className="col-8">
                    Feels-like <i class="far fa-smile-beam"></i>
                  </div>
                  <div className="col-4">
                    {this.props.currWeatherData.feels_like} <sup>o</sup>C
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-8">
                    Pressure <i class="fas fa-compress-arrows-alt"></i>
                  </div>
                  <div className="col-4">
                    {this.props.currWeatherData.pressure} Pa
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-8">
                    Wind Speed <i class="fas fa-wind"></i>
                  </div>
                  <div className="col-4">
                    {this.props.currWeatherData.wind_speed} mph
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row mt-2">
                  <div className="col-8">
                    Dew-point <i class="fas fa-tint"></i>
                  </div>
                  <div className="col-4">
                    {this.props.currWeatherData.dew_point} <sup>o</sup>C
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-8">
                    Humidity <i class="fas fa-percentage"></i>
                  </div>
                  <div className="col-4">
                    {this.props.currWeatherData.humidity} %
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-8">
                    Visibility <i class="fas fa-eye"></i>
                  </div>
                  <div className="col-4">
                    {this.props.currWeatherData.visibility} m
                  </div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currWeatherData: state.weather.data.current,
  };
};
export default connect(mapStateToProps)(CurrentWeatherInfo);
