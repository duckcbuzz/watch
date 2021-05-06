import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles(theme => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    borderColor: "rgba(0, 0, 0, 0.54)",
    borderStyle: "solid",
    borderWidth: 3,
    width: 700,
    height: 50,
    marginTop: 30
  }
}));

const SearchBar = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <InputBase className={classes.input} placeholder="Finding Item..." />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default SearchBar;
