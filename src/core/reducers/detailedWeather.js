import {
  GET_DETAILED_WEATHER_FULFILLED,
  GET_DETAILED_WEATHER_REJECTED,
  GET_DETAILED_WEATHER_PENDING
} from "../actions/DetailedWeather";

import { combineReducers } from "redux";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case GET_DETAILED_WEATHER_REJECTED:
    case GET_DETAILED_WEATHER_FULFILLED:
      return false;
    case GET_DETAILED_WEATHER_PENDING:
      return true;
    default:
      return state;
  }
};

const error = (state = "", action) => {
  switch (action.type) {
    case GET_DETAILED_WEATHER_REJECTED:
      return action.payload;
    default:
      return state;
  }
};

const detailedWeathers = (state = {}, action) => {
  switch (action.type) {
    case GET_DETAILED_WEATHER_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

const detailedWeather = combineReducers({
    isFetching,
    error,
    detailedWeathers
})

export default detailedWeather