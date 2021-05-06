import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React from "react";
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
    maxHeight: 500,
    marginTop: 20,
    marginLeft: 20,
    textAlign: "center",
    fontWeight: "bold"
  },
  media: {
    height: 300,
    width: 300,
    marginBottom: 10
  }
}));

const CarDetail = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Link to="product/detail">
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://nocturnal.vn/wp-content/uploads/2017/06/3-600x600.jpg"
        />
        <CardContent>
          <Typography variant="body1" color="black" component="h6">
            Áo khoác Kaki Backlayered <br />
            200.000đ
          </Typography>
          <br />
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="add shopping">
            <AddShoppingCartIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CarDetail;
