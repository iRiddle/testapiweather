import React, { Component } from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
// import { bindActionCreators } from "redux";

// import weatherActions from "../../core/actions/CityWeather";

// import { getWeather } from "../../core/selectors/weather";
import getWeather from "../../core/actions/CityWeather";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchWeatherInp from "../../components/SearchWeatherInp/SearchWeatherInp";
import Table from "../../components/Table/Table";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  loaderPosition: {
    marginTop: "20px",
    display: "block",
    margin: "auto"
  }
};

class FindWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPath: "",
      default: "New York",
      trigger: false
    };
  }

  componentDidMount() {
    const path = localStorage.getItem("path");
    if (path) {
      this.props.getWeatherAction(path);
    } else {
      this.props.getWeatherAction(this.state.default);
    }
  }

  handleData = data => {
    localStorage.setItem("path", data);
    this.setState({
      searchPath: data
    });
    this.props.getWeatherAction(data);
  };

  // думаю, что все проверки на пустоту и прочее необходимо проверять в глупых
  // компонентах, чтобы не зарсорять контейнер всякой чепухой
  // куча тернарников смотрится не очень красиво,
  // а так, если передавать isFetching в глупые компоненты, то будет лучше
  // но пока так

  render() {
    const { weathers, isFetching, error } = this.props.weather;
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <SearchWeatherInp onHandlePath={this.handleData} />
        </Grid>
        <Grid item xs={12}>
          {!isFetching ? (
            !this.state.searchPath && localStorage.getItem("path") === "" ? (
              <p align="center">Поисковая строка пуста</p>
            ) : isEmpty(weathers) ? (
              <p align="center">Нет данных</p>
            ) : (
              <Table list={weathers} />
            )
          ) : (
            <CircularProgress className={classes.loaderPosition} />
          )}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather,
  isFetching: state.isFetching
});

const mapDispatchToProps = dispatch => {
  return {
    getWeatherAction: path => {
      dispatch(getWeather(path));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FindWeather));
