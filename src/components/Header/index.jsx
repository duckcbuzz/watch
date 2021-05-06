import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

import Menu from "./Menu";
import InputSearch from "./InputSearch";
import Cart from "../Cart";
import Logo from "../UI_Kits/Logo";

const useStyles = makeStyles(() => ({
  root: {
    position: "sticky",
    top: 0,
    backgroundColor: "#FFF",
    zIndex: "10",
    display: "flex",
    padding: "0px 20px",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 1px 3px rgba(0,0,0,.1)"
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 20,
    marginTop: 20
  }, 
  cartIcon: {
    cursor: 'pointer'
  }
}));

export default function Header() {
  const classes = useStyles();
  const [isCartOpened, setIsCartOpened] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setIsCartOpened(open);
  };

  return (
    <div className={classes.root}>
      <Logo />
      <Menu />
      <InputSearch />
      <Badge badgeContent={0} color="primary" showZero>
        <LocalMallOutlinedIcon onClick={toggleDrawer(true)} className={classes.cartIcon}/>
      </Badge>
      <Cart isCartOpened={isCartOpened} toggleDrawer={toggleDrawer}></Cart>
    </div>
  );
}
