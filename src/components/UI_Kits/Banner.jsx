import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  },
  pic: {
    width: 800,
    height: 500,
    marginTop: 100,
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.image} item xs={false} sm={6} md={7} lg={8}>
      <img
        className={classes.pic}
        src="https://images.unsplash.com/photo-1520693414807-45858f5a9188?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Banner"
      />
    </Grid>
  );
};

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
