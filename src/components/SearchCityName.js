import React, { Component } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import {
  ConvertCityNameToCoords,
  fetchWeatherData,
} from "../redux/ActionCreator";

class SearchCityName extends Component {
  async handleSubmit(e) {
    e.preventDefault();
    if (e.target.cityname.value !== "") {
      await this.props.ConvertCityNameToCoords(e.target.cityname.value);
      this.props.fetchWeatherData(this.props.coords);
    }
  }

  render() {
    return (
      <Form inline onSubmit={(e) => this.handleSubmit(e)}>
        <FormControl
          id="cityname"
          name="cityname"
          placeholder="City Name"
          className="form-control mr-sm-2"
        />

        <Button type="submit" className="button-gradient">
          <i class="fa fa-search" aria-hidden="true"></i>
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ConvertCityNameToCoords: (cityname) =>
      dispatch(ConvertCityNameToCoords(cityname)),
    fetchWeatherData: (coords) => dispatch(fetchWeatherData(coords)),
  };
};

const mapStateToProps = (state) => {
  return {
    coords: state.coordinate,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCityName);
