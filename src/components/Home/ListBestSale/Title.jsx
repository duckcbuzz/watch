import React from "react";

import Typography from "../../UI_Kits/Typography";

function Title(props) {

  return (
    <Typography
      fontSize={40}
      fontWeight={900}
      textTransform="uppercase"
      lineHeight={3}
    >
      Sản phẩm bán chạy
    </Typography>
  );
}

export default Title;
