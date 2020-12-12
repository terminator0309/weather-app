import * as ActionType from "./ActionType";

export const searchCityName = (cityname) => {
  return {
    type: ActionType.SEARCH_CITYNAME,
    payload: cityname,
  };
};

export const updateCoords = (coords) => {
  return {
    type: ActionType.UPDATE_COORDS,
    payload: {
      lat: coords.lat,
      long: coords.lng,
    },
  };
};

export const failedCoords = (errMess) => {
  return {
    type: ActionType.FAILED_COORDS,
    payload: errMess,
  };
};

export const weatherData = (data) => {
  return {
    type: ActionType.WEATHER_DATA,
    payload: data,
  };
};

export const weatherDataFailed = (errMess) => {
  return {
    type: ActionType.WEATHER_DATA_FAILED,
    payload: errMess,
  };
};

export const weatherDataLoading = () => {
  return {
    type: ActionType.WEATHER_DATA_LOADING,
  };
};

export const fetchWeatherData = (coords) => (dispatch) => {
  dispatch(weatherDataLoading());

  return fetch(
    "https://api.openweathermap.org/data/2.5/onecall?" +
      new URLSearchParams({
        lat: coords.lat,
        lon: coords.long,
        appid: ActionType.APPID,
        units: "metric",
        exclude: "hourly,minutely,alerts",
      })
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(weatherData(data));
    });
};

//  converts the cityname to geocoords -> 👍
export const ConvertCityNameToCoords = (cityname) => (dispatch) => {
  return fetch(
    "https://api.opencagedata.com/geocode/v1/json?" +
      new URLSearchParams({
        q: cityname,
        key: ActionType.GEOCODEAPPID,
        limit: 1,
      })
  )
    .then((response) => {
      console.log("error mess : ", response);
      if (response.status === 200) return response;
      else {
        console.log("Inside error cityname to coords block", response);
        var error = new Error(
          "Error " + response.status + ": " + response.statusText
        );
        error.response = response;
        throw error;
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.results.length === 0) throw new Error("Place Not Found!");
      console.log("cityname to coords", data);
      dispatch(updateCoords(data.results[0].geometry));
    })
    .catch((errMess) => dispatch(failedCoords(errMess)));
};

export const addFeedback = (feedback) => ({
  type: ActionType.ADD_FEEDBACK,
  payload: feedback,
});

export const postFeedback = (firstname, lastname, email, message) => (
  dispatch
) => {
  const feedback = {
    firstname,
    lastname,
    email,
    message,
  };
  feedback.date = new Date().toISOString();
  console.log("POST", feedback);

  return fetch("https://json-server-restuarant.herokuapp.com/feedback", {
    method: "POST",
    body: JSON.stringify(feedback),
    headers: {
      "Content-type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addFeedback(response)))
    .catch((error) => {
      console.log("post Feedback : " + error.message);
      alert("NO FEEDBACK POSTED!");
    });
};
