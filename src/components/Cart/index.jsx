import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Typography from "../UI_Kits/Typography";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto"
  },
  header: {
    margin: "10px 0px",
  },
  footer: {
    display: "flex",
    justifyContent: "center"
  },
  button: {
    color: '#FFFFFF',
    border: 'none',
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor:' #000000',
    marginTop: 15
  }
});

const Cart = (props) => {
  const classes = useStyles();
  const { isCartOpened, toggleDrawer } = props;

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.header}>
        <Typography fontWeight={700} fontSize={32} textAlign="center">
          Giỏ hàng
        </Typography>
      </div>
      <div className={classes.main}>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
      {/* <Divider /> */}
      <div className={classes.footer}>
        <button className={classes.button}>Mua hàng</button>
      </div>
    </div>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Drawer anchor="right" open={isCartOpened} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

Cart.propTypes = {
  isCartOpened: PropTypes.bool,
  toggleDrawer: PropTypes.func
};

Cart.defaultProps = {
  toggleDrawer: null
};

export default Cart;