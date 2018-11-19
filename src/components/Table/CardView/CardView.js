import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

const cardStyle = {
  cardSize: {
    minWidth: "180px",
    width: "96%",
    margin: "0 2% 4% 2%"
  },
  btn_link: {
    textDecoration: 'none'
  }
};

class CardView extends Component {
  render() {
    const { classes, title, loc_type, id } = this.props;
    return (
      <Card className={classes.cardSize}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography component="p">{loc_type}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            В избранн
          </Button>
          <Link to={`/info/${id}`} className = {classes.btn_link}>
            <Button size="small" color="secondary">
              Подробнее
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(cardStyle)(CardView);
