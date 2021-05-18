import React from "react";
import PropTypes from "prop-types";
import ListCard from "../UI_Kits/ListCard";
import Typography from "../UI_Kits/Typography";

function ListSameProduct(props) {
  const { listProducts } = props;
  return (
    <div>
      <Typography
        fontWeight={900}
        fontSize={28}
        lineHeight={3}
        textTransform="uppercase"
        padding="0 2%"
      >
        Sản phẩm tương tự
      </Typography>
      <ListCard listProducts={listProducts} />
    </div>
  );
}

ListSameProduct.propTypes = {
  listProducts: PropTypes.array
};

ListSameProduct.defaultProps = {
  listProducts: []
};

export default ListSameProduct;
