import React, { Component } from "react";
import isEmpty from "lodash/isEmpty";

import CardView from "./CardView/CardView";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import { withStyles } from "@material-ui/core/styles";

const tableStyle = {
  tablePosition: {
    marginTop: "20px"
  },
  cardPosition: {
    margin: "0 5px 10px 5px"
  },
  loaderPosition: {
    margin: "50px 50%"
  }
};

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true
    };
  }

  render() {
    const { classes, list } = this.props;
    return (
      <div>
        <Grid container className={classes.tablePosition}>
          {list.map(item => (
            <Grid item key={item.woeid} xs={3}>
              <CardView
                title={item.title}
                loc_type={item.location_type}
                id={item.woeid}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
export default withStyles(tableStyle)(Table);
