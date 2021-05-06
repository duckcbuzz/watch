import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
  tabs: {
    "& > *": {
      backgroundColor: "#FFF",
      fontSize: 16,
      textDecoration: "none",
      fontWeight: 700,
      textTransform: "uppercase",
      margin: "5px 10px",
      color: "#333",
      borderBottom: "2px solid #FFF",
      "&:focus": {
        outline: "none",
      },
      "&:hover": {
        cursor: "pointer",
        borderBottom: "2px solid",
        transition: "border-bottom 1s",
      },
    },
  },
  active: {
    borderBottom: "2px solid",
  },
}));

function Menu(props) {
  const classes = useStyles();
  let { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname);

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  const toggle = () => {
    setIsActive(pathname);
  };

  return (
    <div className={classes.tabs}>
      <Link
        onClick={toggle}
        to="/"
        className={isActive === "/" ? classes.active : null}
      >
        Trang chủ
      </Link>
      <Link
        onClick={toggle}
        to="/product"
        className={isActive === "/product" ? classes.active : null}
      >
        Tất cả sản phẩm
      </Link>
      {/* <Link
        onClick={toggle}
        to="/"
        className={isActive === "/" ? classes.active : null}
      >
        Áo
      </Link>
      <Link
        onClick={toggle}
        to="/"
        className={isActive === "/" ? classes.active : null}
      >
        Quần
      </Link> */}
    </div>
  );
}

Menu.propTypes = {};

export default Menu;
