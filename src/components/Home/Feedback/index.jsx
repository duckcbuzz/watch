/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import Slideshow from "./Slideshow";
import Title from "./Title";

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: "#FBFBFB",
    padding: "2%",
    ["@media (max-width: 768px)"]: {
      flexDirection: "column"
    },
  },
  title: {
    textAlign: "center",
  },

}));

function Feedback(props) {
  // eslint-disable-next-line react/prop-types
  const classes = useStyles();
  const { slideImages, slidesToShow, height } = props;
  return (
    <Grid className={classes.background} container alignItems="center">
      <Grid xs className={classes.title} item>
        <Title />
      </Grid>
      <Grid xs={9} item>
        <Slideshow slideImages={slideImages} />
      </Grid>
    </Grid>
  );
}

Feedback.propTypes = {
  slideImages: PropTypes.array,
};

Feedback.defaultProps = {
  slideImages: [],
};

export default Feedback;
