import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    "& > *": {
      border: "2px solid #E6E6E6",
      padding: "15px",
      color: "#777777",
      fontSize: 20,
    },
    "&>:nth-child(2)": {
      padding: "15px 20px",
      borderRight: "none",
      borderLeft: "none",
    },
  },
  button: {
    backgroundColor: "#ffffff",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#000000",
      color: "#ffffff"
    },
    "&:focus": {
      outline: "none",
    },
  },
}));

function Amount(props) {
  const classes = useStyle();
  const [value, setValue] = useState(1);

  return (
    <div className={classes.root}>
      <button onClick={() => setValue(value - 1)} className={classes.button}>
        -
      </button>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)} className={classes.button}>
        +
      </button>
    </div>
  );
}

Amount.propTypes = {};

export default Amount;
