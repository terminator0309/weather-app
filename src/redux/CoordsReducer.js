import * as ActionType from "./ActionType";

const CoordsReducer = (
  state = { lat: null, long: null, errMess: null },
  action
) => {
  switch (action.type) {
    case ActionType.UPDATE_COORDS:
      console.log("Reducer", action);
      return {
        ...state,
        lat: action.payload.lat,
        long: action.payload.long,
        errMess: null,
      };

    case ActionType.FAILED_COORDS:
      return {
        ...state,
        errMess: action.payload,
      };

    default:
      return state;
  }
};

export default CoordsReducer;
