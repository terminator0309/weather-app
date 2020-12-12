import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    currWeatherData: state.weather.data.current,
  };
};

class CurrentWeather extends Component {
  render() {
    return (
      //! some styling need to be fixed.
      <>
        <div
          className="col-11 col-md-4 bg-white light-shadow"
          style={{ minHeight: "200px", borderRadius: "4px" }}
        >
          <div className="row align-items-center">
            <div className="col">
              <img
                src={`http://openweathermap.org/img/wn/${this.props.currWeatherData.weather[0].icon}@4x.png`}
                alt="Weather"
                width="100%"
              />
            </div>
            <div className="col">
              <div className="row">
                <div className="big-heading-1">
                  {Math.ceil(this.props.currWeatherData.temp)}
                  <sup>o</sup>
                </div>
              </div>
              <div className="row big-heading-2">
                {this.props.currWeatherData.weather[0].main}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(CurrentWeather);
