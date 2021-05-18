import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import ImageMedia from "../../UI_Kits/ImageWithMask";
import ImageProduct from "../../UI_Kits/ImageProduct";
import SetLayoutOfItem from "../../UI_Kits/SetLayoutOfItem";

CategoryItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

CategoryItem.defaultProps = {
  image: "https://picsum.photos/600",
  title: "",
};

const useStyles = makeStyles(() => ({
  typography: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "24px",
    zIndex: "9",
  },
}));

function CategoryItem(props) {
  const classes = useStyles();

  const { image, title } = props;

  return (
    <SetLayoutOfItem>
      <ImageProduct>
        <ImageMedia image={image} title={title} />
      </ImageProduct>
      <div className={classes.typography}>{title}</div>
    </SetLayoutOfItem>
  );
}

export default CategoryItem;
