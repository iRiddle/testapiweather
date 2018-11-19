import React, { Component } from "react";
import { connect } from "react-redux";
import getDetailedWeather from "../../core/actions/DetailedWeather";

import DetailedList from "../../components/List/List";
import Grid from "@material-ui/core/Grid";

class WeatherInfo extends Component {
  state = {
    id: null
  };

  componentDidMount() {
    this.props.getDetailedWeatherAction(this.state.id);
  }

  componentWillMount() {
    this.setState({
      id: this.props.location.pathname.slice(6)
    });
  }

  render() {
    const { detailedWeathers } = this.props.detailedWeather;
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <DetailedList detailedObj={detailedWeathers} />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  detailedWeather: state.detailedWeather
});

const mapDispatchToProps = dispatch => {
  return {
    getDetailedWeatherAction: id => {
      dispatch(getDetailedWeather(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherInfo);
