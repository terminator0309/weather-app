import * as ActionType from "./ActionType";
// ! completely changing everything .... have to use one call api request 🤦‍♂️

const WeatherReducer = (
  state = {
    data: {},
    isLoading: true,
    errMess: null,
  },
  action
) => {
  switch (action.type) {
    case ActionType.WEATHER_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
      };

    case ActionType.WEATHER_DATA:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        errMess: null,
      };

    case ActionType.WEATHER_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default WeatherReducer;
