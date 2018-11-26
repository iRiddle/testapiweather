import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

const styles = {
  btn: {
    marginTop: "5px",
    height: "100%"
  }
};

class SearchWeatherInp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: ""
    };
  }

  submitHandler = evt => {
    console.log(evt.charCode);
    evt.preventDefault();
    this.props.onHandlePath(this.state.inputField);
    this.setState({
      inputField: ""
    });
  };

  handleDataByEnter = e => {
    if (e.charCode === 13) {
      e.preventDefault();
      this.props.onHandlePath(this.state.inputField);
      this.setState({
        inputField: ""
      });
    }
  };

  handleChange = event => {
    this.setState({
      inputField: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <TextField
          value={this.state.inputField}
          onChange={this.handleChange}
          fullWidth
          id="outlined-name"
          label="Введите город"
          variant="outlined"
          onKeyPress={this.handleDataByEnter}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={this.submitHandler}
        >
          Найти
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(SearchWeatherInp);
