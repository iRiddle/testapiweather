import React, { Component } from "react";
import isEmpty from "lodash/isEmpty";
import moment from "moment";

import Grid from "@material-ui/core/Grid";

import CardDetailedWeather from "./CardDetailedWeather/CardDetailedWeather";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import "./list.scss";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailed: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      detailed: nextProps.detailedObj
    };
  }

  render() {
    const { detailed } = this.state;
    return (
      <div>
        {isEmpty(detailed) ? (
          <CircularProgress className = 'loader' />
        ) : (
          <Grid container>
            <div>
              <Typography
                variant="title"
                gutterBottom
                color="primary"
                className="typo"
              >
                {detailed.title}
              </Typography>
              <Typography variant="subheading">
                Today: {moment(detailed.time).format("DD.MM.YYYY")}
              </Typography>
            </div>
            {detailed.consolidated_weather.map(item => (
              <CardDetailedWeather
                key={item.id}
                date={item.applicable_date}
                temp={item.the_temp}
                short_description={item.weather_state_name}
                max_temp={Math.round(item.max_temp)}
                min_temp={Math.round(item.min_temp)}
                wind_speed={Math.round(item.wind_speed)}
                img={item.weather_state_abbr}
              />
            ))}
          </Grid>
        )}
      </div>
    );
  }
}

export default List;
