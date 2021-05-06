import React from "react";

import { makeStyles } from "@material-ui/core";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";

import Typography from "../../UI_Kits/Typography";

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    background: "#fff0ea",
    padding: 20,
  },
  icon: {
    marginRight: 5,
    fontSize: 30,
    color: "#333",
  },
  code: {
    padding: "5px 15px",
    border: "1px dashed #ff6600",
    fontWeight: "bold",
  },
}));

function Discount(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <LocalShippingOutlinedIcon className={classes.icon} />
      <Typography color="#ff6600" fontSize={18}>
        Nhập mã <span className={classes.code}>300FREE</span> : Miễn phí ship
        trên toàn quốc cho hoá đơn từ 300k.
      </Typography>
    </div>
  );
}

Discount.propTypes = {};

export default Discount;
