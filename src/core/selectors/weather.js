import { createSelector } from "reselect";

export const getWeather = createSelector(
  state => state.weathers
);
