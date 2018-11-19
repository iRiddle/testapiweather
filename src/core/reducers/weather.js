import {
  GET_WEATHER_FULFILLED,
  GET_WEATHER_REJECTED,
  GET_WEATHER_PENDING
} from "../actions/CityWeather";

import { combineReducers } from "redux";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case GET_WEATHER_REJECTED:
    case GET_WEATHER_FULFILLED:
      return false;
    case GET_WEATHER_PENDING:
      return true;
    default:
      return state;
  }
};

const error = (state = "", action) => {
  switch (action.type) {
    case GET_WEATHER_REJECTED:
      return action.payload;
    default:
      return state;
  }
};

const weathers = (state = [], action) => {
  switch (action.type) {
    case GET_WEATHER_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

const weather = combineReducers({
  isFetching,
  error,
  weathers
});

export default weather;
