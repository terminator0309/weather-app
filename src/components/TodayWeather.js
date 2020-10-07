import React, { useContext, useState } from "react";
import { LocationKeyContext } from "../context/LocationKeyContext";

export default function TodayWeather() {
  const [locationKey, setLocationKey] = useContext(LocationKeyContext);
  const [aboutToday, setAboutToday] = useState("");
  const [temp, setTemp] = useState({ min: null, max: null });
  const url = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/";

  /*
  GET /forecasts/v1/daily/1day/3139384?apikey=uMmEOHWTpfaEh8XtUHMddmEnwjh7QVUB HTTP/1.1
Accept:
*/
  function getInfo() {
    return fetch(
      url +
        locationKey +
        "?" +
        new URLSearchParams({
          apikey: "uMmEOHWTpfaEh8XtUHMddmEnwjh7QVUB",
        })
    )
      .then((response) => response.json())
      .then((response) => {
        setAboutToday(response.Headline.Text);
        console.log(response);
        setTemp({
          min: response.DailyForecasts[0].Temperature.Minimum.value,
          max: response.DailyForecasts[0].Temperature.Maximum.value,
        });
      })
      .catch((error) => console.log(error));
  }

  if (locationKey) {
    getInfo();
    if (aboutToday === "") return <h2>Loading...</h2>;
    else
      return (
        <div className="mb-2" style={{ height: "65vh", background: "blue" }}>
          <h1>{locationKey}</h1>
          <p>{aboutToday}</p>
          <p>{temp.min}</p>
        </div>
      );
  } else return <></>;
}
