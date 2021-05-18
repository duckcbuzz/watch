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
    height: "20vw",
    margin: "0px 3px",
    ["@media (max-width: 768px)"]: {
      height: "40vw",
    },
  },
}));

function Slideshow(props) {
  const classes = useStyles();
  // eslint-disable-next-line react/prop-types
  const { slideImages } = props;
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    slidesToShow: 3,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      }
    ],
  };

  return (
    <Slider {...settings}>
      {slideImages?.map((item, index) => {
        return (
          <div key={index}>
            <img src={item} className={classes.image} />
          </div>
        );
      })}
    </Slider>
  );
}

export default Slideshow;
