import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";

import Amount from "./Amount";
import BuyButton from "./BuyButton";
import ModalSize from "./ModalSize";

const useStyle = makeStyles(() => ({
  button: {
    display: "flex",
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "#FFFFFF",
    border: "none",
    padding: "30px 0px",
    color: "#333",
    "& > *": {
      marginRight: 5,
    },
    "&:hover": {
      cursor: "pointer",
    },
    "&:focus": {
      outline: "none",
    },
  },
  amount: {
    display: "flex",
    "& > *": {
      marginRight: 20,
    },
  },
}));

function Action(props) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ModalSize open={open} onClose={() => setOpen(false)} />
      <div className={classes.amount}>
        <Amount />
        <BuyButton />
      </div>
      <button
        className={classes.button}
        type="button"
        onClick={() => setOpen(true)}
      >
        <FeaturedPlayListOutlinedIcon />
        Hướng dẫn chọn size
      </button>
    </div>
  );
}

Action.propTypes = {};

export default Action;
