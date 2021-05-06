import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: "100%",
    boxShadow: "none"
  },
  text: {
    color: "#2d2a2a",
    fontWeight: 1500
  },
  indicator: {
    color: "primary"
  }
}));

export default function DisabledTabs() {
  const classes = useStyles();
  const labels = [
    "TRANG CHỦ",
    "SHOP ALL",
    "ÁO",
    "QUẦN",
    "PHỤ KIỆN",
    "CLEARANCE SALES",
    "MEMBERSHIP"
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor={classes.text}
        onChange={handleChange}
        centered
      >
        {labels.map(label => (
          <Tab label={label} />
        ))}
      </Tabs>
    </Paper>
  );
}
