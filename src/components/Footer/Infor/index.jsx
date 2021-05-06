import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";

import InforItem from "./InforItem";
import { Link } from "@material-ui/core";

function Infor(props) {
  return (
    <div>
      <img
        width="50"
        src="https://nocturnal.vn/wp-content/uploads/2019/03/store.svg"
        alt="banner"
      />
      <InforItem
        icon={<LocationOnIcon />}
        content={"486/11A Phan Xích Long, Phú Nhuận, Hồ Chí Minh."}
      />

      <InforItem
        icon={<LockOpenIcon />}
        content={"Thứ hai - Chủ Nhật : 12h00 - 22h00"}
      />

      <InforItem
        icon={<FacebookIcon />}
        content={
          <div>
            <span>Fanpage: </span>
            <Link href="http://google.com/">LAPI BRAND</Link>
          </div>
        }
      />

      <InforItem icon={<PhoneIcon />} content="Hotline: 0944 821 641" />
    </div>
  );
}

Infor.propTypes = {};

export default Infor;
