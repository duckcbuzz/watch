import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "../../UI_Kits/Typography";
function InforItem(props) {
  // eslint-disable-next-line react/prop-types
  const { icon, content } = props;
  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography fontSize={18} lineHeight={2}>
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
}

InforItem.propTypes = {};

export default InforItem;
