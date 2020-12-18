import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import CityNameReducer from "./CityNameReducer";
import CoordsReducer from "./CoordsReducer";
import { InitialForm } from "./Feedback";
import WeatherReducer from "./WeatherReducer";
import { createForms } from "react-redux-form";

function ConfigureStore() {
  const store = createStore(
    combineReducers({
      cityname: CityNameReducer,
      weather: WeatherReducer,
      coordinate: CoordsReducer,
      ...createForms({
        feedback: InitialForm,
      }),
    }),
    applyMiddleware(thunk)
  );
  store.subscribe(() => console.log("Store updated ", store.getState()));
  return store;
}

export default ConfigureStore;
