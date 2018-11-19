import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import FindWeather from "./containers/FindWeather/FindWeather";
import WeatherInfo from "./containers/WeatherInfo/WeatherInfo";
render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={FindWeather} />
        <Route exact path="/info/:id" component={WeatherInfo} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
