import React from "react";
import Typography from "../UI_Kits/Typography";
import ImageWithAction from "./ImageWithAction";
import ImageProduct from "./ImageProduct";
import SetLayoutOfItem from "./SetLayoutOfItem";
import imageNotFound from "../../assets/image-not-found.png";
import { Link } from "react-router-dom";
import { makeStyles, TablePagination } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  link: {
    color: '#000000',
    textDecoration: 'none',
    width: '100%',
  },
  nameProduct: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 2,
    margin: 0,
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const { image, name, price, id } = props;

  return (
    <SetLayoutOfItem>
      <Link to={id ? `/product/${id}`: ''} className={classes.link}>
        <ImageProduct>
          <ImageWithAction image={image || imageNotFound} title={name} />
        </ImageProduct>
        <p className={classes.nameProduct}>{name}</p>
        <Typography fontSize={16}>${price}</Typography>
      </Link>
    </SetLayoutOfItem>
  );
}
