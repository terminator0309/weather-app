import React, { useContext, useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "../css/search.css";
import { LocationKeyContext } from "../context/LocationKeyContext";

export default function Search({ cityName, setCityName }) {
  const [res, setRes] = useState("");
  const [err, setErr] = useState("");
  const [locationKey, setLocationKey] = useContext(LocationKeyContext);

  function handleSubmit() {
    var url = "http://dataservice.accuweather.com/locations/v1/search?";

    return fetch(
      url +
        new URLSearchParams({
          apikey: "uMmEOHWTpfaEh8XtUHMddmEnwjh7QVUB",
          q: cityName,
        })
    )
      .then((response) => response.json())
      .then((response) => {
        setRes(response);
        setLocationKey(response[0].Key);
      })
      .catch((error) => setErr(error));
  }

  useEffect(() => {
    console.log(res + " " + cityName);
  }, [res, cityName]);

  function Response() {
    if (res) {
      // return <div>{res[0].LocalizedName}</div>;
      console.log(res);
      console.log(locationKey);
      return <></>;
    } else if (err) {
      //return <div>{err}</div>;
      console.log(cityName + " err " + err);
      return <></>;
    } else return <></>;
  }

  return (
    <div className="search-container">
      <center>
        <h1>Weather</h1>
      </center>
      <div className="">
        <InputGroup>
          <FormControl
            className="input m-2"
            placeholder="Enter the city name"
            onChange={(e) => setCityName(e.target.value)}
          />
        </InputGroup>
        <div className="d-flex justify-content-end">
          <Button
            className="mt-2 mr-2"
            varinat="outline-primary"
            onClick={handleSubmit}
          >
            Search
          </Button>
          <Button className="mt-2" variant="outline-secondary">
            Location
          </Button>
        </div>
      </div>
      <h2>{locationKey}</h2>
      <Response />
    </div>
  );
}
