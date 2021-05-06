import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";

import CategoryItem from "./CategoryItem";

Category.propTypes = {
  categoryArray: PropTypes.array
};

Category.defaultProps = {
  categoryArray: []
}

const useStyles = makeStyles(() => ({
  grid: {
    display: "flex",
    flexWrap: "wrap"
  },
}));

function Category(props) {
  const classes = useStyles();
  const { categoryArray } = props;

  return (
    <div className={classes.grid}>
      {categoryArray.map((item) => (
        <CategoryItem
          className={classes.item}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default Category;
