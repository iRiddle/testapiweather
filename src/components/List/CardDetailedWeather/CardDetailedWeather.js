import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ru";

import Paper from "@material-ui/core/Paper";

import "./cardDetailedWeatherSt.scss";

class CardWeather extends Component {
  render() {
    const {
      date,
      short_description,
      max_temp,
      min_temp,
      wind_speed,
      img
    } = this.props;
    moment.locale("ru");
    const ruDate = moment(date).calendar(null, {
      lastDay: "[вчера]",
      sameDay: "[сегодня]",
      nextDay: "[завтра]",
      lastWeek: "[last] dddd",
      nextWeek: "dddd",
      sameElse: "L"
    });
    return (
      <Paper className="paper">
        <div className="paper__day">{ruDate}</div>
        <div className="paper__data-position">
          <img
            width="30px"
            height="30px"
            className="paper__img-desc"
            src={`https://www.metaweather.com/static/img/weather/${img}.svg`}
          />
          {short_description}
        </div>
        <div className="paper__data-position">Max: {max_temp}</div>
        <div className="paper__data-position">Min: {min_temp}</div>
        <div className="paper__data-position">W.S: {wind_speed}</div>
      </Paper>
    );
  }
}

export default CardWeather;
