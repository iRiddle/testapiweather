import { AXIOS } from "../logic/api";

export const GET_WEATHER_FULFILLED = "GET_WEATHER_FULFILLED";
export const GET_WEATHER_REJECTED = "GET_WEATHER_REJECTED";
export const GET_WEATHER_PENDING = "GET_WEATHER_PENDING";

const getWeather = (request) => dispatch => {
  dispatch(getWeatherPending());

  return AXIOS.get(`location/search/?query=${request}`)
    .then(
      response => {
        dispatch(getWeatherFulfilled(response.data));
      },
      error => {
        dispatch(getWeatherRejected(error));
      }
    )
};

//action creators

export const getWeatherFulfilled = data => ({
  type: GET_WEATHER_FULFILLED,
  payload: data
});

export const getWeatherRejected = error => ({
  type: GET_WEATHER_REJECTED,
  payload: error
});

export const getWeatherPending = () => ({
  type: GET_WEATHER_PENDING
});

export default getWeather;
