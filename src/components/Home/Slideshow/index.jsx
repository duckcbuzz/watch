import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Slideshow.propTypes = {
  slideImages: PropTypes.array,
};

Slideshow.defaultProps = {
  slideImages: [],
};

const useStyles = makeStyles(() => ({
  image: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "40vw",
    margin: "0px 20px",
  },
}));

function Slideshow(props) {
  const classes = useStyles();
  // eslint-disable-next-line react/prop-types
  const { slideImages } = props;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {slideImages?.map((item, index) => {
        return (
          <div key={index}>
            <div
              className={classes.image}
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          </div>
        );
      })}
    </Slider>
  );
}

export default Slideshow;
