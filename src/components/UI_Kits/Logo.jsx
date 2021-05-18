import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "./Typography";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none'
  },
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    maxWidth: 30,
    marginRight: 5
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#000000",
  }
}))

const Logo = () => {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.link}>
      <div className={classes.root}>
        <img className={classes.image} src={logo} alt="logo" />
        <p className={classes.title}>Likewatch</p>
      </div>
    </Link>

  );
};

export default Logo;
