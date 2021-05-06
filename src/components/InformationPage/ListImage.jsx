import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {
    display: "flex", 
    flexDirection: "column"
  },
  image: {
    width: 150,
    marginBottom: 20
  }
}))

function ListImage(props) {
  const classes = useStyle();
  const { listImages } = props;

  return (
    <div className={classes.root}>
      {listImages?.map((item, index) => (
        <img className={classes.image} src={item} alt="" key={index} />
      ))}
    </div>
  );
}

ListImage.propTypes = {
  listImages: PropTypes.array
};

ListImage.defaultProps = {
  listImages: []
};

export default ListImage;
