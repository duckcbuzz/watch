import React from "react";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import Typography from "../../UI_Kits/Typography";

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    padding: "30px 0px",
    fontSize: 20,
    "&>button": {
      backgroundColor: "#FFFFFF",
      border: "none",
      padding: "0px 10px",
      fontSize: 20,
      margin: "0px 5px",

      "&:hover": {
        cursor: "pointer",
      },
      "&:focus": {
        outline: "none",
      },
    },
  },
  size: {
    borderBottom: "3px solid !important",
  },
}));

function Size(props) {
  const [size, setSize] = useState(null);
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Typography padding="0px 30px 0px 0px">Size:</Typography>
      {["M", "L", "XL"].map((item, index) => (
        <button
          key={index}
          className={size === index ? classes.size : null}
          onClick={() => setSize(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

Size.propTypes = {};

export default Size;
