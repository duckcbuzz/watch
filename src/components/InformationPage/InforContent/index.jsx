import React from "react";
import Typography from "../../UI_Kits/Typography";
import Discount from "./Discount";
import Action from "./Action";
import Size from "./Size";

function InforContent(props) {
  const { name, price } = props;
  return (
    <div>
      <Typography fontSize={18} padding="0px 0px 10px 0px">
        Trang chủ/ Hoodie & Sweater/ Áo Hoodie Sunset Volcano Unisex Nocturnal
      </Typography>
      <br />
      <Typography fontWeight={700} fontSize={40}>
        {name}
      </Typography>
      <Typography fontSize={28} lineHeight={3}>
        {price}
      </Typography>
      <Discount />
      <Size />
      <Action />
    </div>
  );
}

InforContent.propTypes = {};

export default InforContent;
