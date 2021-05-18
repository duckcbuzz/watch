import React from 'react'
import PropTypes from 'prop-types'
import { CardMedia, makeStyles } from '@material-ui/core'

ImageWithAction.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
}

ImageWithAction.defaultProps = {
  image: "https://picsum.photos/600",
  title: "",
}

const useStyles = makeStyles((theme) => ({
  media: {
    transition: "all .7s",
    height: "100%",
    backgroundSize: "120%",
    position: "relative",
    objectFit: "cover",

    "&:hover": {
      cursor: 'pointer',
      backgroundSize: "150%",
    },

    "&:after": {
      display: "none",
      content: '"XEM MÀU VÀ SIZE"',
      position: "absolute",
      zIndex: "9",
      backgroundColor: "#00000080",
      color: 'white',
      padding: theme.spacing(2, 0),
      bottom: 0,
      left: 0,
      right: 0,
    },

    "&:hover:after": {
      display: "grid",
      placeItems: "center",
    },
  }
}));

function ImageWithAction(props) {
  const classes = useStyles();
  const {image, title} = props;
  return (
    <CardMedia
      className={classes.media}
      image={image}
      title={title}
    />
  )
}

export default ImageWithAction

