import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ProductDetail from '../components/ProductDetail';
import { getDetailProduct } from '../redux/actions/product';

export default function ProductDetailPage() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.product.detailProduct);

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [])

  return (
    <ProductDetail detail={productDetail}/>
  )
}