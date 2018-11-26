import { AXIOS } from "../logic/api";

export const GET_DETAILED_WEATHER_FULFILLED = "GET_DETAILED_WEATHER_FULFILLED";
export const GET_DETAILED_WEATHER_REJECTED = "GET_DETAILED_WEATHER_REJECTED";
export const GET_DETAILED_WEATHER_PENDING = "GET_DETAILED_WEATHER_PENDING";

const getDetailedWeather = id => dispatch => {
  dispatch(getDetailedWeatherPending());
  return AXIOS.get(`location/${id}`).then(
    response => {
      dispatch(getDetailedWeatherFulfilled(response.data));
    },
    error => {
      dispatch(getDetailedWeatherRejected(error));
    }
  );
};

export const getDetailedWeatherFulfilled = data => ({
  type: GET_DETAILED_WEATHER_FULFILLED,
  payload: data
});

export const getDetailedWeatherRejected = error => ({
  type: GET_DETAILED_WEATHER_REJECTED,
  payload: error
});

export const getDetailedWeatherPending = () => ({
  type: GET_DETAILED_WEATHER_PENDING
});

export default getDetailedWeather;
