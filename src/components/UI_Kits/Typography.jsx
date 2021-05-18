import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    fontSize: props => props.fontSize,
    lineHeight: props => props.lineHeight,
    fontWeight: props => props.fontWeight,
    textTransform: props => props.textTransform,
    textAlign: props => props.textAlign,
    color: props => props.color,
    padding: props => props.padding,
  },
}));

function Typography(props) {
  const classes = useStyles(props);
  const { children } = props;
  return <div className={classes.root}>{children}</div>;
}

export default Typography;
