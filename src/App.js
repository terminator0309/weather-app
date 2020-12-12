import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { fetchWeatherData, updateCoords } from "./redux/ActionCreator";
import "./css/Loading.css";
import Loading from "./components/Loading";
import NotFound404 from "./components/NotFound404";

const mapDispatchToProps = (dispatch) => {
  return {
    updatecoords: (coords) => dispatch(updateCoords(coords)),
    fetchWeatherData: (coords) => dispatch(fetchWeatherData(coords)),
  };
};

const mapStateToProps = (state) => {
  return {
    coords: state.coordinate,
    weather: state.weather,
  };
};

class App extends Component {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.props.updatecoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        this.props.fetchWeatherData({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    } else alert("no");
  }

  render() {
    const Render = () => {
      if (this.props.coords.errMess !== null) {
        return <NotFound404 errMess={this.props.coords.errMess} />;
      } else if (this.props.weather.isLoading) {
        return <Loading />;
      }
      return <Main />;
    };
    return (
      <>
        <NavBar coords={this.props.coords} />
        <Render />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
