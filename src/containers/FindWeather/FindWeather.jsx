import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import weatherActions from "../../core/actions/CityWeather";

// import { getWeather } from "../../core/selectors/weather";
import getWeather from "../../core/actions/CityWeather";

import Grid from "@material-ui/core/Grid";
import FindWeatherBtn from "../../components/FindWeatherBtn/FindWeatherBtn";
import SearchWeatherInp from "../../components/SearchWeatherInp/SearchWeatherInp";
import Table from "../../components/Table/Table";

const test = 'ar'

class FindWeather extends Component {
  componentDidMount() {
    this.props.getWeatherAction();
  }
  render() {
    const { weathers } = this.props.weather;
    return (
      <Grid container>
        <Grid item xs={11}>
          <SearchWeatherInp />
        </Grid>
        <Grid item xs={1}>
          <FindWeatherBtn />
        </Grid>
        <Grid item xs={12}>
          <Table list={weathers} />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});

const mapDispatchToProps = dispatch => {
  return {
    getWeatherAction: () => {
      dispatch(getWeather(test));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindWeather);
