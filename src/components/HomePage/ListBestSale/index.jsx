import React from "react";
import ListCard from "../../UI_Kits/ListCard";
import Title from "./Title";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
}));

function ListBestSale(props) {
  const classes = useStyles();

  // eslint-disable-next-line react/prop-types
  const { listProducts } = props;
  return (
    <div className={classes.root}>
      <Title />
      <ListCard listProducts={listProducts} />
    </div>
  );
}

ListBestSale.propTypes = {};

export default ListBestSale;
