import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Product from "../components/Product";
import { getListProduct } from "../redux/actions/product";

const ProductPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.listProduct);

  useEffect(() => {
    dispatch(getListProduct());
  }, []);

  return <Product listProducts={product}/>;
}

export default ProductPage;
