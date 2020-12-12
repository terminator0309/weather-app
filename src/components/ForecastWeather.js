import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    forecast: state.weather.data.daily,
  };
};

const convertDate = (date) => {
  let day = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  let d = new Date(date * 1000);
  return day[d.getDay()] + " " + d.getDate();
};

class ForecastWeather extends Component {
  render() {
    // TODO : THIS COMPONENT IS ALSO A MESS.
    // TODO : fix some layout issues and style everything and jump on to feedback form ;p
    // ! Remove all the mess :(
    // :) Removed all the mess, literally!
    console.log("forecast component", this.props.forecast);
    const forecastDaily = this.props.forecast.map((daily) => (
      <div key={daily.dt} className="col-5 col-md-2">
        <div className="p-1 mt-3 bg-white forecast-cards light-shadow">
          <center>
            <div>{convertDate(daily.dt)}</div>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
                alt="Weather"
              />
            </div>
            <span>
              <b>
                {Math.ceil(daily.temp.max)}
                <sup>o</sup>{" "}
              </b>
            </span>
            <span>
              {Math.ceil(daily.temp.min)}
              <sup>o</sup>
            </span>
            <div>{daily.weather[0].main}</div>
          </center>
        </div>
      </div>
    ));
    return (
      <>
        <div className="row justify-content-center">{forecastDaily}</div>
      </>
    );
  }
}

export default connect(mapStateToProps)(ForecastWeather);
