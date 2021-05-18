import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '16%',
    margin: "2%",
    paddingBottom: '30px',
    flexDirection: 'column',
    position: 'relative',
    ["@media (max-width: 768px)"]: {
      width: "29.3%",
    },
    ["@media (max-width: 425px)"]: {
      width: "46%",
    },
  },
}));

function SetLayoutOfItem(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.root}>
      { children }
    </div>
  )
}

export default SetLayoutOfItem

