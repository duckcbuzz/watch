import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CardDetail from "../CardDetail/index.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginRight: 20
  },
  content: {
    marginRight: 0
  }
}));

const CardList = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item container spacing={1}>
        <Grid item xs={3}>
          <CardDetail />
        </Grid>
        <Grid item xs={3}>
          <CardDetail />
        </Grid>
        <Grid item xs={3}>
          <CardDetail />
        </Grid>
        <Grid item xs={3} className={classes.content}>
          <CardDetail />
        </Grid>
      </Grid>
    </div>
  );
};

export default CardList;
