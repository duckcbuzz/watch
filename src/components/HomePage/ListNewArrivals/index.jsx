import React from "react";
import PropTypes from "prop-types";
import ListCard from "../../UI_Kits/ListCard";
import Title from "./Title";

function ListNewArrivals(props) {
  // eslint-disable-next-line react/prop-types
  const { listProducts } = props;
  return (
    <div>
      <Title />
      <ListCard listProducts={listProducts} />
    </div>
  );
}

ListNewArrivals.propTypes = {
  listProducts: PropTypes.array
};

ListNewArrivals.defaultProps = {
  listProducts: []
};

export default ListNewArrivals;
