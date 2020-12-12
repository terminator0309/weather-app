import { SEARCH_CITYNAME } from "./ActionType";
const CityNameReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCH_CITYNAME: {
      state = action.payload;
      return state;
    }
    default:
      return state;
  }
};

export default CityNameReducer;
