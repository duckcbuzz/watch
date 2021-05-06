import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    background: "firebrick",
    width: "100%",
    "&:before": {
      content: '" "',
      float: "left",
      paddingTop: "100%",
    },
  },
}));

function ImageProduct(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default ImageProduct

