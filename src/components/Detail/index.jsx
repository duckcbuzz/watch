import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CardList from "../CardList/index.jsx";

const useStyles = makeStyles(() => ({
  image: {
    height: 300,
    width: 1500,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundImage:
      " url(https://nocturnal.vn/wp-content/uploads/2019/03/shop-page-heading-nocturnal.png.webp);"
  },
  text: {
    textAlign: "left",
    color: "white",
    fontWeight: "bold",
    fontSize: 80,
    marginLeft: 20
  }
}));

const DetailPage = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.image}>
        <div className={classes.text}>Search results for: </div>
      </div>

      <CardList />

      <CardList />

      <CardList />

      <Divider style={{ marginTop: 50 }} />
    </React.Fragment>
  );
};

export default DetailPage;
