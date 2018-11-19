import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  btn: {
    height: "100%"
  }
};

class FindWeatherBtn extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.btn}
      >
        Найти
      </Button>
    );
  }
}

export default withStyles(styles)(FindWeatherBtn);
