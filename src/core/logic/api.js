import axios from "axios";

export const AXIOS = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/",
});
