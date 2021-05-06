import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "./Typography";
import logo from "../../assets/logo.svg";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    maxWidth: 30,
    marginRight: 5
  }
}))

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} src={logo} alt="logo" />
      <Typography textTransform="uppercase" fontWeight="bold">Likewatch</Typography>
    </div>
  );
};

export default Logo;
