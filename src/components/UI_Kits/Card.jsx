import React from "react";
import Typography from "../UI_Kits/Typography";
import ImageWithAction from "./ImageWithAction";
import ImageProduct from "./ImageProduct";
import SetLayoutOfItem from "./SetLayoutOfItem";

export default function MediaCard(props) {
  const { image, name, price } = props;

  return (
    <SetLayoutOfItem>
      <ImageProduct>
        <ImageWithAction image={image} title={name} />
      </ImageProduct>
      <Typography fontWeight={700} fontSize={18} lineHeight={2}>
        {name}
      </Typography>
      <Typography fontSize={16}>{price}</Typography>
    </SetLayoutOfItem>
  );
}
