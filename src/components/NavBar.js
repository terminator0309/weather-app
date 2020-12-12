import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import SearchCityName from "./SearchCityName";
import { fetchWeatherData } from "../redux/ActionCreator";
import Feedback from "./Feedback";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeatherData: (coords) => dispatch(fetchWeatherData(coords)),
  };
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }
  closeModal() {
    this.setState({ isModalOpen: false });
  }
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" className="bg-white">
          <Navbar.Brand>
            <img
              src="img\sun-removebg-preview.png"
              height="50px"
              width="50px"
              alt="Weather"
            />{" "}
            <b>Weather</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                href="#"
                onClick={() => {
                  navigator.geolocation.getCurrentPosition((position) => {
                    this.props.fetchWeatherData({
                      lat: position.coords.latitude,
                      long: position.coords.longitude,
                    });
                  });
                }}
              >
                My Location
              </Nav.Link>
              <Nav.Link href="#" onClick={this.openModal}>
                Feedback
              </Nav.Link>
              <Nav.Link href="#"> Github</Nav.Link>
            </Nav>
            <SearchCityName />
          </Navbar.Collapse>
        </Navbar>
        <Feedback
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
        />
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(NavBar);
