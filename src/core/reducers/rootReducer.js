import { combineReducers } from "redux";
import weather from './weather'
import detailedWeather from './detailedWeather'
const rootReducer = combineReducers({
  weather,
  detailedWeather
});

export default rootReducer
