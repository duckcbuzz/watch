import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import Typography from "../../UI_Kits/Typography";

const useStyles = makeStyles(() => ({
  title: {
    color: "#7D7777",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  changeColor: {
    color: "#7D7777",
  },
}));

function Title(props) {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item>
        <Typography fontSize={18} textTransform="uppercase">
          Feedbacks
        </Typography>
        <Typography
          fontSize={26}
          fontWeight={900}
          lineHeight={2}
          textTransform="uppercase"
        >
          Khách hàng
        </Typography>

        <Typography fontSize={18}>
          Hình ảnh khách hàng với thời trang Nocturnal menswear
        </Typography>
        <Typography className={classes.uppercase} fontSize={16} lineHeight={4}>
          <Link style={{ color: "#000000" }}>XEM THÊM</Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

Title.propTypes = {};

export default Title;
