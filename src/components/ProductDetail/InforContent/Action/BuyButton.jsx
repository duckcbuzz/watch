import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  button: {
    padding: "15px 30px",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    textTransform: "uppercase",
    border: "none",
    fontSize: 18
  }
}))

function BuyButton(props) {
  const classes = useStyle();
  return <button className={classes.button}>Mua hàng</button>;
}

BuyButton.propTypes = {};

export default BuyButton;
