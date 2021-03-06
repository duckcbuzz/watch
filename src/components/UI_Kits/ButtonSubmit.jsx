import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  button: {
    width: "100%",
    minHeight: theme.spacing(5),
    marginTop: theme.spacing(1)
  }
}));

export default function ButtonSubmit({ name, disabled, handleSubmitLogin }) {
  const classes = useStyles();
  return (
    <Button
      fullWidth
      className={classes.button}
      type="button"
      variant="contained"
      color="primary"
      disabled={disabled}
      onClick={handleSubmitLogin}
    >
      {name}
    </Button>
  );
}
