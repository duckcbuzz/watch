import React from "react";
import Infor from "./Infor";
import { Grid, makeStyles } from "@material-ui/core";
import Typography from "../UI_Kits/Typography";

const useStyle = makeStyles(() => ({
  footer: {
    padding: "2%",
    justifyContent: "space-between",
  },
  infor: {
    // flexGrow: 2,
  },
}));

export default function Footer(props) {
  const classes = useStyle();

  return (
    <Grid container justify="space-between" className={classes.footer}>
      <Grid item>
        <div style={{ background: "red" }}>
          <img
            src="https://bizweb.dktcdn.net/100/287/440/themes/775848/assets/davies.svg"
            alt=""
          />
        </div>
        <Typography fontSize={18} fontWeight={700}>
          DAVIES BRAND
        </Typography>
        <Typography fontSize={18}>Thương hiệu thời trang đường phố.</Typography>
      </Grid>
      <Grid item>
        <Typography
          fontSize={22}
          fontWeight={700}
          lineHeight={1}
          textTransform="uppercase"
        >
          Chăm sóc khách hàng
        </Typography>
        <Typography fontSize={18}>
          {[
            "MEMBERSHIP & REWARD",
            "Hướng dẫn thanh toán",
            "Chính sách đổi trả",
            "Quy định & bảo mật ",
            "Góp ý / Liên hệ Nocturnal",
          ].map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </Typography>
      </Grid>
      <Grid item className={classes.infor}>
        <Infor />
      </Grid>
    </Grid>
  );
}
