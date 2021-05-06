import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CardDetail from "../CardDetail/index.jsx";
import StorefrontIcon from "@material-ui/icons/Storefront";
import TimerIcon from "@material-ui/icons/Timer";
import PhoneIcon from "@material-ui/icons/Phone";
import commerce from "./commerce.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20
  },
  content: {
    marginLeft: 20,
    lineHeight: 2,
    color: "#2d2a2a"
  },
  contact: {
    marginLeft: 8,
    lineHeight: 2,
    color: "#2d2a2a"
  },
  image: {
    height: 200,
    width: 350,
    marginRight: 10,
    marginTop: 5
  }
}));

const FooterDetail = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item container spacing={2}>
        <Grid item xs={3}>
          <Typography variant="h6" component="h6" className={classes.content}>
            CHĂM SÓC KHÁCH HÀNG <br /> MEMBERSHIP & Reward <br /> Hướng dẫn
            thanh toán <br /> Chính sách đổi trả <br /> Quy định và bảo mật{" "}
            <br /> Góp ý và liên hệ
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <StorefrontIcon />
          <Typography
            variant="h6"
            component="body1"
            className={classes.contact}
          >
            54 Nguyễn Lương Bằng, Hòa Khánh Bắc, Liên Chiểu, Đà Nẵng
          </Typography>
          <br />
          <TimerIcon />
          <Typography
            variant="h6"
            component="body1"
            className={classes.contact}
          >
            Thứ hai - Chủ Nhật: 8h00 - 22h00
          </Typography>
          <br />
          <PhoneIcon />
          <Typography
            variant="h6"
            component="body1"
            className={classes.contact}
          >
            Hotline: 0979.165.156
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <div>
            <img className={classes.image} src={commerce} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterDetail;
