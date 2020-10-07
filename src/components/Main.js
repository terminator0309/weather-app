import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LocationKeyProvider } from "../context/LocationKeyContext";
import Search from "./Search";
import TodayWeather from "./TodayWeather";
import WeekPredictions from "./WeekPredictions";

export default function Main() {
  const [cityName, setCityName] = useState("");

  return (
    <LocationKeyProvider>
      <Container>
        <Search cityName={cityName} setCityName={setCityName} />
        <Row>
          <Col md={4}>
            <TodayWeather />
          </Col>
          <Col md={8}>
            <WeekPredictions />
          </Col>
        </Row>
      </Container>
    </LocationKeyProvider>
  );
}
