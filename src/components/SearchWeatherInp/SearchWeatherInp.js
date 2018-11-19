import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";

class SearchWeatherInp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  handleChange = e => {
    this.setState({
      inputText: e.target.value
    });
  };

  render() {
    return (
      <TextField
        value={this.state.inputText}
        onChange={this.handleChange}
        fullWidth
        id="outlined-name"
        label="Введите город"
        variant="outlined"
      />
    );
  }
}

export default SearchWeatherInp;
