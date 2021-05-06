import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";

import Card from "./Card";

const useStyles = makeStyles(() => ({
  grid: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

function ListCard(props) {
  const classes = useStyles();
  const { listProducts } = props;

  return (
    <div className={classes.grid}>
      {listProducts?.map((item, index) => {
        return (
          <Card
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

ListCard.propTypes = {
  listProducts: PropTypes.array
};

ListCard.defaultProps = {
  listProducts: []
};

export default ListCard;
